# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function (arg) {
    if(arg){
        return true;
    }else {
        return false;
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(NaN);
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy(-0);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(0);
isTruthy('a');
isTruthy({});
isTruthy([]);
isTruthy(true);
isTruthy(1.8);
isTruthy(!false);
isTruthy(!!true);
isTruthy(' ');
isTruthy(9090909);


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'Renault',
    modelo: 'Clio',
    placa: 'JRI 1067',
    ano: 2008,
    cor: 'Prata',
    quantasPortas: 5,
    assentos: 5,
    quantidadeDePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(cor){
    this.cor = cor;
    return `A cor do carro foi mudada para ${this.cor}!`;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function() {
    return `A cor do carro é: ${this.cor}!`;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function() {
    return `O modelo do carro é: ${this.modelo}!`
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function() {
    return `A marca do carro é: ${this.marca}!`
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function () {
    return `Esse carro é um ${this.marca} ${this.modelo}!`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:

- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"

- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoa = function(num_Pessoas) {
    var total_Pessoas = this.quantidadeDePessoas + num_Pessoas;

    if(this.quantidadeDePessoas === this.assentos) {
        return "O carro já está lotado!";
    }

    if(total_Pessoas > this.assentos) {
        var qntPes = this.assentos - this.quantidadeDePessoas;
        if (qntPes === 1) {
            return `Só cabe mais ${qntPes} pessoa!`;
        } else {
            return `Só cabem mais ${qntPes} pessoas!`;
        }
        
    }

    this.quantidadeDePessoas += num_Pessoas;
    return `Já temos ${total_Pessoas} pessoas no carro!`
}



/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

carro.cor // "Prata"

// Mude a cor do carro para vermelho.

carro.cor = "Vermelho"

// E agora, qual a cor do carro?

 carro.cor //"Vermelho"

// Mude a cor do carro para verde musgo.

carro.cor = "Verde Musgo"

// E agora, qual a cor do carro?

 carro.cor //"Verde Musgo"

// Qual a marca e modelo do carro?

carro.obterMarcaModelo() // "Esse carro é um Renault Clio!"

// Adicione 2 pessoas no carro.

carro.adicionarPessoa(2) // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.

carro.adicionarPessoa(4) // "Só cabem mais 3 pessoas!"

// Faça o carro encher.

carro.adicionarPessoa(3) // "Já temos 5 pessoas no carro!"
carro.adicionarPessoa(1) // "O carro já está lotado!"

// Tire 4 pessoas do carro.

carro.removerPessoa = function(num_Pes) {
    this.quantidadeDePessoas -= num_Pes;
	if(num_Pes === 1) {
		return `${num_Pes} saiu do carro!`;
	}else {
    return `${num_Pes} saíram do carro!`;
    }
}

carro.removerPessoa(4) // "4 saíram do carro!"

// Adicione 10 pessoas no carro.

carro.adicionarPessoa(10) //"Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?

carro.quantidadeDePessoas // 1

```
