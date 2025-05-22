# 06 - JavaScript JSON

## Introdução

JSON é um formato para armazenar e transportar dados.

O JSON é frequentemente usado quando os dados são enviados de um servidor para uma web página.

### O que é JSON?

- JSON significa JavaScript Object Notation
- JSON é um formato leve de intercâmbio de dados
- JSON é independente de idioma *
- JSON é "autodescritivo" e fácil de entender

> A sintaxe JSON é derivada da sintaxe de notação de objeto JavaScript, mas o formato JSON é apenas texto. O código para leitura e geração de dados JSON pode ser escrito em qualquer programação Idioma.

#### Exemplo de JSON

Essa sintaxe JSON define um objeto employees: uma matriz de 3 registros de funcionários (objetos):

```js
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}
```

O formato JSON é avaliado como objetos JavaScript

**O formato JSON é sintaticamente idêntico ao código para criar Objetos JavaScript.**

Devido a essa semelhança, um programa JavaScript pode facilmente converter dados JSON em nativos Objetos JavaScript.

### Regras de sintaxe JSON

- Os dados estão em pares de nome/valor
- Os dados são separados por vírgulas
- Chaves seguram objetos
- Os colchetes contêm matrizes

### Dados JSON - Um nome e um valor

Os dados JSON são gravados como pares de nome/valor, assim como o objeto JavaScript Propriedades.

Um par nome/valor consiste em um nome de campo (entre aspas duplas), seguido por dois pontos, seguido por um valor:

```js
"firstName":"John"
```

**Os nomes JSON exigem aspas duplas. Nomes JavaScript não.**

### Objetos JSON

Os objetos JSON são gravados dentro de chaves.

Assim como em JavaScript, os objetos podem conter vários pares de nome/valor:

```js
{"firstName":"John", "lastName":"Doe"}
```

### Matrizes JSON

As matrizes JSON são escritas entre colchetes.

Assim como em JavaScript, um array pode conter objetos:

```js
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
```

No exemplo acima, o objeto "funcionários" é uma matriz. Ele contém três Objetos.

Cada objeto é um registro de uma pessoa (com um nome e um sobrenome).

### Convertendo um texto JSON em um objeto JavaScript

Um uso comum do JSON é ler dados de um servidor web, e exibir os dados em uma página da web.

Para simplificar, isso pode ser demonstrado usando uma string como entrada.

Primeiro, crie uma string JavaScript contendo a sintaxe JSON:

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


```js
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
```

Em seguida, use a função interna do JavaScript para converter a string em um objeto JavaScript:JSON.parse()

```js
const obj = JSON.parse(text);
```

Por fim, use o novo objeto JavaScript em sua página:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>
```

const obj = JSON.parse(text);
obj.employees[1].firstName + " " + obj.employees[1].lastName;
