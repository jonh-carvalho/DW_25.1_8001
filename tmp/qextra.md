Questão de Múltipla Escolha - Consumo de API e Armazenamento em Array
Com base nos requisitos da AP2 para consumir APIs econômicas e construir interfaces via JavaScript, qual é a abordagem correta para consumir a Awesome API de cotações de moedas, armazenar os dados em um array e exibir as informações em uma tabela?

A) Usar apenas innerHTML para fazer a requisição e inserir dados diretamente no HTML, sem validação.

B) Fazer requisições synchronas com XMLHttpRequest e usar apenas console.log() para exibir os dados. 

C) Utilizar fetch() para consumir o endpoint /json/last/USD-BRL,EUR-BRL, armazenar os dados em um array usando Object.values(), e criar elementos DOM dinamicamente para exibir as cotações em tabela. 

D) Consumir a API apenas uma vez no carregamento da página, sem possibilidade de atualização dos dados.

Resposta Correta: C

Solução em Código:

Uso correto de fetch(): Consome a Awesome API de forma assíncrona com tratamento de erros adequado

Armazenamento em array: Utiliza Object.values(data) para converter o objeto retornado pela API em um array (currencyData)

Criação dinâmica de elementos DOM: Usa createElement() e appendChild() para construir a tabela dinamicamente

Manipulação do array: O array currencyData é manipulado para exibir os dados e pode ser limpo/atualizado

Tratamento de dados: Processa as informações da API (cotações, variações, datas) e formata adequadamente

Interface interativa: Permite atualizar e limpar os dados, demonstrando a manipulação do array


```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulador de Investimentos - Dados Econômicos</title>
    <style>
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .economic-data {
            margin: 30px 0;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background-color: #4CAF50;
            color: white;
            font-weight: bold;
        }
        
        .currency-up {
            color: #4CAF50;
            font-weight: bold;
        }
        
        .currency-down {
            color: #f44336;
            font-weight: bold;
        }
        
        .loading {
            text-align: center;
            color: #666;
            padding: 20px;
        }
        
        .error {
            color: #d32f2f;
            background-color: #ffebee;
            padding: 15px;
            border-radius: 4px;
            margin: 10px 0;
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px 5px;
        }
        
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Simulador de Investimentos</h1>
            <nav>
                <a href="#dados-economicos">Dados Econômicos</a> | 
                <a href="#investimentos">Investimentos</a>
            </nav>
        </header>
        
        <main>
            <section id="dados-economicos" class="economic-data">
                <h2>Dados Econômicos - Cotações de Moedas</h2>
                <button id="updateCurrencies">Atualizar Cotações</button>
                <button id="clearData">Limpar Dados</button>
                
                <div id="currencyContainer">
                    <p class="loading">Clique em "Atualizar Cotações" para carregar os dados...</p>
                </div>
            </section>
        </main>
    </div>

    <script>
        // Array para armazenar os dados das cotações
        let currencyData = [];
        
        // Função para consumir a Awesome API de cotações
        async function fetchCurrencyRates() {
            const container = document.getElementById('currencyContainer');
            
            try {
                // Exibe loading
                container.innerHTML = '<p class="loading">Carregando cotações...</p>';
                
                // Fetch da Awesome API - Endpoint de cotações múltiplas
                const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL');
                
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Armazena dados no array usando Object.values()
                currencyData = Object.values(data);
                
                // Exibe os dados em tabela
                displayCurrencyTable(currencyData);
                
                console.log('Dados armazenados no array:', currencyData);
                
            } catch (error) {
                console.error('Erro ao carregar cotações:', error);
                displayError(error.message);
            }
        }
        
        // Função para exibir os dados em uma tabela
        function displayCurrencyTable(dataArray) {
            const container = document.getElementById('currencyContainer');
            
            // Cria tabela dinamicamente
            const table = document.createElement('table');
            
            // Cria cabeçalho
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            
            const headers = ['Moeda', 'Nome', 'Cotação (R$)', 'Variação (%)', 'Data/Hora'];
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Cria corpo da tabela
            const tbody = document.createElement('tbody');
            
            // Itera sobre o array de dados
            dataArray.forEach(currency => {
                const row = document.createElement('tr');
                
                // Determina a classe CSS baseada na variação
                const variation = parseFloat(currency.pctChange);
                const variationClass = variation >= 0 ? 'currency-up' : 'currency-down';
                const variationSymbol = variation >= 0 ? '+' : '';
                
                // Cria células da linha
                const cells = [
                    currency.code,
                    currency.name,
                    `R$ ${parseFloat(currency.bid).toFixed(2)}`,
                    `${variationSymbol}${variation.toFixed(2)}%`,
                    new Date(currency.create_date).toLocaleString('pt-BR')
                ];
                
                cells.forEach((cellText, index) => {
                    const td = document.createElement('td');
                    td.textContent = cellText;
                    
                    // Aplica classe CSS na coluna de variação
                    if (index === 3) {
                        td.className = variationClass;
                    }
                    
                    row.appendChild(td);
                });
                
                tbody.appendChild(row);
            });
            
            table.appendChild(tbody);
            
            // Limpa container e adiciona tabela
            container.innerHTML = '';
            container.appendChild(table);
            
            // Adiciona informações extras
            const info = document.createElement('p');
            info.textContent = `Última atualização: ${new Date().toLocaleString('pt-BR')} | Total de moedas: ${dataArray.length}`;
            info.style.marginTop = '10px';
            info.style.fontSize = '14px';
            info.style.color = '#666';
            container.appendChild(info);
        }
        
        // Função para exibir erros
        function displayError(message) {
            const container = document.getElementById('currencyContainer');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = `Erro ao carregar cotações: ${message}`;
            container.innerHTML = '';
            container.appendChild(errorDiv);
        }
        
        // Função para limpar dados
        function clearCurrencyData() {
            currencyData = []; // Limpa o array
            const container = document.getElementById('currencyContainer');
            container.innerHTML = '<p class="loading">Dados limpos. Clique em "Atualizar Cotações" para carregar novos dados.</p>';
            console.log('Array de dados limpo:', currencyData);
        }
        
        // Event listeners
        document.getElementById('updateCurrencies').addEventListener('click', fetchCurrencyRates);
        document.getElementById('clearData').addEventListener('click', clearCurrencyData);
        
        // Carrega dados automaticamente ao inicializar a página
        document.addEventListener('DOMContentLoaded', fetchCurrencyRates);
    </script>
</body>
</html>
```