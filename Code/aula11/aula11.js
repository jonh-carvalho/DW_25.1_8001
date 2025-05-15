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