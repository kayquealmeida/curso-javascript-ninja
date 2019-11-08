# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
 var obj = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: 'Kayque',
    sobrenome: 'Almeida',
    sexo: 'Masculino',
    idade: 25,
    peso: 115,
    altura: 1.86,
    andando: false,
    caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function () {
		return this.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(metros) {
    this.caminhouQuantosMetros += metros;
    this.andando = true;
    return `${this.nome} andou ${metros} metros, total andado ${this.caminhouQuantosMetros} metros`;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function() {
    this.andando = false;
    return `${this.nome} parou de andar`;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

passoa.nomeCompleto = function() {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function() {
    return `Olá, eu tenho ${this.idade} anos!`;
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function() {
    return `Eu peso ${this.peso}Kg.`;
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function() {
    return `Minha altura é ${this.altura}m.`;
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.nomeCompleto() //"Olá! Meu nome é Kayque Almeida!"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarIdade() //"Olá, eu tenho 27 anos!"

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarPeso() //"Eu peso 115Kg"

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarAltura() //"Minha altura é 1.86m."

/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

pessoa.idade //30

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa.andar(10) //"Kayque andou 10 metros, total andado 90 metros"
pessoa.andar(20) //"Kayque andou 20 metros, total andado 110 metros"
pessoa.andar(30) //"Kayque andou 30 metros, total andado 140 metros"

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.andando //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar() //"Kayque parou de andar"

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.andando //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.caminhouQuantosMetros //140

/*


Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";

- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;

- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".

- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function() {

    if(this.sexo === 'Feminino'){
        var fem = 'a'
        return `Olá sou ${fem} ${this.nome}, tenho ${this.idade} anos, ${this.altura}m, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} metros!`
    }
    if(this.idade === 1) {
        var ano = 'ano';
            return `Olá sou o ${this.nome}, tenho ${this.idade} ${ano}, ${this.altura}m, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} metros!`
    }
    if(this.caminhouQuantosMetros == 1) {
        var metro = 'metro'
            return `Olá sou o ${this.nome}, tenho ${this.idade} anos, ${this.altura}m, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metro}!`
    }

    return `Olá sou o ${this.nome}, tenho ${this.idade} anos, ${this.altura}m, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} metros!`
}

// Agora, apresente-se ;)

pessoa.apresentacao() // "Olá sou o Kayque, tenho 25 anos, 1.86m, meu peso é 115kgs e, só hoje, eu já caminhei 11 metros!"

```
