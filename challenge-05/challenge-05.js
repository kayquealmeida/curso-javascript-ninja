/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var arr = [1,2,3];

function myFunc(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

myFunc(arr[1]) //2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(arrayValores, numero) {
    return arrayValores[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arrayDif = ['Arroz', true, 1, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

myFunction(arrayDif, 1); // Arroz
myFunction(arrayDif, 2); // true
myFunction(arrayDif, 3); // 1
myFunction(arrayDif, 4); // undefined
myFunction(arrayDif, 5); // null

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:

- esse objeto irá receber 3 propriedades, que serão nomes de livros;

- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String

    - A função deve retornar o objeto referente ao livro passado por parâmetro.

-Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( nomeLivro ){
    var objects = {
        'JavaScript The Difinitive guide': {
            quantidadePaginas: '1062',
            autor: 'David Flanagan',
            editora: 'OREILLY'
        },
        'The 15 First Lives of Harry August': {
            quantidadePaginas: '416',
            autor: 'Claire North',
            editora: 'REDHOOK'
        },
        'Black Holes': {
            quantidadePaginas: '64',
            autor: 'Stephen Hawking',
            editora: 'Bantam'
        }
    };

    return !nomeLivro ? objects : objects[ nomeLivro ]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()) //{JavaScript The Difinitive guide: {…}, The 15 First Lives of Harry August: {…}, Black Holes: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log("O livro Black Holes tem: " + book('Black Holes').quantidadePaginas + " páginas!" );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor(a) do livro The 15 First Lives of Harry August é " + book('The 15 First Lives of Harry August').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro JavaScript The Difinitive guide foi publicado pela editora " + book('JavaScript The Difinitive guide').editora + ".");
