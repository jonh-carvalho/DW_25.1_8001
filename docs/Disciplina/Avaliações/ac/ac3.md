### **AC3: Questões Molde Enade**

1. Um desenvolvedor front-end está criando um site responsivo para uma biblioteca comunitária. O layout deve se adaptar a dispositivos móveis, tablets e desktops, seguindo as melhores práticas de acessibilidade e semântica HTML. O design inclui:  

- Um cabeçalho com logo e menu de navegação  
- Uma seção hero com imagem de fundo e texto sobreposto  
- Um grid de livros em destaque  
- Um rodapé com informações de contato  

O código HTML parcial é:  

```html
<header class="cabecalho">
  <img src="logo.svg" alt="Logo Biblioteca Comunitária">
  <nav aria-label="Navegação principal">
    <ul>
      <li><a href="#inicio">Início</a></li>
      <li><a href="#acervo">Acervo</a></li>
      <li><a href="#eventos">Eventos</a></li>
    </ul>
  </nav>
</header>

<section class="hero">
  <h1>Leitura para todos</h1>
  <p>Explore nosso acervo com mais de 10.000 títulos</p>
</section>
```

#### Questão

Ao implementar o CSS para atender aos requisitos de responsividade e acessibilidade, qual das seguintes abordagens é **MAIS adequada**?

A) Usar unidades fixas como pixels para todos os elementos, garantindo fidelidade ao layout original em todos os dispositivos.  
B) Utilizar media queries com breakpoints baseados em dispositivos específicos (ex: @media (max-width: 768px) para iPads).  
C) Combinar unidades relativas (rem, %), container queries e media queries com breakpoints baseados no conteúdo.  
D) Priorizar o uso de !important para sobrescrever estilos em diferentes viewports, garantindo consistência visual.  
E) Implementar todos os estilos diretamente nos elementos HTML usando atributos style, sem folhas de CSS externas.

--

2./ Um desenvolvedor está criando um formulário de cadastro para um site de cursos online. Os requisitos incluem:

- Campos para **nome**, **e-mail**, **senha** e **telefone**.
- Validação em tempo real (client-side).
- Estilização consistente e acessível.
- Mensagens de erro claras.
- Compatibilidade com leitores de tela.

O código HTML atual é:

```html
<form id="cadastro">
  <div>
    <label>Nome:</label>
    <input type="text" name="nome">
  </div>
  <div>
    <label>E-mail:</label>
    <input type="email" name="email">
  </div>
  <div>
    <label>Senha:</label>
    <input type="password" name="senha">
  </div>
  <div>
    <label>Telefone:</label>
    <input type="tel" name="telefone">
  </div>
  <button type="submit">Cadastrar</button>
</form>
```

__Questão__

Qual das seguintes modificações **melhora significativamente** a acessibilidade e usabilidade do formulário?

A) Substituir os `<label>` por `<span>` e estilizá-los com CSS para ficarem mais atraentes visualmente.  
B) Adicionar `autocomplete="off"` em todos os campos para evitar sugestões do navegador.  
C) Incluir `aria-label` em cada input e remover as tags `<label>` para simplificar o código.  
D) Associar cada `<label>` ao respectivo input usando `for` e `id`, e adicionar `aria-describedby` para mensagens de erro.  
E) Substituir os inputs de senha por texto (`type="text"`) para melhorar a experiência do usuário.  

--

3./ Um desenvolvedor está atualizando um site antigo que utiliza `float` para criar um layout de duas colunas. O código HTML/CSS original é:  

```html
<div class="container">
  <div class="box left">Conteúdo à esquerda</div>
  <div class="box right">Conteúdo à direita</div>
  <div class="footer">Rodapé</div>
</div>
```

```css
.box {
  width: 45%;
  padding: 10px;
}

.left {
  float: left;
}

.right {
  float: right;
}

.footer {
  background-color: #eee;
}
```

Porém, o **rodapé (`footer`)** está aparecendo **ao lado dos elementos flutuantes**, em vez de abaixo deles, como deveria.  

---

**Questão:**  

Qual das seguintes soluções **resolve corretamente** o problema do rodapé e **mantém o layout de duas colunas**?  

A) Adicionar `overflow: hidden;` ao seletor `.footer` para conter os elementos flutuantes.  
B) Usar `clear: both;` no `.footer` para forçá-lo a aparecer abaixo dos elementos flutuantes.  
C) Substituir os `float` por `display: inline-block;` nos elementos `.box` e remover as propriedades `float`.  
D) Adicionar `position: absolute;` ao `.footer` para posicioná-lo manualmente abaixo das colunas.  
E) Aplicar `flexbox` no `.container` (`display: flex;`) e remover todas as propriedades `float`.  

---

4./ Um desenvolvedor está criando uma tabela para exibir dados de produtos em um e-commerce. Os requisitos incluem:  

- **Design responsivo** (adaptável a mobile/desktop).  
- **Estilização avançada** (linhas zebradas, hover effects).  
- **Acessibilidade** (leitura semântica por leitores de tela).  

O código HTML inicial é:  

```html
<table class="produtos">
  <tr>
    <th>ID</th>
    <th>Nome</th>
    <th>Preço</th>
  </tr>
  <tr>
    <td>001</td>
    <td>Smartphone XYZ</td>
    <td>R$ 1.999</td>
  </tr>
  <!-- Mais linhas... -->
</table>
```

**Questão:**  

Qual das seguintes abordagens de CSS **atende melhor** aos requisitos do projeto?  

A) Usar apenas `display: block;` em todos os elementos da tabela (`table`, `tr`, `td`) para facilitar a responsividade.  
B) Manter a estrutura semântica da tabela e aplicar:  

   ```css
   .produtos {
     width: 100%;
     border-collapse: collapse;
   }
   .produtos th, .produtos td {
     padding: 12px;
     text-align: left;
     border-bottom: 1px solid #ddd;
   }
   .produtos tr:nth-child(even) {
     background-color: #f2f2f2;
   }
   .produtos tr:hover {
     background-color: #e6f7ff;
   }
   @media (max-width: 600px) {
     .produtos thead { display: none; }
     .produtos td { display: block; }
     .produtos td::before {
       content: attr(data-label);
       font-weight: bold;
       display: inline-block;
       width: 120px;
     }
   }
   ```  

   E adicionar `data-label="Nome"` (por exemplo) em cada `<td>`.  

C) Substituir a tabela por `<div>`s estilizadas com `flexbox` para evitar os problemas de layout de tabelas tradicionais.  
D) Utilizar `float: left;` em cada célula (`td`) e definir larguras fixas em pixels para garantir alinhamento.  
E) Adicionar `position: absolute;` aos cabeçalhos (`th`) para fixá-los no topo durante o scroll.  
