# **Exemplos e Exercícios com Objetos: Condicionais e Loops**

Aqui estão exemplos práticos e exercícios para trabalhar com **objetos** em JavaScript utilizando estruturas condicionais e de repetição.

---

## **1. Condicionais com Objetos**

### **Exemplo 1: Verificar Propriedades de um Objeto**

```javascript
const pessoa = {
  nome: "Maria",
  idade: 25,
  profissao: "Engenheira"
};

// Verifica se a pessoa é maior de idade
if (pessoa.idade >= 18) {
  console.log(`${pessoa.nome} é maior de idade.`);
} else {
  console.log(`${pessoa.nome} é menor de idade.`);
}
```

**Exercício:** Modifique para verificar se a pessoa tem uma profissão definida.

---

### **Exemplo 2: Classificar Objeto com Switch**

```javascript
const animal = {
  tipo: "cachorro",
  raca: "Labrador"
};

switch (animal.tipo) {
  case "cachorro":
    console.log("É um cachorro da raça " + animal.raca);
    break;
  case "gato":
    console.log("É um gato");
    break;
  default:
    console.log("Animal desconhecido");
}
```

**Exercício:** Adicione mais casos (ex: "pássaro", "peixe") e uma propriedade `cor`.

---

### **Exemplo 3: Validar Formulário (Objeto)**

```javascript
const usuario = {
  nome: "",
  email: "user@example.com",
  senha: "123456"
};

if (!usuario.nome) {
  console.log("O nome é obrigatório!");
} else if (usuario.senha.length < 6) {
  console.log("A senha deve ter pelo menos 6 caracteres");
} else {
  console.log("Usuário válido!");
}
```

**Exercício:** Adicione validação para o formato de e-mail (usando `includes("@")`).

---

## **2. Loops com Objetos**

### **Exemplo 4: Iterar sobre Propriedades (for...in)**

```javascript
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}
```

**Exercício:** Conte quantas propriedades o objeto tem.

---

### **Exemplo 5: Filtrar Objetos em um Array (for)**

```javascript
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Celular", preco: 800 },
  { nome: "Tablet", preco: 1200 }
];

// Encontrar produtos com preço > R$1000
const caros = [];
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].preco > 1000) {
    caros.push(produtos[i]);
  }
}
console.log(caros);
```

**Exercício:** Use `while` para fazer o mesmo filtro.

---

### **Exemplo 6: Transformar Objeto em Array (Object.entries + for...of)**

```javascript
const pessoa = {
  nome: "Carlos",
  idade: 30,
  cidade: "São Paulo"
};

for (let [chave, valor] of Object.entries(pessoa)) {
  console.log(`${chave}: ${valor}`);
}
```

**Exercício:** Crie um novo array apenas com os valores do objeto.

---

## **Exercícios Avançados**

### **1. Mesclar Dois Objetos**

Combine `objeto1` e `objeto2` em um novo objeto:

```javascript
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
// Resultado esperado: { a: 1, b: 2, c: 3, d: 4 }
```

### **2. Calcular Média de Notas**

Dado um objeto aluno:

```javascript
const aluno = {
  nome: "Ana",
  notas: [7.5, 8, 6.5, 9]
};
// Calcule a média das notas
```

### **3. Encontrar Pessoa Mais Velha**

Em um array de objetos:

```javascript
const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 20 }
];
// Encontre a pessoa com maior idade
```

### **4. Validar Senha Forte**

Verifique se a senha no objeto usuário tem:

- Pelo menos 8 caracteres
- Contém números e letras

```javascript
const usuario = {
  nome: "Admin",
  senha: "Senha123"
};
```

---

## **Soluções**

### **Solução 1: Mesclar Objetos**

```javascript
const novoObjeto = { ...objeto1, ...objeto2 };
```

### **Solução 2: Média de Notas**

```javascript
const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
const media = soma / aluno.notas.length;
```

### **Solução 3: Pessoa Mais Velha**

```javascript
let maisVelha = pessoas[0];
for (let pessoa of pessoas) {
  if (pessoa.idade > maisVelha.idade) {
    maisVelha = pessoa;
  }
}
```

### **Solução 4: Senha Forte**

```javascript
const temNumero = /\d/.test(usuario.senha);
const temLetra = /[a-zA-Z]/.test(usuario.senha);
const valida = usuario.senha.length >= 8 && temNumero && temLetra;
```

---

**Dicas:**

- Use `Object.keys()`, `Object.values()`, e `Object.entries()` para iterar sobre objetos.
- Combine `for...of` com `Object.entries()` para percorrer chaves e valores.

Esses exercícios ajudam a dominar a manipulação de objetos em JavaScript! 🚀
