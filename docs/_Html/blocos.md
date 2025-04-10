# Blocos HTML básicos: **`<span>`, `<div>`, `class` e `id`**.

---

## **Objetivo**

Ensinar como usar os elementos `<span>` e `<div>` para estruturar conteúdo em HTML e como aplicar estilos e manipulações com os atributos `class` e `id`.

---

### **1. Introdução aos Blocos HTML**

- **`<div>`**: Um elemento de bloco usado para agrupar outros elementos. Ele ocupa toda a largura disponível.
- **`<span>`**: Um elemento em linha usado para estilizar ou manipular partes específicas de texto ou conteúdo.

---

### **2. Diferença entre `<div>` e `<span>`**

| **Elemento** | **Descrição** | **Exemplo de Uso** |
|--------------|---------------|---------------------|
| `<div>`      | Elemento de bloco. Usado para agrupar seções maiores de conteúdo. | Agrupar parágrafos, imagens, etc. |
| `<span>`     | Elemento em linha. Usado para estilizar ou manipular partes específicas de texto. | Destacar palavras ou frases. |

---

### **3. Exemplo Prático**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocos HTML</title>
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
        #section {
            background-color: #f0f0f0;
            padding: 10px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <h1>Exemplo de Blocos HTML</h1>

    <!-- Uso de <div> -->
    <div id="section">
        <h2>Seção de Conteúdo</h2>
        <p>Este é um exemplo de uso do elemento <strong>div</strong> para agrupar conteúdo.</p>
        <p>Você pode adicionar vários elementos dentro de um <code>div</code>.</p>
    </div>

    <!-- Uso de <span> -->
    <p>Este é um exemplo de uso do elemento <span class="highlight">span</span> para destacar partes específicas do texto.</p>
</body>
</html>
```

---

### **4. Trabalhando com `class` e `id`**

- **`class`**: Usado para aplicar estilos ou manipulações a múltiplos elementos.
- **`id`**: Usado para identificar um elemento único na página.

#### **Exemplo de Uso**

```html
<div class="box">Caixa 1</div>
<div class="box">Caixa 2</div>
<div id="uniqueBox">Caixa Única</div>

<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        margin: 10px;
        display: inline-block;
    }
    #uniqueBox {
        background-color: orange;
    }
</style>
```

---

### **5. Diferença entre `class` e `id`**

| **Atributo** | **Descrição** | **Exemplo** |
|--------------|---------------|-------------|
| `class`      | Pode ser usado em múltiplos elementos. | `.box { ... }` |
| `id`         | Deve ser único na página. | `#uniqueBox { ... }` |

---

### **Conclusão**

- Use `<div>` para agrupar elementos e estruturar o layout.
- Use `<span>` para estilizar ou manipular partes específicas de texto.
- Utilize `class` para aplicar estilos a múltiplos elementos e `id` para identificar elementos únicos.
- Combine HTML, CSS e JavaScript para criar páginas interativas e bem estruturadas.
