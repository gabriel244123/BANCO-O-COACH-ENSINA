//alert(numero1 =numero2)

//var numero1 =Number(prompt("qual o primeiro numero"))
//var numero2 =Number(prompt("qual o segundo numero"))

//alert("o resultado da soma dos dois e:"+(numero1 + numero2))
//alert("o resultado da subtraçao dos dois e:" +(numero1 -numero2))
//alert("o resultado da divisao dos dois e:" + (numero1 / numero2))
//alert("o resultado multiplicaçao dos doies e;"+(numero1 * numero2))

//var nota1 = Number(prompt("qual o primeiro numero"))
//var nota2 =Number(prompt("qual o segundo numero"))

//var nome =prompt("qual o nome do aluno")
//var nota1 =Number (prompt("qual a primeira nota do "+(nome)))
//var nota2 =Number (prompt("ok primeira nota "+nota1+ "qual a segunda nota:"))
//alert("a media final sera:" + (nota1+nota2)/2)

//if((nota1+nota2)/2 >= 6){
   // alert ("aluno " + nome + "aprovado")

//else {
//alert("aluno" + nome + "reprovado")



//var idade =Number (prompt("qual a sua idade?"))
//if (idade >= 18){
 //   alert("maior de idade")
//}
//else{
   // alert(menor de idade")
//}





/*
var peso=number(prompt("qual o seu peso"))
var autura=number(prompt("qual a sua altura"))
var imc =(peso/(altura*altura)).tofixed(2)
if(imc <18.5){
 alert ("seuimc e de "+imc+"abaixodopeso")
}
else if((imc >=18.5) & (imc<25)){
alert ("peso normal seu imc e" +imc)
}
else if((imc >=25)&(imc<30)){
alert ("vc esta no sobrepeso seu imc e de "+imc)
}
else if ((imc >=30)&(imc<35)){
alert"vc esta na obesidade nivel 1 seu imc e de "+imc)"
}

 */



//var listadecurso =[ "programaçao","enfermagem","estetica","informatica","exel","veterinario" ]

//alert( listadecursos[2] )

//alert( listadecursos[0] )
//alert( listadecursos[1] )
//alert( listadecursos[2] )
//alert( listadecursos[3] )
//alert( listadecursos[4] )
//alert( listadecursos[5] )

//listadecurso.forEach(cursos => alert( cursos ))
   

//for(var i=0; i<=5; i++){
  // alert(listadecurso[i])


 /* 
//prompt inicial para coletar quantas notas serao utilizadas no calculo
var qtdenotas =prompt("quantas notas serao avaliadas")

//criacao do acumulador que vai somar todas as notas
var acumuladornotas =0;

//estrutura de repeticao que ira roda uma vez para cada nota
for (var i = 1; i<= qtdenotas; i++){
   //prompt para pergunta a nota do aluno atual
var nota = prompt("digite a nota "+ i)
//variavel rece o valor dela memsa mais a nota do aluno atual
acumuladornotas = acumuladornotas + Number(nota)
}
//criar um alerta com a divisao do valor acumulado pela qtde de notas
alert ("a media e: "+ (acumuladornotas /Number(qtdenotas)))
*/



//var listadenomes =["maylon","arthur","ryan","raphael","maria","gabriel","macoly","dalton","patrick"]

//listadenomes.forEach(nome=>alert(nome +" faz o curso de programaçao"))
   
//var indiceprocurado =prompt("digite o indice do aluno que deseja buscar")
//alert (listadenomes[indiceprocurado])

/*
var n = prompt("digite um numero:")
for(i=0;i<=9;i++){
   alert(`${n} x ${i} = ${n*i}`)
}
   */


//var listadejogos = ["fifa", "call of duuty","carros","gta","pb"]
//var novojogo=prompt("digite um jogo para adicionar")
//push serve para ADICIONAR um novo registro em uma lista
//listadejogos.pop() //remove o ultimo elemento da lista
////listadejogos.shift() // remove o primeiro elemento da lista 
//listadejogos.splice(2,  1) //remove 1 elemento a partir do indice 2
//alert( listadejogos)

//var indice = listadejogo.indexof("fifa")
// alert( indice)


/*
var listadejogos = ["fifa","callofduty","fast","gta","pb"]

var qtdejogosnovos = prompt("quantos  jogos vc quer adicionar?")
for(var i=0; i<=qtdejogosnovos; i++){
   var jogo = prompt("digite o nome do jogo")
   listadejogos.push(jogo)
}
alert(listadejogos)
*/
/*
alert("bem vindo ao sistema")
*/

/*
EXEMPLOS
var pessoa1 ={
nome:"gabriel",
sobrenome:"silva"
id:12312,
idade:20,
jogosfavoritos:["cs","pes"]
}

pessoa1.jogosfavoritos.foreach(jogo =>alert(pessoa1.nome + "gostado jogo" + jogo))
*/


//Ppropriedades do objeto curso
//nome do curso
//alunos
//cargahoraria
//objetivo
//var listadenomes =["maylon","arthur","ryan","raphael","maria","gabriel","macoly","dalton","patrick"]
/*
var curso ={
   nome: "logica de programaçao",
   alunos: listadenomes,
   cargahoraria: "60hrs" ,
   objetivo:"diploma",
   local :"senac" ,
}
//alert("eai" +curso.+"\nvoce faz o curso de "+curso.nome_do_curso+"\na sua carga horaria e "+curso._carga_horaria+"\no local do curso e "+curso.local
alert(curso.nome + " é um curso do "+ curso.local + " que tem uma carga horaria de "+ curso.cargahoraria + " com objetivo de ter um "+ curso.objetivo )
*/
/*
function rotinadiaria(){
alert("acorda")
alert ("arrumar a cama")
alert ("ir trabalhar")
alert ("voltar pra casa")
alert ("dormir")
}
rotinadiaria()
rotinadiaria()
rotinadiaria()
rotinadiaria()
*/
/*
function somarnumeros(){
var num1 = Number(prompt("digite o primeiro numero"))
var num2 = Number(prompt("digite o segundo numero"))
var resultado = num1 + num2
alert(resultado)
 }
 somarnumeros()
 */

/*
function saudaçao(nome){
alert("seja bem vindo, " + nome) 
alert("digite a operaçao: \n1- tal \n2- Tal")

}
saudaçao("daniel")*/
//function multiplicaçao()
/*{
var num1 = Number(prompt("digite o primeiro numero"))
var num2 = Number(prompt("digite o segundo numero"))
var num3 = Number(prompt("digite o terceiro numero"))
var resultado = num1 * num2 *num3
alert(resultado)
}
somarnumeros()
*/
/*
function classificador(){
var numero = prompt("qual o numero?")
   if(numero>10){
alert(numero + "maior que dez")
   }
else if (numero==10){
alert(numero + "e igual a dez")
}
else{
alert(numero + "menor que dez")
}
}
classificador()
*/

/*var cep = "38702098"
alert( cep.substring(0,5)+ "-" + cep.substring(5,8))
*/

/*
var cpf = "45353754574"
alert(cpf.substring(0,3)+ "."+ cpf.substring(3,6)+"."+cpf.substring(6,9)+"-"+ cpf.substring(9,11))
*/

//exemplos
// Uma variavel ou seja oque varia,armanzena um texto,numeros ou seja lugar para armazenar valores ou seja pode variar ou mudar.
//condicional if que da uma condiçao serve para tomar decisoes ou mudanças em um aplicativo ou jogo 

var nome = prompt("Qual seu nome?")

alert("Bem Vindo ao BANCO O COACH ENSINA " + nome)
var i=0
var saldo = 0
while(i==0){
var operaçao=prompt("o que voce deseja fazer?\n1-ver extrato disnponivel \n2-retirar o dinheiro \n3-depositar o dinheiro \nOBRIGADO PELA PREFERENCIA EM NOSSO BANCO! ")


if(operaçao==1){
   if(saldo<=0){alert("BANCO ESTA FORA DE AREA, procure a agencia mais proximo ou ligue dd 501")}
   else{

   }
}
else if(operaçao == 2){
var retirada = prompt("quanto seria o valor para retirada?")
if(retirada>saldo){
   alert("voce nao tem saldo em sua conta,Deposite uma valor para poder sacalo!!")   
}
else{
   saldo = saldo - retirada
   alert(saldo)
}

}

else if(operaçao== 3){
   var depositar = Number(prompt("Quanto voce deseja depositar em sua conta?"))
saldo = saldo + depositar
alert("voce tem R$ "+saldo+" de saldo")
}


}
