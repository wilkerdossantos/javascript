

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!!");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById('mousemove').innerHTML = "Obrigado por passar o Mouse!";
    elemento.innerHTML = "Obrigado por passar o Mouse!";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById('mousemove').innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1+n2;
}
*/
/*
var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade: ");
console.log(validaIdade(idade));
console.log(validar);
*/
//alert(soma(5, 10));
/*
var d = new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count)
    count++;
}
*/
/*
var idade = prompt("Qual sua idade: ");

if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/ 

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var nome = "Wilker Santos";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));