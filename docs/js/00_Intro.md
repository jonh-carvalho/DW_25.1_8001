# Aula de Tipos de Dados em Programação

## 1. Comentários
Comentários são textos ignorados pelo compilador/interpretador, usados para documentar o código.

### 1.1 Sintaxe
```javascript
// Comentário de uma linha

/*
Comentário de 
múltiplas linhas
*/
```

### 1.2 Exemplo 1
```javascript
// Calcula a área do retângulo
let area = largura * altura;
```

### 1.3 Exemplo 2
```javascript
/*
Função: calcularIMC
Parâmetros:
  - peso: em quilogramas
  - altura: em metros
Retorna o Índice de Massa Corporal
*/
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}
```

## 2. Constantes
Valores que não podem ser alterados após sua definição.

### 2.1 Sintaxe
```javascript
const NOME_DA_CONSTANTE = valor;
```

### 2.2 Exemplos
```javascript
const PI = 3.14159;
const DIAS_DA_SEMANA = 7;
const URL_API = "https://api.exemplo.com/v1";
```

## 3. Variáveis
Espaços na memória para armazenar valores que podem ser alterados.

### 3.1 Sintaxe
```javascript
let nomeDaVariavel = valor;
```

### 3.2 Números Inteiros
#### 3.2.1 Sintaxe
```javascript
let inteiro = 42;
```

#### 3.2.2 Exemplos:
```javascript
let idade = 25;
let quantidadeProdutos = 100;
let temperatura = -10;
```

### 3.3 Números reais
#### 3.3.1 Sintaxe
```javascript
let real = 3.14;
```

#### 3.3.2 Exemplos:
```javascript
let preco = 19.99;
let media = 7.5;
let pi = 3.14159265359;
```

## 4. Booleanas
Valores lógicos verdadeiro (`true`) ou falso (`false`).

### 4.1 Sintaxe
```javascript
let booleano = true; // ou false
```

#### 4.1.1 Exemplos:
```javascript
let estaChovendo = false;
let usuarioLogado = true;
let maiorDeIdade = idade >= 18;
```

## 5. Strings
Sequências de caracteres usadas para representar texto.

### 5.1 Sintaxe
```javascript
let texto = "Isso é uma string";
let outroTexto = 'Isso também é uma string';
```

### 5.2 Observação
Strings podem ser concatenadas com o operador `+` e possuem propriedades e métodos úteis.

### 5.3 Exemplos:
```javascript
let nome = "João Silva";
let mensagem = "Olá, " + nome + "! Bem-vindo!";
let endereco = 'Rua das Flores, 123';
```

#### 5.3.1 Exemplo formatado na página HTML/web:
```javascript
let htmlContent = "<h1>Título Principal</h1><p>Parágrafo com <strong>texto em negrito</strong>.</p>";
document.getElementById("conteudo").innerHTML = htmlContent;
```

## 6. EVENTO Alert()
Exibe uma caixa de diálogo com uma mensagem para o usuário.

### 6.1 Exemplo:
```javascript
alert("Bem-vindo ao nosso site!");
alert("Formulário enviado com sucesso!");
```

## 7. Exercícios

1. Crie constantes para armazenar:
   - O número de horas em um dia
   - Seu nome completo
   - O valor de π com 4 casas decimais

2. Declare variáveis para:
   - Sua idade
   - O preço de um produto com impostos
   - Se você está estudando atualmente (booleano)

3. Crie uma string que concatene:
   - Seu nome
   - Sua idade
   - Sua profissão
   E exiba com alert()

4. Escreva um programa que:
   - Calcula a área de um círculo (π * raio²)
   - Armazene o raio em uma variável
   - Armazene π em uma constante
   - Exiba o resultado com 2 casas decimais

5. Crie comentários explicando cada linha do exercício 4.
