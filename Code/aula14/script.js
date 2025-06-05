// URL da API local do JSON Server
const apiUrl = 'http://localhost:3000/users';

// Função para buscar e exibir os posts
function fetchPosts() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter dados da API');
      }
      return response.json(); // Converte a resposta em JSON
    })
    .then(data => {
      const postsList = document.getElementById('postsList');
      // Itera pelos posts e cria itens de lista
      data.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.nome + ' - ' + user.idade ;
        postsList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error(error);
      document.getElementById('postsList').textContent = 'Erro ao carregar os posts';
    });
}

// Chama a função ao carregar a página
fetchPosts();