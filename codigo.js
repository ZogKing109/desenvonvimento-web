console.log("Oi");

//( EXERCICIO NUMERO 1)

/*
var num = parseInt(prompt(" Qual o numero: "));
var contador = 0
if( num % 2 == 0 ){
    console.log(`O numero ${num} é par.`);
}
else{
    console.log(`O numero ${num} é inpar.`);
}
for(var c = 0; c <= num; c++){
    if(num % c == 0){
        contador++;
    }
}
if(contador > 2){
    console.log(`O numero ${num} não é primo.`);
}
if(contador <= 2){
    console.log(`O numero ${num} é primo.`);
}

*/


//( EXERCICIO NUMERO 2)

/*
var fibo = [0,1]
var repetir = parseInt(prompt("Quantas repetições: "))
var aux

for(var c = 0; c < (repetir - 2); c++){
    aux = fibo[c] + fibo[c + 1]
    fibo[c + 2] = aux
    
}

console.log(fibo)
*/

//( EXERCICIO NUMERO 3)
//[1,3,5,7,4]
/*
var num = prompt("")
var lista = num.split(",")
var axu;


var lista = []
var qt = parseInt(prompt('Quantos numbers: '))
for(var )





var axu;
for(var c = 0; c < lista.length; c++){
    for( var n = 0; n < lista.length; n++){
        if(lista[n] > lista[ n + 1 ]){
            axu = lista[n]
            lista[n] = lista [ n + 1]
            lista[ n + 1 ] = axu
        }
    }
}

document.write(lista)


*/
//( EXERCICIO NUMERO 4)

/*
var  op = [0,1,2,3,4]
var opição = prompt("qual a sua escolha de calculo: ")
var num1 = parseFloat(prompt("qual o primeiro numero: "))
var num2 = parseFloat(prompt("qual o segundo numero: "))

if(opição in op){
    // 0 igual a soma
    if( opição == 0 ){
    ad = num1 + num2
    console.log(`A adição é igual a ${ad}`)
    }
    // 1 igual a subtração
    if( opição == 1 ){
    sub = num1 - num2
    console.log(`A subtração é igual a ${sub}`)
    }
    // 2 igual a divisão 
    if( opição == 2 ){
    div = num1 / num2
    console.log(`A divisão é igual a ${div}`)
    }
    // 3 igual a multiplicação
    if( opição == 3 ){
    mult = num1 * num2
    console.log(`A multiplicação é igual a ${mult}`)
    }
    // 4 igual a elevado
    if(opição == 4 ){
    pot = num1 ** num2
    console.log(`A potencia é igual a ${pot}`)
    }
}
else{
    document.write(`Opição ${opição} invalida `)
}
console.log(op)

*/

//( EXERCICIO NUMERO 5)

/*
var nome = prompt("Qual o seu nome: ")
var idade = parseInt(prompt("Qual a sua idade: "))
var salario = parseInt(prompt("Qual o seu salario: "))
var sexo = prompt("Qual o seu sexo: ")
var ec = prompt("Qual o seu estado civil:  \n",
    "c = casado, s = solteiro, p = prefiro não dizer "
)

if( nome <= 2 ){
    document.write(`Seu nome, ${ nome } é invalido; `)
}
else{
    document.write(`Seu nome, ${ nome } é valido; `)
}
if(idade <= 0){
    document.write(`Sua idade, ${ idade } é invalida; `)
}
else{
    document.write(`Sua idade, ${ idade } é valida; `)
}
if( salario <= 0 ){
    document.write(`Seu salario, ${ salario } é invalido; `)
}
else{
    document.write(`Seu salario, ${ salario } é valido; `)
}
if( sexo != 'F', sexo != 'M', sexo != 'f', sexo != 'm' ){
    document.write(`Seu sexo, ${ sexo } é invalido; `)
}
else{
    document.write(`Seu sexo, ${ sexo } é valido; `)
}
if( ec != 'c' , ec != 's', ec != 'p' ){
    document.write(`Seu estado civil, ${ ec } é invalido; `)
}
else{
    document.write(`Seu estado civil,${ ec } é valido; `)
}
console.log()

*/
