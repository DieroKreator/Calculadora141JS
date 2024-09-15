// Imports / Require --> Bibliotecas e Frameworks

// 2 - Opcional no JavaScript: Classe (grupo de funcionalidades)

// 2.1 - Atributos / Campos

// 2.2 - Funcionalidades (Funções e Métodos)
let somarDoisNumeros = function somarDoisNumeros(mun1, num2) {
    let resultado = 0
    resultado = mun1 + num2
    return resultado
} 

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    return num1 - num2
}

let multiplicarDoisNumeros = (num1, num2) => num1 * num2

let dividirDoisNumeros = (num1, num2) => num1 / num2

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
}