let altura = parseFloat(prompt("Informe sua altura:"));
let peso = parseFloat(prompt("Informe o seu peso:"));

function calculoIMC(parPeso, parAltura){
    return parPeso/(parAltura*parAltura);
}

IMC = calculoIMC (peso, altura);
alert (`O valor de IMC é ${IMC}.`)