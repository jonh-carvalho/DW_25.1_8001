document.addEventListener('DOMContentLoaded', async () => {
  const fetchButton = document.getElementById('fetchButton');
  const dogImageContainer = document.getElementById('dogImageContainer');
  const errorElement = document.getElementById('error');
  const breedSelect = document.getElementById('breedSelect');

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
   loadBreeds();

  // Event Listeners
  fetchButton.addEventListener('click', fetchDogImage);
});