# Grid CSS - Estruturando Layouts Modernos

**Objetivo:**

> Apresentamos o uso do Grid Layout no CSS para criar layouts flexíveis e responsivos e iremos criar grades, organizar colunas e linhas, e controlar o espaçamento entre os elementos.

## Introdução ao Grid CSS

### O que é Grid Layout?

O Grid Layout (ou CSS Grid) é um sistema de layout bidimensional para a web que permite criar designs complexos e responsivos com facilidade. Ele divide a página em um sistema de linhas e colunas, permitindo que você posicione elementos em qualquer área definida por essa grade.

Principais características:

- Sistema baseado em linhas e colunas
- Controle preciso sobre posicionamento de itens
- Capacidade de alinhamento avançado
- Responsivo por natureza
- Redefinição de layout sem alterar HTML

### Diferença entre Grid e Flexbox

| Característica       | Grid CSS                          | Flexbox                          |
|----------------------|-----------------------------------|----------------------------------|
| Dimensão             | Bidimensional (linhas e colunas) | Unidimensional (linha OU coluna) |
| Uso principal        | Layouts gerais da página         | Alinhamento de componentes      |
| Controle            | Controle explícito de colunas/linhas | Fluxo flexível dos itens      |
| Sobreposição        | Fácil sobreposição de elementos  | Mais difícil de sobrepor        |
| Alinhamento         | Alinha em ambos os eixos         | Foco em um eixo por vez         |

### Casos de uso do Grid

1. **Layouts complexos**: Criar designs com múltiplas colunas e linhas de forma precisa
2. **Designs assimétricos**: Layouts que não seguem um padrão regular
3. **Alinhamento perfeito**: Quando você precisa que vários elementos se alinhem perfeitamente
4. **Redefinição de layout**: Mudar completamente a disposição dos elementos em diferentes breakpoints
5. **Controle de espaços vazios**: Gerenciar explicitamente espaços em branco no design
6. **Sistemas de cards**: Organizar cards em grades responsivas
7. **Formulários complexos**: Alinhar labels e inputs em layouts elaborados
8. **Galeria de imagens**: Criar galerias com tamanhos variados de imagens

Exemplo básico de código Grid:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
}
```

O Grid CSS é particularmente poderoso quando combinado com outras técnicas modernas como Flexbox, onde você pode usar Grid para o layout geral da página e Flexbox para componentes individuais.

---
  
## **Elementos Básicos do Grid CSS**

Vamos explorar os conceitos fundamentais para criar e controlar layouts com CSS Grid.

### **1. Definindo um Container Grid**

Para transformar um elemento em um container grid, use:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container {
  display: grid; /* Ativa o Grid Layout */
}

.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid #333;
}
```

Isso faz com que todos os filhos diretos desse container se tornem **itens da grade**.

---

### **2. Definindo Colunas e Linhas**

#### **`grid-template-columns`**  

Define o número e o tamanho das colunas.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px; /* 3 colunas com larguras fixas */
}
```

Ou usando unidades flexíveis (`fr` = fração do espaço disponível):

```css
.container {
  grid-template-columns: 1fr 2fr 1fr; /* 3 colunas (a do meio é 2x maior) */
}
```

#### **`grid-template-rows`**  

Define o número e a altura das linhas.

```css
.container {
  grid-template-rows: 50px 100px; /* 2 linhas com alturas fixas */
}
```

#### **Combinação de colunas e linhas**

```css
.container {
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 200px;
}
```

Isso cria **2 colunas** e **2 linhas**, formando uma grade 2x2.

---

### **3. Espaçamento entre células (`gap`)**

Controla o espaço entre as colunas e linhas.

#### **`gap` (espaçamento geral)**

```css
.container {
  gap: 10px; /* Espaço igual entre colunas e linhas */
}
```

#### **`column-gap` e `row-gap` (espaçamento individual)**

```css
.container {
  column-gap: 20px; /* Espaço entre colunas */
  row-gap: 15px; /* Espaço entre linhas */
}
```

---

### **Exemplo Prático Completo**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 colunas */
  grid-template-rows: 100px 200px; /* 2 linhas */
  gap: 15px; /* Espaçamento entre células */
}

.item {
  background: lightblue;
  padding: 10px;
  border: 1px solid #333;
}
```

#### **Resultado:**

- Uma grade com **3 colunas** e **2 linhas**.
- A segunda coluna (`2fr`) é **mais larga** que as outras.
- **15px** de espaçamento entre as células.

---

#### **Resumo dos Conceitos Básicos**

| Propriedade | Descrição | Exemplo |
|-------------|-----------|---------|
| `display: grid` | Define um container grid | `display: grid;` |
| `grid-template-columns` | Define colunas | `grid-template-columns: 1fr 2fr;` |
| `grid-template-rows` | Define linhas | `grid-template-rows: 100px 200px;` |
| `gap` | Espaçamento entre células | `gap: 10px;` |
| `column-gap` | Espaço entre colunas | `column-gap: 20px;` |
| `row-gap` | Espaço entre linhas | `row-gap: 15px;` |

Com esses conceitos, você já pode criar **layouts básicos em Grid CSS**! 🚀

---

## **Posicionamento no Grid CSS**  

Além de definir colunas e linhas, o Grid permite **posicionar itens de forma precisa** dentro do grid, mesclando células e criando layouts complexos.  

---

### **1. Posicionando Itens com `grid-column` e `grid-row`**  

#### **`grid-column`** → Controla a posição do item nas **colunas**  

```css
.item {
  grid-column: 2 / 4; /* Começa na coluna 2 e termina na 4 */
}
```

- **`grid-column-start`** (início) e **`grid-column-end`** (fim) podem ser usados separadamente.  

#### **`grid-row`** → Controla a posição do item nas **linhas**  

```css
.item {
  grid-row: 1 / 3; /* Começa na linha 1 e termina na 3 */
}
```

- **`grid-row-start`** e **`grid-row-end`** também funcionam individualmente.  

#### **Exemplo:**  

```html
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.item1 {
  grid-column: 1 / 3; /* Ocupa da coluna 1 até a 3 */
  grid-row: 1; /* Ocupa apenas a linha 1 */
  background: lightblue;
}

.item2 {
  grid-column: 3;
  grid-row: 1 / 3; /* Ocupa da linha 1 até a 3 */
  background: lightgreen;
}

.item3 {
  grid-column: 1 / 3;
  grid-row: 2;
  background: lightcoral;
}
```

**Resultado:**  

- `item1` ocupa **colunas 1 e 2** (linha 1).  
- `item2` ocupa **coluna 3** e se estende por **linhas 1 e 2**.  
- `item3` ocupa **colunas 1 e 2** (linha 2).  

---

### **2. Usando `grid-area` para Áreas Nomeadas**  

Você pode **nomear áreas** no grid e posicionar elementos nelas.  

#### **Passo 1: Definir áreas no container**  

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

#### **Passo 2: Atribuir itens às áreas**  

```css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### **Exemplo Prático:**  

```html
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 10px;
}

.header { grid-area: header; background: lightblue; }
.sidebar { grid-area: sidebar; background: lightgreen; }
.main { grid-area: main; background: lightcoral; }
.footer { grid-area: footer; background: lightgray; }
```

**Resultado:**  

- **Header** ocupa toda a largura.  
- **Sidebar** e **Main** dividem o espaço central.  
- **Footer** ocupa a parte inferior.  

---

### **3. Span e Mesclagem de Células (`grid-column: span`)**  

Você pode **expandir um item por várias colunas/linhas** sem definir um fim fixo.  

#### **Usando `span`**  

```css
.item {
  grid-column: span 2; /* Ocupa 2 colunas */
  grid-row: span 3; /* Ocupa 3 linhas */
}
```

#### **Exemplo:**  

```css
.item1 {
  grid-column: 1 / span 2; /* Começa na coluna 1 e ocupa 2 colunas */
  grid-row: 1 / span 2; /* Começa na linha 1 e ocupa 2 linhas */
}
```

**Equivalente a:**  

```css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

#### **Aplicação Prática:**  

```html
<div class="container">
  <div class="item big">1 (2x2)</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}

.big {
  grid-column: span 2; /* Ocupa 2 colunas */
  grid-row: span 2; /* Ocupa 2 linhas */
  background: lightblue;
}
```

**Resultado:**  

- O **primeiro item** ocupa **2 colunas e 2 linhas**, enquanto os outros preenchem o restante.  

---

## **Resumo de Posicionamento no Grid**  

| Propriedade | Uso | Exemplo |
|------------|-----|---------|
| `grid-column` | Define início e fim em colunas | `grid-column: 2 / 4;` |
| `grid-row` | Define início e fim em linhas | `grid-row: 1 / 3;` |
| `grid-area` | Posiciona em áreas nomeadas | `grid-area: header;` |
| `span` | Expande por N colunas/linhas | `grid-column: span 2;` |

Com essas técnicas, você pode criar **layouts complexos** com sobreposição, expansão e organização avançada! 🚀

---
  
## **Alinhamento e Justificação no Grid CSS**

O Grid CSS oferece propriedades poderosas para controlar o posicionamento e a distribuição dos itens dentro do container grid. Vamos explorar como alinhar e justificar elementos de forma eficiente.

---

### **1. Alinhamento dos Itens Dentro do Grid**

#### **`justify-items`** → Alinhamento **horizontal** (eixo X) de todos os itens

Controla como os itens são alinhados dentro de suas células ao longo do eixo horizontal.

Valores possíveis:

- `start` (alinhado à esquerda)
- `end` (alinhado à direita)
- `center` (centralizado)
- `stretch` (padrão, ocupa toda a largura)

```css
.container {
  justify-items: center; /* Todos os itens centralizados horizontalmente */
}
```

#### **`align-items`** → Alinhamento **vertical** (eixo Y) de todos os itens

Controla como os itens são alinhados dentro de suas células ao longo do eixo vertical.

Valores possíveis:

- `start` (topo)
- `end` (base)
- `center` (meio)
- `stretch` (padrão, ocupa toda a altura)

```css
.container {
  align-items: end; /* Todos os itens alinhados na base */
}
```

#### **`place-items`** → Atalho para `align-items` e `justify-items`

Sintaxe: `place-items: <align-items> <justify-items>`

```css
.container {
  place-items: center end; /* Vertical: center, Horizontal: end */
}
```

---

### **2. Alinhamento Individual de Itens**

Se precisar sobrescrever o alinhamento para um item específico:

#### **`justify-self`** → Alinhamento horizontal individual

```css
.item {
  justify-self: start; /* Este item alinhado à esquerda */
}
```

#### **`align-self`** → Alinhamento vertical individual

```css
.item {
  align-self: center; /* Este item centralizado verticalmente */
}
```

#### **`place-self`** → Atalho para ambos

```css
.item {
  place-self: center end; /* align-self: center; justify-self: end; */
}
```

---

### **3. Distribuição do Espaço do Grid (Container)**

Quando o grid não ocupa todo o espaço disponível, podemos controlar como o espaço extra é distribuído.

#### **`justify-content`** → Distribuição horizontal do grid como um todo

Valores possíveis:

- `start`, `end`, `center`
- `space-between` (espaço entre colunas)
- `space-around` (espaço ao redor)
- `space-evenly` (espaço igual)
- `stretch` (estica as colunas)

```css
.container {
  justify-content: space-between; /* Espaço entre colunas */
}
```

#### **`align-content`** → Distribuição vertical do grid como um todo

Mesmos valores de `justify-content`, mas aplicado verticalmente.

```css
.container {
  align-content: center; /* Centraliza todo o grid verticalmente */
}
```

#### **`place-content`** → Atalho para ambos

```css
.container {
  place-content: space-between center; /* justify-content: space-between; align-content: center; */
}
```

---

### **Exemplo Prático Completo**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
  height: 500px; /* Espaço extra para demonstração */
  width: 400px;
  border: 2px solid #333;
  
  /* Alinhamento dos itens */
  justify-items: center;
  align-items: end;
  
  /* Distribuição do grid */
  justify-content: space-evenly;
  align-content: center;
  gap: 10px;
}

.item {
  background: lightblue;
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item:nth-child(3) {
  justify-self: start; /* Sobrescreve apenas este item */
  align-self: start;
}
```

**Resultado:**

1. Todos os itens estão centralizados horizontalmente e alinhados na base (configuração do container)
2. O grid inteiro está centralizado verticalmente com espaço uniforme horizontalmente
3. O terceiro item tem alinhamento sobrescrito (canto superior esquerdo)

---

## **Resumo das Propriedades de Alinhamento**

| Propriedade | Escopo | Eixo | Valores Comuns |
|-------------|--------|------|----------------|
| `justify-items` | Container | Horizontal (X) | start, end, center, stretch |
| `align-items` | Container | Vertical (Y) | start, end, center, stretch |
| `place-items` | Container | Ambos | [align] [justify] |
| `justify-self` | Item | Horizontal (X) | start, end, center, stretch |
| `align-self` | Item | Vertical (Y) | start, end, center, stretch |
| `place-self` | Item | Ambos | [align] [justify] |
| `justify-content` | Container | Horizontal (X) | start, center, space-between, etc. |
| `align-content` | Container | Vertical (Y) | start, center, space-between, etc. |
| `place-content` | Container | Ambos | [align] [justify] |

Com essas propriedades, você tem controle total sobre o posicionamento e a distribuição dos elementos no Grid CSS! 🎯

---

## **Grid Responsivo com CSS**

Criar layouts que se adaptam a diferentes tamanhos de tela é essencial no desenvolvimento web moderno. O CSS Grid oferece ferramentas poderosas para construir grids dinâmicos e responsivos.

---

### **1. Funções Avançadas para Grids Dinâmicos**

#### **`repeat()`** → Repete um padrão de colunas/linhas

Sintaxe: `repeat(número-de-repetições, tamanho)`

```css
.container {
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de 1 fração cada */
}
```

#### **`minmax()`** → Define tamanhos mínimos e máximos

Sintaxe: `minmax(valor-mínimo, valor-máximo)`

```css
.container {
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  /* Colunas com no mínimo 100px e no máximo 1fr */
}
```

#### **`auto-fit` vs `auto-fill`** → Ajuste automático de colunas

Ambos preenchem o espaço disponível, mas comportam-se diferentemente quando sobram espaços:

```css
/* auto-fit: redimensiona as colunas para preencher o espaço */
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* auto-fill: mantém o tamanho mínimo e cria colunas fantasmas se houver espaço */
.container {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

**Diferença prática:**

- `auto-fit` → Colunas se expandem para ocupar todo o container
- `auto-fill` → Mantém o tamanho mínimo e deixa espaço vazio se necessário

---

### **2. Técnicas para Grid Responsivo**

#### **Exemplo 1: Grid que se ajusta automaticamente**

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

- Em telas largas: cria mais colunas (quantas couberem)
- Em telas estreitas: reduz para 1 coluna

#### **Exemplo 2: Layout que muda completamente**

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 200px 1fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
}
```

#### **Exemplo 3: Número variável de colunas**

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

- Mantém no mínimo 150px por coluna
- Cria quantas colunas couberem no espaço disponível

---

### **3. Media Queries para Controle Preciso**

Combine media queries com Grid para layouts específicos:

```css
/* Mobile First (1 coluna) */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

/* Tablet (2 colunas) */
@media (min-width: 600px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (4 colunas) */
@media (min-width: 900px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

**Dica profissional:** Use `min-width` para uma abordagem mobile-first.

---

### **4. Técnicas Avançadas**

#### **Imagens responsivas em grid**

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.gallery img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

#### **Grid com conteúdo variável**

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  gap: 20px;
}
```

- `grid-auto-rows` garante que linhas extras tenham altura mínima

---

### **Resumo das Técnicas Responsivas**

| Técnica | Uso | Exemplo |
|---------|-----|---------|
| `repeat()` | Padrões repetitivos | `repeat(4, 1fr)` |
| `minmax()` | Limites flexíveis | `minmax(200px, 1fr)` |
| `auto-fit` | Preenchimento inteligente | `repeat(auto-fit, minmax())` |
| `auto-fill` | Preenchimento conservador | `repeat(auto-fill, minmax())` |
| Media Queries | Breakpoints específicos | `@media (min-width: 768px)` |

Com essas técnicas, você pode criar grids que se adaptam perfeitamente a qualquer dispositivo! 📱💻🖥️

## **Exemplos Práticos**

- Layout básico com 3 colunas
- Galeria de imagens responsiva
- Layout de blog com header, main e footer

---

### **Exemplo Prático 1: Grid Básico com 3 Colunas**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo Grid CSS</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
    .item {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>
```

---

### **Exemplo Prático 2: Grid Responsivo**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Responsivo</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
    }
    .item {
      background-color: lightcoral;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>
```

---

### **Layout de Blog com CSS Grid (Header, Main, Footer)**

Aqui está um exemplo completo de um layout de blog responsivo usando CSS Grid, com as seguintes seções:

- **Header** (cabeçalho)
- **Main** (conteúdo principal com artigos e sidebar)
- **Footer** (rodapé)

### **1. Estrutura HTML Básica**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog com Grid CSS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header class="header">Blog do Dev</header>
    <main class="main-content">
      <article class="post">
        <h2>Título do Post</h2>
        <p>Conteúdo do artigo...</p>
      </article>
      <article class="post">
        <h2>Outro Post</h2>
        <p>Mais conteúdo...</p>
      </article>
    </main>
    <aside class="sidebar">
      <h3>Barra Lateral</h3>
      <ul>
        <li>Categoria 1</li>
        <li>Categoria 2</li>
      </ul>
    </aside>
    <footer class="footer">© 2024 Blog do Dev</footer>
  </div>
</body>
</html>
```

---

### **2. CSS com Grid Layout**

```css
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
  grid-template-columns: 1fr 1fr 300px; /* 2 colunas + sidebar fixa */
  grid-template-rows: auto 1fr auto; /* Altura automática para header e footer */
  min-height: 100vh; /* Ocupa toda a altura da tela */
  gap: 20px;
  padding: 20px;
}

/* Estilização das áreas */
.header {
  grid-area: header;
  background: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
}

.main-content {
  grid-area: main;
  display: grid;
  gap: 20px;
}

.post {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.sidebar {
  grid-area: sidebar;
  background: #34495e;
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.footer {
  grid-area: footer;
  background: #2c3e50;
  color: white;
  padding: 15px;
  text-align: center;
}
```

---

### **3. Versão Responsiva (Mobile First)**

```css
/* Layout Mobile (1 coluna) */
.container {
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
  grid-template-columns: 1fr;
}

/* Tablet (2 colunas) */
@media (min-width: 768px) {
  .container {
    grid-template-areas:
      "header header"
      "main sidebar"
      "footer footer";
    grid-template-columns: 1fr 250px;
  }
}

/* Desktop (3 colunas) */
@media (min-width: 1024px) {
  .container {
    grid-template-areas:
      "header header header"
      "main main sidebar"
      "footer footer footer";
    grid-template-columns: 1fr 1fr 300px;
  }
}
```

---

### **4. Exemplo Visual do Layout**

```
[       HEADER       ]  ← `grid-area: header`
[ MAIN       ][ SIDEBAR ]  ← `grid-area: main` e `grid-area: sidebar`
[       FOOTER       ]  ← `grid-area: footer`
```

**Comportamento em diferentes telas:**

- **Mobile**: Tudo em uma coluna (header → main → sidebar → footer)
- **Tablet**: Header e footer em largura total, main e sidebar lado a lado
- **Desktop**: Header e footer em 3 colunas, main ocupa 2 colunas, sidebar 1 coluna

---

### **5. Recursos Adicionais**

#### **Grid com conteúdo dinâmico** (posts que se ajustam):

```css
.main-content {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

#### **Sticky Sidebar** (barra lateral fixa):

```css
.sidebar {
  position: sticky;
  top: 20px;
  align-self: start;
}
```

Este layout oferece uma estrutura limpa e organizada para blogs, totalmente responsiva e fácil de personalizar! 🚀

---

## **Sites com exemplos e demonstrações**

### **- CSS-Tricks - A Complete Guide to Grid**

- URL: [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Descrição: Um guia abrangente que explica todos os conceitos do CSS Grid, com exemplos visuais e explicações detalhadas de cada propriedade. Inclui muitos exemplos de layout com grids.

### **- Grid by Example**

- URL: [Grid by Example](https://gridbyexample.com/)
- Descrição: Um site dedicado ao CSS Grid criado por Rachel Andrew. Oferece exemplos práticos, templates e vídeos explicativos. É um excelente recurso para entender como o Grid pode ser utilizado em diversos layouts.

### **- CSS Grid Garden**

- URL: [CSS Grid Garden](https://cssgridgarden.com/)
- Descrição: Um jogo interativo onde você aprende CSS Grid jogando. Ele é projetado para ensinar as propriedades do Grid de uma forma divertida e prática, ajudando a memorizar os conceitos enquanto joga.

### **- MDN Web Docs - CSS Grid Layout**

- URL: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- Descrição: A documentação oficial do Mozilla Developer Network (MDN) sobre o Grid Layout. Oferece exemplos detalhados de uso, com explicações técnicas das propriedades e comportamentos do Grid.

### **- Grid Layout Generator**

- URL: [Grid Layout Generator](https://grid.layoutit.com/)
- Descrição: Uma ferramenta visual que permite criar layouts de Grid interativamente. Você pode desenhar seu grid, definir linhas e colunas, e gerar o código CSS automaticamente. Ideal para experimentar e gerar protótipos rapidamente.

### **- CSS Grid Generator**

- URL: [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- Descrição: Um gerador de grids online, onde você pode arrastar e criar seu layout. Ele gera o código CSS necessário com base nas configurações que você seleciona, tornando fácil criar grids complexos.

### **- Learn CSS Grid**

- URL: [Learn CSS Grid](https://learncssgrid.com/)
- Descrição: Um site educacional que ensina CSS Grid com uma abordagem prática e visual. Ele inclui uma série de tutoriais e exemplos, focados em ensinar os conceitos passo a passo.

Esses sites são ótimos para aprender, praticar e experimentar com o CSS Grid em diversos níveis de complexidade.

### **Exercícios:**

1. Crie um layout com 4 colunas e 3 linhas, e adicione diferentes cores aos elementos.
2. Use o Grid para criar um layout de página com cabeçalho, barra lateral, conteúdo principal e rodapé.
3. Ajuste o layout criado para que seja responsivo utilizando `minmax()` e `auto-fit`.
