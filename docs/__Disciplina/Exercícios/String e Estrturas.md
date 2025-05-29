# Strings: Condicionais e Loops  

Aqui estão exemplos e exercícios práticos para manipular **strings** usando:  

- **Estruturas condicionais** (`if/else`, `switch`).  
- **Estruturas de repetição** (`for`, `while`, `do...while`).  

---

## **1. Condicionais com Strings**  

### **Exemplo 1: Verificar Palíndromo**  

Um palíndromo é uma palavra que permanece a mesma se lida de trás para frente (ex: "arara").  

```javascript
const palavra = "arara";
let inverso = "";

// Usando for para inverter a string
for (let i = palavra.length - 1; i >= 0; i--) {
  inverso += palavra[i];
}

// Verifica se é palíndromo
if (palavra === inverso) {
  console.log(`${palavra} é um palíndromo!`);
} else {
  console.log(`${palavra} não é um palíndromo.`);
}
```

**Exercício:** Modifique o código para funcionar com frases (ex: "Ame o poema").  

---

### **Exemplo 2: Classificar Tamanho da String**  

```javascript
const texto = "JavaScript";

if (texto.length > 10) {
  console.log("Texto muito longo!");
} else if (texto.length >= 5) {
  console.log("Texto de tamanho médio.");
} else {
  console.log("Texto curto.");
}
```

**Exercício:** Peça ao usuário (usando `prompt`) que digite uma palavra e classifique-a.  

---

### **Exemplo 3: Switch com Strings**  

```javascript
const diaSemana = "segunda";

switch (diaSemana.toLowerCase()) {
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
  case "sexta":
    console.log("Dia útil.");
    break;
  case "sábado":
  case "domingo":
    console.log("Fim de semana!");
    break;
  default:
    console.log("Dia inválido.");
}
```

**Exercício:** Crie um sistema que verifique se um mês é de verão, inverno, etc.  

---

## **2. Loops com Strings**  

### **Exemplo 4: Contar Vogais**  

```javascript
const frase = "Olá, mundo!";
let contadorVogais = 0;
const vogais = "aeiouáéíóúãõâêô";

for (let letra of frase.toLowerCase()) {
  if (vogais.includes(letra)) {
    contadorVogais++;
  }
}

console.log(`Número de vogais: ${contadorVogais}`);
```

**Exercício:** Modifique para contar consoantes também.  

---

### **Exemplo 5: Inverter String com While**  

```javascript
let palavra = "JavaScript";
let invertida = "";
let i = palavra.length - 1;

while (i >= 0) {
  invertida += palavra[i];
  i--;
}

console.log(invertida); // "tpircSavaJ"
```

**Exercício:** Faça o mesmo usando `do...while`.  

---

### **Exemplo 6: Remover Espaços em Branco**  

```javascript
let texto = "  Exemplo  com   espaços  ";
let textoSemEspacos = "";

for (let i = 0; i < texto.length; i++) {
  if (texto[i] !== " ") {
    textoSemEspacos += texto[i];
  }
}

console.log(textoSemEspacos); // "Exemplocomespaços"
```

**Exercício:** Melhore o código para remover **apenas espaços duplicados** (ex: "Exemplo com espaços").  

---

## **Exercícios Adicionais**  

### **1. Verificar se uma String Contém Números**  

Use `for` e `isNaN()` para verificar se há dígitos em uma string.  

### **2. Converter Alternadamente Maiúsculas/Minúsculas**  

Exemplo:  

- Entrada: "AbCd" → Saída: "aBcD"

### **3. Encontrar a Maior Palavra em uma Frase**  

Dica: Use `split(" ")` para separar palavras e compare seus `length`.  

### **4. Gerar Acrônimos**  

Exemplo:  

- Entrada: "Universidade Federal do Rio" → Saída: "UFR"  

---

## **Soluções dos Exercícios**  

### **Solução 1: Palíndromo com Frase**  

```javascript
const frase = "Ame o poema";
const formatada = frase.toLowerCase().replace(/\s/g, "");
const inverso = formatada.split("").reverse().join("");

console.log(formatada === inverso ? "É palíndromo!" : "Não é palíndromo.");
```

### **Solução 5: Inverter com `do...while`**  

```javascript
let palavra = "JavaScript";
let invertida = "";
let i = palavra.length - 1;

do {
  invertida += palavra[i];
  i--;
} while (i >= 0);

console.log(invertida);
```

---

**Recursos:**  

- [MDN - Strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)  
- [JavaScript.info - Loops](https://javascript.info/while-for)  

Esses exercícios ajudam a consolidar **lógica de programação** e manipulação de strings! 🚀
