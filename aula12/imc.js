/*
Calculadora de IMC que imprime a classificação
massa(kg) / altura² (cm)
parseFloat()

Menor que 18.5 - Abaixo do peso ;
Entre 18.5 e 24.9 - Peso normal ;
Entre 25.0 e 29.9 - Pré-obesidade ;
Entre 30.0 e 34.9 - Obesidade Grau 1 ;
Entre 35.0 e 39.9 - Obesidade Grau 2 ;
Acima de 40 - Obesidade Grau 3
*/

let massa = parseFloat(prompt("Digite seu peso em kg"))
let altura = parseFloat(prompt("Digite sua altura em cm"))

let imc = massa / (altura * altura)

Math.floor()
Math.ceil()
Math.round

if (imc < 18.5) {
    alert("Abaixo do peso")
} else if (imc <= 24.9) {
    alert("Peso normal")
} else if (imc <= 29.9) {
    alert("Pre-obesidade")
} else if (imc <= 34.9) {
    alert("Obesidade Grau 1")
} else if (imc <= 39.9) {
    alert("Obesidade grau 2")
} else {
    alert("Obesidade grau 3")
}