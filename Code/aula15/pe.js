document.addEventListener('DOMContentLoaded', () => {
  const refreshBtn = document.getElementById('refreshBtn');
  const lastUpdateEl = document.getElementById('lastUpdate');

  // Atualiza todos os dados
  const updateAllData = async () => {
    try {
      // Dados do Brasil
      await fetchBrazilianData();
      
      // Dados internacionais
      await fetchInternationalData();
      
      // Histórico do dólar
      await fetchUSDHistory();
      
      // Atualiza horário
      lastUpdateEl.textContent = new Date().toLocaleString();
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };

  // 1. Busca dados brasileiros (Banco Central)
  const fetchBrazilianData = async () => {
    try {
      // SELIC (Taxa básica de juros)
      const selicResponse = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json');
      const selicData = await selicResponse.json();
      document.getElementById('selic').textContent = `${selicData[0].valor}%`;
      
      // IPCA (Inflação)
      const ipcaResponse = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/1?formato=json');
      const ipcaData = await ipcaResponse.json();
      document.getElementById('ipca').textContent = `${ipcaData[0].valor}%`;
      
      // Dólar comercial (API Awesome)
      const usdResponse = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const usdData = await usdResponse.json();
      document.getElementById('usd-brl').textContent = `R$ ${parseFloat(usdData.USDBRL.bid).toFixed(2)}`;
    } catch (error) {
      console.error("Erro ao buscar dados brasileiros:", error);
    }
  };

  // 2. Busca dados internacionais
  const fetchInternationalData = async () => {
    try {
      // Taxa de juros dos EUA (API Alpha Vantage - necessita de chave)
      const alphaVantageApiKey = 'RXKO3QY0D47HB4M8'; // Substitua por sua chave se necessário
      const fedRateResponse = await fetch(`https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=daily&apikey=${alphaVantageApiKey}`);
      const fedRateData = await fedRateResponse.json();
      const lastFedRate = fedRateData.data?.[0]?.value;
      document.getElementById('fed-rate').textContent = lastFedRate ? `${lastFedRate}%` : 'N/D';
      
      // Preço do ouro (API GoldAPI)
      const goldApiKey = 'goldapi-4ai588smbjt71ph-io'; // Sua chave de API GoldAPI
      let goldPrice = null;
      try {
        const goldResponse = await fetch('https://www.goldapi.io/api/XAU/USD', {
          headers: {
        'x-access-token': goldApiKey,
        'Content-Type': 'application/json'
          }
        });
        if (goldResponse.ok) {
          const goldData = await goldResponse.json();
          goldPrice = goldData.price;
        }
      } catch (e) {
        goldPrice = null;
      }
      document.getElementById('gold-price').textContent = goldPrice ? `$ ${goldPrice.toFixed(2)}` : 'N/D';
      // Preço do Bitcoin (API CoinGecko)
      const btcResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const btcData = await btcResponse.json();
      document.getElementById('btc-price').textContent = `$ ${btcData.bitcoin.usd.toLocaleString()}`;
    } catch (error) {
      console.error("Erro ao buscar dados internacionais:", error);
    }
  };

  // 3. Busca histórico do dólar (últimos 30 dias)
  const fetchUSDHistory = async () => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/daily/USD-BRL/30');
      const historyData = await response.json();
      
      // Processa dados para o gráfico (simplificado)
      const chartData = historyData.map(item => ({
        date: new Date(item.timestamp * 1000).toLocaleDateString(),
        value: parseFloat(item.bid)
      })).reverse();
      
      renderChart(chartData);
    } catch (error) {
      console.error("Erro ao buscar histórico do dólar:", error);
    }
  };

  // 4. Renderiza gráfico simples (usando HTML/CSS básico)
  const renderChart = (data) => {
    const chartContainer = document.getElementById('usdChart');
    chartContainer.innerHTML = '';
    
    const maxValue = Math.max(...data.map(item => item.value));
    const minValue = Math.min(...data.map(item => item.value));
    
    data.forEach((item, index) => {
      const barHeight = ((item.value - minValue) / (maxValue - minValue)) * 100;
      
      const bar = document.createElement('div');
      bar.className = 'chart-bar';
      bar.style.height = `${barHeight}%`;
      bar.style.width = `calc(100% / ${data.length} - 2px)`;
      bar.title = `${item.date}: R$ ${item.value.toFixed(2)}`;
      
      chartContainer.appendChild(bar);
    });
  };

  // Adiciona estilo dinâmico para o gráfico
  const style = document.createElement('style');
  style.textContent = `
    #usdChart {
      display: flex;
      align-items: flex-end;
      gap: 2px;
    }
    .chart-bar {
      background-color: #3498db;
      transition: height 0.3s ease;
    }
    .chart-bar:hover {
      background-color: #2980b9;
    }
  `;
  document.head.appendChild(style);

  // Event Listeners
  refreshBtn.addEventListener('click', updateAllData);
  
  // Carrega dados iniciais
  updateAllData();
});