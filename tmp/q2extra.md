Questão de Múltipla Escolha - Consumo de API e Carga Dinâmica de Dropdown
Com base nos requisitos da AP2 para consumir APIs econômicas e construir interfaces via JavaScript, qual é a abordagem correta para consumir a Awesome API de cotações de moedas e carregar dinamicamente um dropdown (select) com as opções de moedas disponíveis?

A)
```js
// Abordagem correta - com tratamento de erro e criação dinâmica
async function loadCurrencyDropdown() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL');
        if (!response.ok) throw new Error('Erro na requisição');
        
        const data = await response.json();
        const currencyArray = Object.values(data);
        const select = document.getElementById('currencySelect');
        
        // Limpa opções existentes
        select.innerHTML = '<option value="">Selecione uma moeda...</option>';
        
        currencyArray.forEach(currency => {
            const option = document.createElement('option');
            option.value = currency.code;
            option.textContent = `${currency.code} - ${currency.name}`;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar moedas:', error);
    }
}
```

B)
```js
// Abordagem incorreta - sem tratamento de erro
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(data => data.json())
.then(currencies => {
    const select = document.getElementById('currencySelect');
    currencies.forEach(currency => {
        select.innerHTML += `<option value="${currency.code}">${currency.name}</option>`;
    });
});
```

C)
```js
// Abordagem incorreta - usando XMLHttpRequest síncrono
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL', false);
xhr.send();

const currencies = JSON.parse(xhr.responseText);
const select = document.getElementById('currencySelect');
for (let currency in currencies) {
    select.innerHTML += `<option>${currency}</option>`;
}
```

D)
```js
// Abordagem incorreta - sem verificação de resposta
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response => response.json())
.then(data => {
    const select = document.getElementById('currencySelect');
    select.innerHTML = data.map(item => `<option value="${item}">${item}</option>`).join('');
});
```

Resposta Correta: B
Código Completo da Solução:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulador de Investimentos - Dropdown Dinâmico</title>
    <style>
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        
        .form-group {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        
        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            color: #333;
        }
        
        select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            background-color: white;
        }
        
        .currency-info {
            margin-top: 20px;
            padding: 15px;
            background-color: #e8f5e8;
            border-left: 4px solid #4CAF50;
            border-radius: 4px;
        }
        
        .error {
            color: #d32f2f;
            background-color: #ffebee;
            padding: 10px;
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
            <p>Selecione uma moeda para ver as informações atualizadas</p>
        </header>
        
        <main>
            <section class="form-group">
                <label for="currencySelect">Escolha uma Moeda:</label>
                <select id="currencySelect">
                    <option value="">Carregando moedas...</option>
                </select>
                
                <button id="refreshCurrencies">Atualizar Lista</button>
            </section>
            
            <section id="currencyInfo" class="currency-info" style="display: none;">
                <h3>Informações da Moeda Selecionada:</h3>
                <div id="currencyDetails"></div>
            </section>
        </main>
    </div>

    <script>
        // Array para armazenar dados das moedas
        let currencyData = [];
        
        // Função correta para carregar dropdown dinamicamente
        async function loadCurrencyDropdown() {
            try {
                // Indica carregamento
                const select = document.getElementById('currencySelect');
                select.innerHTML = '<option value="">Carregando moedas...</option>';
                
                // Fetch da Awesome API
                const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL');
                
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Converte objeto em array
                currencyData = Object.values(data);
                
                // Limpa opções existentes
                select.innerHTML = '<option value="">Selecione uma moeda...</option>';
                
                // Adiciona opções dinamicamente
                currencyData.forEach(currency => {
                    const option = document.createElement('option');
                    option.value = currency.code;
                    option.textContent = `${currency.code} - ${currency.name}`;
                    select.appendChild(option);
                });
                
                console.log('Dropdown carregado com sucesso:', currencyData);
                
            } catch (error) {
                console.error('Erro ao carregar moedas:', error);
                displayError('Erro ao carregar lista de moedas: ' + error.message);
            }
        }
        
        // Função para exibir informações da moeda selecionada
        function displayCurrencyInfo(selectedCode) {
            const currency = currencyData.find(item => item.code === selectedCode);
            
            if (currency) {
                const infoSection = document.getElementById('currencyInfo');
                const detailsDiv = document.getElementById('currencyDetails');
                
                const variation = parseFloat(currency.pctChange);
                const variationColor = variation >= 0 ? '#4CAF50' : '#f44336';
                const variationSymbol = variation >= 0 ? '+' : '';
                
                detailsDiv.innerHTML = `
                    <p><strong>Código:</strong> ${currency.code}</p>
                    <p><strong>Nome:</strong> ${currency.name}</p>
                    <p><strong>Cotação:</strong> R$ ${parseFloat(currency.bid).toFixed(2)}</p>
                    <p><strong>Variação:</strong> 
                        <span style="color: ${variationColor}; font-weight: bold;">
                            ${variationSymbol}${variation.toFixed(2)}%
                        </span>
                    </p>
                    <p><strong>Última Atualização:</strong> ${new Date(currency.create_date).toLocaleString('pt-BR')}</p>
                `;
                
                infoSection.style.display = 'block';
            } else {
                document.getElementById('currencyInfo').style.display = 'none';
            }
        }
        
        // Função para exibir erros
        function displayError(message) {
            const select = document.getElementById('currencySelect');
            select.innerHTML = '<option value="">Erro ao carregar</option>';
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = message;
            
            const container = document.querySelector('.container');
            container.insertBefore(errorDiv, container.firstChild);
        }
        
        // Event listeners
        document.getElementById('currencySelect').addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue) {
                displayCurrencyInfo(selectedValue);
            } else {
                document.getElementById('currencyInfo').style.display = 'none';
            }
        });
        
        document.getElementById('refreshCurrencies').addEventListener('click', loadCurrencyDropdown);
        
        // Carrega dropdown automaticamente ao inicializar
        document.addEventListener('DOMContentLoaded', loadCurrencyDropdown);
    </script>
</body>
</html>
```

Por que a resposta A está correta:

- Uso de async/await: Torna o código mais legível e facilita o tratamento de erros
- Tratamento de erros: Implementa try/catch e verifica response.ok
- Conversão correta: Usa Object.values(data) para converter o objeto da API em array
- Criação dinâmica: Usa createElement() e appendChild() em vez de innerHTML
- Limpeza do select: Remove opções existentes antes de adicionar novas
- Interface responsiva: Fornece feedback visual durante o carregamento

**As outras opções estão incorretas por:**

B: Sem tratamento de erro e acesso incorreto aos dados
C: Usa XMLHttpRequest síncrono (deprecated) e estrutura de dados incorreta
D: Sem verificação de resposta e tentativa de usar map() em objeto