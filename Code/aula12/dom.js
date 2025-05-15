const titulo = document.querySelector("#titulo");
titulo.textContent = "Novo Título!";

const textos = document.querySelectorAll(".texto");
textos.forEach(texto => texto.style.color = "blue");

const botao = document.querySelector("#mudarCor");
const caixa = document.querySelector("#caixa");

botao.addEventListener("click", () => {
     caixa.style.backgroundColor = "purple";
   });

// Validar Formulário
const form = document.querySelector("#meuForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    alert(`Nome digitado: ${nome}`);    
});
// Adicionar Tarefas
const botaoLista = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");

botaoLista.addEventListener("click", () => {
    const input = document.querySelector("#tarefa");
    if (input.value.trim() === "") return; 
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = ""; // Limpa o campo de entrada
});



const inputNome = document.querySelector("#inputNome");
const inputDescricao = document.querySelector("#inputDescricao");
const corFundo = document.querySelector("#corFundo"); 
const perfil = document.querySelector("#perfil");

inputNome.addEventListener("keyup", () => {
    document.querySelector("#nomePerfil").textContent = inputNome.value;
    });

inputDescricao.addEventListener("keyup", () => {
    document.querySelector("#descricaoPerfil").textContent = inputDescricao.value;
});

corFundo.addEventListener("input", () => {
    perfil.style.backgroundColor = corFundo.value;
});