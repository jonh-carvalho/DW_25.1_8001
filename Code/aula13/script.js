//Exercício 1 - Como automatizo a geração da impressão de todos os objetos de um array?

/*let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
obj.employees[0].firstName + " " + obj.employees[1].lastName;
document.getElementById("demo1").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
document.getElementById("demo2").innerHTML =
obj.employees[2].firstName + " " + obj.employees[1].lastName;
*/

/*
const jsonDataObject = {
  "nome": "Maria",
  "idade": 30,
  "endereco": {
    "cidade": "São Paulo",
    "estado": "SP"
  }
};

// Exibindo dados no HTML
document.getElementById("fromObject").textContent = JSON.stringify(jsonDataObject, null, 2);

// Exemplo 2: Lendo dados de uma string JSON
const jsonString = '{"nome": "Carlos", "idade": 25, "cidade": "Rio de Janeiro"}';
const jsonDataFromString = JSON.parse(jsonString);
// Exibindo dados no HTML
document.getElementById("fromString").textContent = JSON.stringify(jsonDataFromString, null, 2);

// Exemplo 3: Lendo dados de um arquivo JSON usando fetch
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    // Exibindo dados no HTML
    document.getElementById("fromFile").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error(error);
    document.getElementById("fromFile").textContent = "Erro ao carregar os dados do arquivo JSON";
  });

// Exemplo 4: Lendo dados de uma lista de objetos JSON
const jsonArray = [
  {
    "nome": "Lucas",
    "idade": 22,
    "cidade": "Brasília"
  },
  {
    "nome": "Ana",
    "idade": 29,
    "cidade": "Salvador"
  },
  {
    "nome": "Pedro",
    "idade": 35,
    "cidade": "Recife"
  }
];

// Exibindo dados no HTML
document.getElementById("fromArray").textContent = JSON.stringify(jsonArray, null, 2);

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    // Exibindo dados no HTML
    document.getElementById("fromFileArray").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error(error);
    document.getElementById("fromFileArray").textContent = "Erro ao carregar os dados do arquivo JSON";
  });
  */

// Fazendo uma requisição GET para obter posts da API JSONPlaceholder
fetch("https://dummyjson.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }
    return response.json(); // Converte a resposta para JSON
  })

  .then((postsData) => {
    console.log(postsData); // Exibe os posts no console

    // Imprimindo os posts no HTML
    const postsContainer = document.getElementById("jsonplaceholder");

    // Se a resposta da API for um objeto com a propriedade "posts", use-a
    const postsArray = postsData.posts ? postsData.posts : postsData;
    
    postsArray.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
      postsContainer.appendChild(postElement);
    });
  })

  .catch((error) => console.error("Erro:", error));

/* Lida com erros
// Imprimindo os posts no HTML
    const postsContainer = document.getElementById('jsonplaceholder');
    
    posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
    postsContainer.appendChild(postElement);
})*/