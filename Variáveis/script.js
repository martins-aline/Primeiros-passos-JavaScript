/*

Tipos de variáveis:

 var - Escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial pode ser tratada como null;

 let - escopo local de bloco, pode ter seu valor alterado, se não tiver valor inicial será tratada como nul; 

 const - escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado;

    Tipos primitivos:

    Boolean
    var vOuF = false;
    //typeof é um método nativo JS que determina o tipo da variável.
    console.log(typeof vOuF);

    Number
    var numeroAleatorio = 7;
    console.log(typeof numeroAleatorio);

    String 
    var nome = "Aline";
    console.log(typeof nome);

Como declarar? 

var variavel = "aline";
variavel = "martins";
console.log(variavel); 

let variavel2 = "aline";
variavel2 = "martins";
console.log(variavel2); 

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = "local";
  console.log(escopoLocalInterno);
}
escopoLocal();
    
    Regras de uso de Variáveis:

- Iniciar com letras, underscore ou cifrão. Não inciar com números.
- Não usar espaços, usar o camelCase ou underscore.
- Não usar palavras reservadas. Ex: var Function. 
- Declarar variáveis no topo do bloco de código.

    Diferenças entre atribuição, comparação e comparação idêntica.

    - Atribuição:
    O sinal de igualdade em JS significa atribuição. Ex:
    var nome = 'aline'
    variavel nome recebe o valor aline.

    - Comparação: (sempre irá retornar um valor booleano) 
    Para fazermos comparações de valores em JS usamos ==
    Ex: 
        var comparacao = 0 == '0' 
        console.log(comparacao)
    neste caso irá retornar true.

    - Comparação Idêntica: (compara o valor e o tipo)
    Para comparações idênticas em JS usamos ===
    Ex:
     var comparacaoIdentica = 0 === '0'
     console.log(comparacaoIdentica)
    neste caso irá retornar false, pois embora os valores sejam iguais, os tipos são diferentes. Um é do tipo number, e o outro do tipo string.


Operadores aritméticos: Adiçaõ, subtração, multriplicação, divisão real, divisão inteira e potenciação.

var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisaoReal = 6 / 2;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

var potenciacao = 2 ** 10;
console.log(potenciacao);


Operadores relacionais: 

> maior que,
< menor que,
>= maior ou igual a,
<= menor ou igual a,

Exemplos: 

var maiorQue = 5 > 3;
console.log(maiorQue);
Retorna true porque 5 é maior que 3. 

var menorQue = 5 < 3;
console.log(menorQue);
Retorna false porque 5 não é maior que 3. 

var maiorOuIgual = 5 >= 6;
console.log(maiorOuIgual);
Retorna false, porque 5 não é maior nem igual a 6. 

var menorOuIgual = 5 <= 5;
console.log(menorOuIgual);
Retorna true porque 5 é igual a 5. 

Operadores Lógicos:

And - e = &&
Or - ou = ||
Not - não = ! 

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);
*/
