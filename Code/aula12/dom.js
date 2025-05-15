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