// 02
/*
const greet = (nome) => {
    alert(`Olá, ${nome}!`)
}

const nome = prompt("Digite seu nome")
greet(nome)
*/

// 03
/*
const add = (numero1, numero2) => {
    return numero1 + numero2;
}

const numero = Number("1")
numero + numero // "2"

const valor1UsuarioTexto = prompt("Digite um numero")
const valor1Usuario = Number(valor1UsuarioTexto)

const valor2Usuario = Number(prompt("Digite outro numero"))

const resultadoDaFuncao = add(valor1Usuario, valor2Usuario)

alert(resultadoDaFuncao)
*/

// 04
/*
const calculaProduto = (numero1, numero2, numero3) => {
    return numero1 * numero2 * numero3;
}

const resultado = calculaProduto(3, 3, 3)
alert(resultado)

const resultado2 = calculaProduto(5, 5, 5)
alert(resultado2)

const valor1 = Number(prompt("Digite um numero"))
const valor2 = Number(prompt("Digite um numero"))
const valor3 = Number(prompt("Digite um numero"))

const resultado3 = calculaProduto(valor1, valor2, valor3)
alert(resultado3)
*/

// 05
/*
const checarSePodeEntrar = (idade, acompanhado = false) => {
    if (idade >= 18 || acompanhado) {
        return "Pode entrar"
    }
    return "Não pode entrar"
}

const checarSeEstaAcompanhado = () => {
    const resposta = prompt("Está acompanhado dos pais? (sim/não)")
    if (resposta == "sim") {
        return true
    } else if (resposta == "não") {
        return false
    }
    alert("Resposta invalida!")
}

const idade = Number(prompt("Digite sua idade"))

let acompanhado;
if (idade < 18) {
    acompanhado = checarSeEstaAcompanhado()
}

const checagem3 = checarSePodeEntrar(idade, acompanhado)
console.log(checagem3)
*/

// var i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
