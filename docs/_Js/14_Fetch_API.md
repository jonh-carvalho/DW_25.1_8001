# **Roteiro Básico: Consumindo API com Fetch em JavaScript**

Uma página estática que busca e exibe imagens aleatórias de cachorros da **Dog CEO API**.

---

## ** Passo 1: Criar a Estrutura HTML Básica**

Crie um arquivo `index.html` com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dog API com Fetch</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    h1 {
      color: #333;
    }
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin: 20px 0;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    #dogImageContainer {
      margin-top: 20px;
    }
    #dogImage {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    #error {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1> Dog API com Fetch </h1>
  
  <button id="fetchButton">Buscar novo cachorro</button>
  
  <p id="error"></p>
  
  <div id="dogImageContainer">
    <!-- A imagem será inserida aqui via JavaScript -->
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## **Passo 2: Criar o JavaScript (`script.js`)**

Crie um arquivo `script.js` com o seguinte código:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetchButton');
  const dogImageContainer = document.getElementById('dogImageContainer');
  const errorElement = document.getElementById('error');

  // Função para buscar uma imagem aleatória de cachorro
  const fetchDogImage = async () => {
    try {
      fetchButton.disabled = true;
      fetchButton.textContent = 'Carregando...';
      errorElement.textContent = '';

      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      
      if (!response.ok) {
        throw new Error('Não foi possível carregar a imagem do cachorro.');
      }
      
      const data = await response.json();
      displayDogImage(data.message);
    } catch (err) {
      errorElement.textContent = err.message;
    } finally {
      fetchButton.disabled = false;
      fetchButton.textContent = 'Buscar novo cachorro';
    }
  };

  // Função para exibir a imagem na página
  const displayDogImage = (imageUrl) => {
    dogImageContainer.innerHTML = `
      <img src="${imageUrl}" alt="Cachorro aleatório" id="dogImage">
    `;
  };

  // Busca uma imagem quando a página é carregada
  fetchDogImage();

  // Adiciona o evento de clique ao botão
  fetchButton.addEventListener('click', fetchDogImage);
});
```

---

## **Passo 3: Executar o Projeto**

1. Abra o arquivo `index.html` em um navegador (você pode usar o **Live Server** do VS Code ou simplesmente clicar duas vezes no arquivo).
2. A página carregará automaticamente uma imagem de cachorro.
3. Clique no botão **"Buscar novo cachorro"** para carregar outra imagem aleatória.

---

## **Funcionalidades do App**

✅ **Busca imagens aleatórias de cachorros** usando a [Dog CEO API](https://dog.ceo/dog-api/).  
✅ **Botão para recarregar** uma nova imagem.  
✅ **Tratamento de erros** (se a API falhar).  
✅ **Feedback de carregamento** no botão enquanto a imagem é buscada.  
✅ **Estilização básica com CSS puro** (sem bibliotecas como Tailwind).  

---

## **Possíveis Melhorias**

🔸 Adicionar um dropdown para selecionar raças específicas.  
🔸 Salvar imagens favoritas no `localStorage`.  
🔸 Adicionar um modo escuro/claro.  

---


# **PARTE II: Dropdown de Raças na Dog API com Fetch**

Vou adaptar o código anterior para incluir um dropdown que permite selecionar raças específicas de cachorros.

## 📌 Código Completo Atualizado

### `index.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dog API com Seletor de Raças</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    h1 {
      color: #333;
    }
    select, button {
      padding: 10px;
      margin: 10px;
      font-size: 16px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 10px 20px;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    #dogImageContainer {
      margin-top: 20px;
    }
    #dogImage {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    #error {
      color: red;
      font-weight: bold;
    }
    .controls {
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>Dog API com Seletor de Raças</h1>
  
  <div class="controls">
    <select id="breedSelect">
      <option value="">Carregando raças...</option>
    </select>
    <button id="fetchButton">Buscar Cachorro</button>
  </div>
  
  <p id="error"></p>
  
  <div id="dogImageContainer">
    <!-- A imagem será inserida aqui via JavaScript -->
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### `script.js`
```javascript
document.addEventListener('DOMContentLoaded', async () => {
  const fetchButton = document.getElementById('fetchButton');
  const breedSelect = document.getElementById('breedSelect');
  const dogImageContainer = document.getElementById('dogImageContainer');
  const errorElement = document.getElementById('error');

  // Variável para armazenar a lista de raças
  let breedsList = [];

  // 1. Carrega a lista de raças quando a página é aberta
  const loadBreeds = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      
      if (!response.ok) {
        throw new Error('Não foi possível carregar a lista de raças.');
      }
      
      const data = await response.json();
      breedsList = Object.keys(data.message);
      populateBreedSelect();
    } catch (err) {
      errorElement.textContent = err.message;
    }
  };

  // 2. Preenche o dropdown com as raças disponíveis
  const populateBreedSelect = () => {
    breedSelect.innerHTML = '';
    
    // Opção padrão
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Selecione uma raça --';
    breedSelect.appendChild(defaultOption);
    
    // Opções de raças
    breedsList.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
      breedSelect.appendChild(option);
    });
  };

  // 3. Busca imagem baseada na raça selecionada
  const fetchDogImage = async () => {
    const selectedBreed = breedSelect.value;
    
    if (!selectedBreed) {
      errorElement.textContent = 'Por favor, selecione uma raça.';
      return;
    }

    try {
      fetchButton.disabled = true;
      fetchButton.textContent = 'Carregando...';
      errorElement.textContent = '';

      const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Não foi possível carregar a imagem do cachorro.');
      }
      
      const data = await response.json();
      displayDogImage(data.message);
    } catch (err) {
      errorElement.textContent = err.message;
    } finally {
      fetchButton.disabled = false;
      fetchButton.textContent = 'Buscar Cachorro';
    }
  };

  // 4. Exibe a imagem na página
  const displayDogImage = (imageUrl) => {
    dogImageContainer.innerHTML = `
      <img src="${imageUrl}" alt="Cachorro da raça selecionada" id="dogImage">
      <p>Raça: ${breedSelect.options[breedSelect.selectedIndex].text}</p>
    `;
  };

  // Inicialização
  await loadBreeds();
  
  // Event Listeners
  fetchButton.addEventListener('click', fetchDogImage);
});
```

## Como Funciona

1. **Carregamento Inicial**:
   - Quando a página é carregada, fazemos uma requisição para obter todas as raças disponíveis (`/breeds/list/all`)
   - Preenchemos o dropdown `<select>` com essas opções

2. **Seleção de Raça**:
   - O usuário seleciona uma raça no dropdown
   - Ao clicar no botão, fazemos uma nova requisição para a API específica da raça selecionada (`/breed/{raça}/images/random`)

3. **Exibição da Imagem**:
   - A imagem retornada é exibida na página junto com o nome da raça

## Melhorias Implementadas

- Dropdown dinâmico com todas as raças disponíveis
- Feedback visual durante o carregamento
- Tratamento de erros aprimorado
- Exibição do nome da raça junto com a imagem
- Estilização melhorada dos controles

---

# **Tutorial: Favoritos com localStorage na Dog API**

Vamos adicionar a funcionalidade de salvar imagens favoritas no `localStorage`. Aqui está a implementação completa:

## Código Atualizado

### `index.html` (adicione este botão na div `controls`)
```html
<button id="saveFavorite">Salvar Favorito</button>
<div id="favoritesContainer"></div>
```

### `script.js` (código completo atualizado)
```javascript
document.addEventListener('DOMContentLoaded', async () => {
  const fetchButton = document.getElementById('fetchButton');
  const breedSelect = document.getElementById('breedSelect');
  const saveFavoriteBtn = document.getElementById('saveFavorite');
  const dogImageContainer = document.getElementById('dogImageContainer');
  const favoritesContainer = document.getElementById('favoritesContainer');
  const errorElement = document.getElementById('error');

  let breedsList = [];
  let currentDogImage = null;
  let currentBreed = null;

  // 1. Carrega raças
  const loadBreeds = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      if (!response.ok) throw new Error('Não foi possível carregar a lista de raças.');
      
      const data = await response.json();
      breedsList = Object.keys(data.message);
      populateBreedSelect();
      loadFavorites(); // Carrega favoritos ao iniciar
    } catch (err) {
      errorElement.textContent = err.message;
    }
  };

  // 2. Preenche dropdown
  const populateBreedSelect = () => {
    breedSelect.innerHTML = '';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Selecione uma raça --';
    breedSelect.appendChild(defaultOption);
    
    breedsList.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
      breedSelect.appendChild(option);
    });
  };

  // 3. Busca imagem
  const fetchDogImage = async () => {
    const selectedBreed = breedSelect.value;
    
    if (!selectedBreed) {
      errorElement.textContent = 'Por favor, selecione uma raça.';
      return;
    }

    try {
      fetchButton.disabled = true;
      errorElement.textContent = '';

      const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error('Não foi possível carregar a imagem.');
      
      const data = await response.json();
      currentDogImage = data.message;
      currentBreed = selectedBreed;
      displayDogImage();
    } catch (err) {
      errorElement.textContent = err.message;
    } finally {
      fetchButton.disabled = false;
    }
  };

  // 4. Exibe imagem
  const displayDogImage = () => {
    dogImageContainer.innerHTML = `
      <img src="${currentDogImage}" alt="Cachorro ${currentBreed}" id="dogImage">
      <p>Raça: ${breedSelect.options[breedSelect.selectedIndex].text}</p>
    `;
  };

  // 5. Salva favorito
  const saveFavorite = () => {
    if (!currentDogImage) {
      errorElement.textContent = 'Nenhuma imagem para salvar.';
      return;
    }

    const favorites = JSON.parse(localStorage.getItem('dogFavorites')) || [];
    
    // Verifica se já existe
    if (!favorites.some(fav => fav.image === currentDogImage)) {
      favorites.push({
        image: currentDogImage,
        breed: currentBreed,
        date: new Date().toLocaleString()
      });
      
      localStorage.setItem('dogFavorites', JSON.stringify(favorites));
      loadFavorites();
      errorElement.textContent = 'Salvo nos favoritos!';
      setTimeout(() => errorElement.textContent = '', 2000);
    } else {
      errorElement.textContent = 'Esta imagem já está nos favoritos!';
    }
  };

  // 6. Carrega favoritos
  const loadFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('dogFavorites')) || [];
    favoritesContainer.innerHTML = '<h3>Seus Favoritos</h3>';
    
    if (favorites.length === 0) {
      favoritesContainer.innerHTML += '<p>Nenhum favorito salvo ainda.</p>';
      return;
    }

    favorites.forEach((fav, index) => {
      const favElement = document.createElement('div');
      favElement.className = 'favorite-item';
      favElement.innerHTML = `
        <img src="${fav.image}" alt="Cachorro ${fav.breed}" class="favorite-img">
        <p>Raça: ${fav.breed}</p>
        <small>Salvo em: ${fav.date}</small>
        <button class="remove-btn" data-index="${index}">❌ Remover</button>
      `;
      favoritesContainer.appendChild(favElement);
    });

    // Adiciona eventos aos botões de remover
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', removeFavorite);
    });
  };

  // 7. Remove favorito
  const removeFavorite = (e) => {
    const index = e.target.getAttribute('data-index');
    const favorites = JSON.parse(localStorage.getItem('dogFavorites'));
    
    favorites.splice(index, 1);
    localStorage.setItem('dogFavorites', JSON.stringify(favorites));
    loadFavorites();
  };

  // Inicialização
  await loadBreeds();
  
  // Event Listeners
  fetchButton.addEventListener('click', fetchDogImage);
  saveFavoriteBtn.addEventListener('click', saveFavorite);
});
```

### `style.css` (adicione ao seu CSS existente)
```css
.favorite-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
}

.favorite-img {
  max-width: 150px;
  border-radius: 5px;
}

.remove-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
}

#favoritesContainer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
```

## Como Funciona Agora

1. **Novos Botões**:
   - `Salvar Favorito`: Salva a imagem atual no localStorage
   - `Remover`: Remove itens dos favoritos

2. **Armazenamento**:
   - Cada favorito salva:
     - URL da imagem
     - Raça do cachorro
     - Data/hora do salvamento

3. **Recuperação**:
   - Os favoritos são carregados automaticamente quando a página abre
   - Persistem mesmo após fechar o navegador

4. **Visualização**:
   - Os favoritos aparecem em uma seção separada
   - Cada item mostra a imagem, raça e data

## Dicas de Uso

1. Para limpar todos os favoritos, você pode usar no console do navegador:
   ```javascript
   localStorage.removeItem('dogFavorites');
   ```

2. Os dados ficam armazenados apenas no navegador atual (não sincroniza entre dispositivos)

3. Para exportar seus favoritos, use:
   ```javascript
   console.log(JSON.stringify(localStorage.getItem('dogFavorites')));
   ```



