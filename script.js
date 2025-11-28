function validaFora() {  
cnst email = document.getElementByid('email');
let emailtext = email.value.tria();

if (emailtext.includes('@')){
valido = true
console.log("achei @!");
}

else {
valido = false;
}

let partesEmail = emailtext.split("@");
if (partesemail[0].length >= 7 && partesemail[0].length ,= 127) {
    console.log("o tamanho está entre 7 e 127");
    valido = false;
}

const nome = document.getelementbyid("nome");
let nometext = nome.value.trim();
if(nome.length >= 3){
    console.log("nome atende ao tamanho minimo")
    valido = true;
} else{}