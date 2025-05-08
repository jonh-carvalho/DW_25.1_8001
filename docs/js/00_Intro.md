# 00 - **Introdução ao JavaScript**

## 1. Introdução ao JavaScript

- **O que é JavaScript?**  

  - Linguagem de programação para web (front-end e back-end com Node.js).  
  - Comparação com HTML e CSS (HTML = estrutura, CSS = estilo, JS = interatividade).  

- **Onde o JavaScript é usado?**  

  - Páginas web dinâmicas (ex.: formulários, animações).  
  - Aplicativos mobile (React Native, Ionic).  
  - Back-end (Node.js), games, IoT.  

- **Ferramentas necessárias:**  

  - Navegador (Chrome + DevTools).  
  - Editor de código (VS Code).  
  - Node.js (opcional para rodar JS fora do navegador).  

---

### **2. Configurando o Ambiente**

- **Instalação do VS Code e extensões úteis:**  
  - Live Preview (para rodar páginas localmente).  
  - Prettier (formatação automática).  

- **Hello World no navegador:**  
  - Criar um arquivo `index.html` com `<script>` embutido.  
  - Usar `console.log("Hello World")` e inspecionar no DevTools (F12).  

---

### 3. Variáveis e Tipos de Dados  

- **Declaração de variáveis:**  
  - `var` (antigo, escopo global/função).  
  - `let` (escopo de bloco, mutável).  
  - `const` (escopo de bloco, imutável).
  
- **Tipos de dados primitivos:**  
  - `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`.  

- **Operadores:**  
  - Aritméticos (`+`, `-`, `*`, `/`).  
  - Comparação (`==`, `===`, `!=`, `!==`).  
  - Lógicos (`&&`, `||`, `!`).  

- **Exemplo prático:**  

  ```javascript
  const nome = "João";
  let idade = 25;
  var isProgrammer = true;
  console.log(`${nome} tem ${idade} anos. É programador? ${isProgrammer}`);
  ```

---

### 4. Estruturas Condicionais  

- **If/Else:**  

```javascript
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
```  

- **Switch/Case:**  

```javascript
  switch (diaDaSemana) {
    case 1: console.log("Segunda"); break;
    case 2: console.log("Terça"); break;
    default: console.log("Dia inválido");
  }
```  

- **Operador ternário:**  

```javascript
  const status = (idade >= 18) ? "Adulto" : "Adolescente";
```

---

### **5. Estruturas de Repetição (30 min)**  

- **For:**  

```javascript
  for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`);
  }
```  

- **While/Do-While:**  

```javascript
  let contador = 0;
  while (contador < 3) {
    console.log(contador);
    contador++;
  }
```  

- **Loop em arrays (prévia da Aula 3):**  

```javascript
  const frutas = ["Maçã", "Banana", "Uva"];
  for (const fruta of frutas) {
    console.log(fruta);
  }
  ```

---

### **6. Funções (30 min)**  

- **Declaração vs. Expressão vs. Arrow Function:**  

```javascript
  // Declaração
  function soma(a, b) { return a + b; }

  // Expressão
  const soma = function(a, b) { return a + b; };

  // Arrow Function (ES6+)
  const soma = (a, b) => a + b;
```  

- **Parâmetros e retorno:**  

  - Valores padrão (`function greet(name = "Visitante")`).  
- **Exercício:** Criar uma função que verifica se um número é par.  

---

### **7. Exercício Prático Final (30 min)**  

**Desafio:** Criar uma calculadora simples no console:  

1. Perguntar ao usuário dois números (usar `prompt`).  
2. Perguntar a operação (`+`, `-`, `*`, `/`).  
3. Exibir o resultado no console.  

**Exemplo de solução:**  

```javascript
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;
switch (operacao) {
  case "+": resultado = num1 + num2; break;
  case "-": resultado = num1 - num2; break;
  case "*": resultado = num1 * num2; break;
  case "/": resultado = num1 / num2; break;
  default: resultado = "Operação inválida";
}
console.log(`Resultado: ${resultado}`);
```

---

### Recursos Complementares

- [MDN JavaScript Guide](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)  
- [JavaScript.info](https://javascript.info/)
