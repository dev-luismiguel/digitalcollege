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

// Loop For, While e Do..While com intervalo: Use um loop para imprimir todos os números pares entre 2 e 20.

for (let i = 2; i <= 20; i++) {
    // const resto = i % 2;
    // if (resto === 0) {
    //     console.log(i);
    // }
    const isEven = i % 2 === 0;
    if (isEven) {
        console.log(i);
    }
}

// Imprima todos os números de 1 a 100 que são divisíveis por 3 
for (let i = 1; i <= 100; i++) {
    const resto = i % 3;
    if (resto === 0) {
        console.log(i)
    }
}

// Faça um script que leia um número do usuário e calcule a soma dos números de 1 a até o número que o usuário digitou

somaNumeros(10)
somaNumeros(20)
somaNumeros(30)

const numero = Number(prompt("Digite um numero"))
let soma;
for (let i = 1; i <= numero; i++) {
    soma += i;
}
alert(`A soma é ${soma}`) // A soma é 55
alert("A soma é " + soma) // A soma é 55

const somaNumeros = (numero) => {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    return soma;
}
 
somaNumeros(10)

// const arrayDeNumeros = [10, 20, 30]
const arrayDeTextos = ["Fulano", "Cicrano"]
// Acessar valor de um array
// const nome = arrayDeTextos[0] // nome receberia Fulano
let index = 1;
arrayDeTextos[index]
arrayDeTextos.length

// Loop For, For Of, While e ForEach em uma lista: Crie uma lista de cinco frutas e use um loop for para imprimir cada fruta da lista.
const fruta1 = "Maçã";
const fruta2 = "Banana";
const frutas = [fruta1, fruta2, "Abacate", "Acerola", "Limão"]

for (let fruta of frutas) {
    console.log(fruta)
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

for (let elemento of lista) {
    console.log(elemento)
}

const texto = "O javascript trata isso como uma lista de caracteres"
let contador = 0;
for (let letra of texto) {
    if (letra.toLocaleLowerCase() === "a") {
        contador++;
    }
}
console.log(contador)

// 2. Escreva um programa que conte quantas letras "a" tem em uma frase.

// const fruta1 = "Maçã";
// const fruta2 = "Banana";
// const frutas = [fruta1, fruta2, "Abacate", "Acerola", "Limão"]

// Acessar valor de um array
// const arrayDeTextos = ["Fulano", "Cicrano"] // Inicializa o array
// const nome = arrayDeTextos[0] // nome recebe o primeiro index do array, Fulano

// Acessar valor de um objeto
// const pessoa = { nome: "Fulano", idade: 19 } // Cria um objeto pessoa que contem nome e idade
// console.log(pessoa.nome) // Imprime o atributo nome de pessoa, Fulano


// 3. Faça um carrinho de compras com pelo menos 3 produtos e imprima o valor total dos produtos, cada produto deve ter nome e preço.
// const produto1 = { nome: "Celular", preco: 2000 }
// const produto2 = { nome: "Notebook", preco: 3200 }
// const produto3 = { nome: "Geladeira", preco: 4000 }

// const produtos = [produto1, produto2, produto3]

// let valorTotal = 0;
// for (let produto of produtos) {
//     valorTotal += produto.preco
// }
// console.log(`O valor total dos produtos é ${valorTotal}`)

// // filter

// const produtosFiltrados = produtos.filter((elemento) => {
//     return elemento.preco <= 3000 || elemento.nome === "Notebook"
// })

// console(produtosFiltrados)

// Dado o seguinte array: [2, 4, 6, 15, 7, 9, 11, 300], retorne um outro array somente com os números menores do que 4 ou maiores do que 9.

// const array = [2, 4, 6, 15, 7, 9, 11, 300]
// const arrayFiltrado = array.filter((elemento) => elemento < 4 || elemento > 9)
// const arrayFiltrado2 = array.filter((elemento) => { 
//     return elemento < 4 || elemento > 9
// })

// console.log(arrayFiltrado)

// Dado o seguinte array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] retorne um outro array somente com os números pares.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrayFiltrado = array.filter((elemento) => elemento % 2 === 0)
// const arrayFiltrado2 = array.filter((elemento) => { return elemento % 2 === 0})
// const arrayFiltrado3 = array.filter((elemento) => { 
//     const isEven = elemento % 2 === 0
//     return isEven;
// })


const produto1 = { nome: "Celular", preco: 2000 }
const produto2 = { nome: "Notebook", preco: 3200 }
const produto3 = { nome: "Geladeira", preco: 4000 }

const produtos = [produto1, produto2, produto3]

const produtosComDesconto = produtos.map((produto) => { 
    return {
        nome: produto.nome,
        preco: produto.preco - 10,
    
    }
})
console.log(produtosComDesconto)

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => { acumulador.push(valorAtual); return acumulador }, []);
console.log(soma);

const arrayDeNumeros = [1, 1, 1]

const arrayDoUsuario1 = []
for (let i = 0; i < 3; i++) {
    arrayDoUsuario1.push(Number(prompt("Digite numero")))
}

const arrayDoUsuario2 = []
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        alert(`Digite o numero ${j} do usuario ${i}`)
    }
    arrayDoUsuario2.push(Number(prompt("Digite numero")))
}

const checar = () => {
    for (let i = 0; i < 3; i++) {
        if(arrayDeNumeros[i] !== arrayDoUsuario[i]) {
            alert("Errou")
            return false;
        }
    }
    return true
}

if (checar()) alert("Acertou")
