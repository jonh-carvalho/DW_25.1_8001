# **DOM e Manipulação de HTML com JavaScript**  

**Objetivo:** Aprender a interagir com elementos HTML usando JavaScript, manipular eventos e criar dinamicamente conteúdo na página.  

---

## **1. Introdução ao DOM**  

### **O que é o DOM?**  

- **DOM (Document Object Model):** Representação estruturada do HTML como uma árvore de objetos.  
- **Como o JavaScript interage com o DOM?**  
  - Acessa, modifica e remove elementos.  
  - Reage a eventos (cliques, teclas, formulários).  

### **Selecionando Elementos**  

- **Métodos clássicos:**  
```javascript
  document.getElementById("meuId");          // Retorna um único elemento
  document.getElementsByClassName("classe"); // Retorna uma HTMLCollection
  document.getElementsByTagName("div");     // Retorna uma HTMLCollection
```  

- **Métodos modernos (querySelector):**  

```javascript
  document.querySelector("#meuId");         // Retorna o PRIMEIRO elemento que corresponde
  document.querySelectorAll(".classe");      // Retorna uma NodeList (todos os elementos)
```  

### **Prática Guiada:**  

- Criar uma página HTML com:  

```html
  <h1 id="titulo">Olá, DOM!</h1>
  <p class="texto">Texto 1</p>
  <p class="texto">Texto 2</p>
```  

- No console:  

```javascript
  const titulo = document.querySelector("#titulo");
  titulo.textContent = "Novo Título!";
  const textos = document.querySelectorAll(".texto");
  textos.forEach(texto => texto.style.color = "blue");
```  

---

## **2. Modificando Elementos**  

### **Propriedades e Métodos Úteis:**  

| Propriedade/Método | Descrição | Exemplo |
|-------------------|----------|---------|
| `textContent` | Altera o texto interno | `elemento.textContent = "Novo texto"` |
| `innerHTML` | Permite inserir HTML | `elemento.innerHTML = "<strong>Negrito</strong>"` |
| `setAttribute()` | Altera atributos | `img.setAttribute("src", "foto.jpg")` |
| `style` | Modifica CSS inline | `elemento.style.backgroundColor = "red"` |
| `classList` | Manipula classes CSS | `elemento.classList.add("destaque")` |

### **Exercício:**  

1. Criar um botão em HTML:  

```html
   <button id="mudarCor">Mudar Cor</button>
   <div id="caixa" style="width: 100px; height: 100px; background: yellow;"></div>
```  

2. No JavaScript:  

```javascript
   const botao = document.querySelector("#mudarCor");
   const caixa = document.querySelector("#caixa");

   botao.addEventListener("click", () => {
     caixa.style.backgroundColor = "purple";
   });
```  

---

## **3. Eventos**  

### **Principais Eventos:**  

| Evento | Descrição | Exemplo |
|--------|-----------|---------|
| `click` | Clique do mouse | `botao.addEventListener("click", função)` |
| `submit` | Envio de formulário | `form.addEventListener("submit", função)` |
| `keypress` | Tecla pressionada | `input.addEventListener("keypress", função)` |
| `mouseover` | Mouse sobre o elemento | `div.addEventListener("mouseover", função)` |

### **Prática:**  

1. Criar um formulário:  

```html
   <form id="meuForm">
     <input type="text" id="nome" placeholder="Seu nome">
     <button type="submit">Enviar</button>
   </form>
```  

2. Validar o formulário:  
```javascript
   const form = document.querySelector("#meuForm");
   form.addEventListener("submit", (event) => {
     event.preventDefault(); // Evita o recarregamento
     const nome = document.querySelector("#nome").value;
     alert(`Nome digitado: ${nome}`);
   });
```  

---

## **4. Criando e Removendo Elementos**  

### **Métodos do DOM:**  

| Método | Descrição | Exemplo |
|--------|-----------|---------|
| `createElement()` | Cria um novo elemento | `const div = document.createElement("div")` |
| `appendChild()` | Adiciona ao final de um elemento pai | `pai.appendChild(div)` |
| `remove()` | Remove um elemento | `elemento.remove()` |

### **Exercício (To-Do List):**  

1. Estrutura HTML:  
```html
   <input type="text" id="tarefa">
   <button id="adicionar">Adicionar</button>
   <ul id="lista"></ul>
```  

2. JavaScript:  
```javascript
   const botao = document.querySelector("#adicionar");
   const lista = document.querySelector("#lista");

   botao.addEventListener("click", () => {
     const input = document.querySelector("#tarefa");
     if (input.value.trim() === "") return; // Evita tarefa vazia

     const li = document.createElement("li");
     li.textContent = input.value;
     lista.appendChild(li);
     input.value = ""; // Limpa o input
   });
```  

---

## **5. Projeto Final da Aula**  

**Desafio:** Criar um **"Editor de Perfil"** onde o usuário possa:  

1. Digitar um nome e ver a atualização em tempo real (`keyup`).  
2. Escolher uma cor para o fundo do perfil.  
3. Adicionar uma descrição via `textarea` e exibi-la abaixo.  

**Exemplo de Solução:**  

```html
<div id="perfil" style="border: 1px solid #000; padding: 20px;">
  <h2 id="nomePerfil">Nome</h2>
  <p id="descricao">Descrição...</p>
</div>

<input type="text" id="inputNome" placeholder="Seu nome">
<textarea id="inputDescricao" placeholder="Sua descrição"></textarea>
<input type="color" id="corFundo">
```  

```javascript
const inputNome = document.querySelector("#inputNome");
const inputDescricao = document.querySelector("#inputDescricao");
const corFundo = document.querySelector("#corFundo");
const perfil = document.querySelector("#perfil");

inputNome.addEventListener("keyup", () => {
  document.querySelector("#nomePerfil").textContent = inputNome.value;
});

inputDescricao.addEventListener("keyup", () => {
  document.querySelector("#descricao").textContent = inputDescricao.value;
});

corFundo.addEventListener("input", () => {
  perfil.style.backgroundColor = corFundo.value;
});
```  

---

## **Recursos Complementares:**  

- [MDN - DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)  
- [JavaScript.info - Eventos](https://javascript.info/events)  
