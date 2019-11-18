/*
Crie um array com 5 items (tipos variados).
*/

var arr = ['Kayque', 1, {casa: 'grande'}, function(){}, undefined];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(item) {
    arr.push(item);
    return arr
}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/


addItem(['Roupa', 55, null]); //["Kayque", 1, {…}, ƒ, undefined, Array(3)]


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/


console.log("O segundo elemento do segundo array é " + arr[5][1] + "."); //O segundo elemento do segundo array é 55.
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("\n");
console.log("O primeiro array tem " + arr.length + " itens."); // O primeiro array tem 6 itens.
console.log("\n");
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/


console.log("O segundo array tem " + arr[5].length + " itens."); //O segundo array tem 3 itens.

console.log("\n");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

num = 10;

while(num <= 20){
    num%2 === 0 ? console.log( 'Números pares entre 10 e 20: ' + num ) : '';
    num++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

console.log("\n");

num = 10;

while(num <= 20){
    num%2 !==0 ? console.log( 'Números ímpares entre 10 e 20:' + num ) : '';
    num++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:

- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;

- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for(var numberPar = 100; numberPar <= 120; numberPar++){
    numberPar%2 === 0 ? console.log( 'Números pares entre 100 e 120: ' + numberPar ) : '';
}

console.log("\n");

for(var numberImpar = 111; numberImpar <= 125; numberImpar++){
    numberImpar % 2 !== 0 ? console.log( 'Números ímpares entre 111 e 125: ' + numberImpar ) : '';
}
