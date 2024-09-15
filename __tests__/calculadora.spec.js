// 1 - Referências / Bibliotecas
const calculadora = require('../src/calculadora')

test('somar 2 + 3', () => {
    // AAA == 3A
    // Arrange, Act, Assert
    // Configura, Executa, Valida

    // Configura - DAdos de Entrada e Saida (Resultado Esperado)
    const num1 = 2
    // console.log(`num1 = ${num1}`) // exemplo com aspas simples = concatenação
    console.log(`num1 = ${num1}`) // exemplo 'fancy' mesclagem
    const num2 = 3
    console.log(`num2 = ${num2}`)
    const resultadoEsperado = 5
    console.log(`resultadoEsperado = ${resultadoEsperado}`)

    // Executar
    const resultadoObtido = calculadora.somarDoisNumeros(num1, num2)
    console.log(`resultadoObtido = ${resultadoObtido}`)

    // Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`${resultadoObtido} = ${resultadoEsperado}`)

}) // final do somar 2+3

test('subtrair 1 - 2', () => {
    // Prepara/Configura
    const num1 = 1
    const num2 = 2
    const resultadoEsperado = -1

    // Executar
    const resultadoObtido = calculadora.subtrairDoisNumeros(num1, num2)

    // Valida
    expect(resultadoObtido).toBe(resultadoEsperado)

}) // final do subtrair 1 - 2

test('multiplicar 3 * 6', () => {
    // Prepara/Configura
    const num1 = 3
    const num2 = 6
    const resultadoEsperado = 18

    // Executar
    const resultadoObtido = calculadora.multiplicarDoisNumeros(num1, num2)

    // Valida
    expect(resultadoObtido).toBe(resultadoEsperado)

}) // final do multiplicar 3 * 6

test('dividir 7 / 2', () => {
    // Configura
    const num1 = 7
    const num2 = 2
    const resultadoEsperado = 3.5

    // Executar
    const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2)

    // Valida
    expect(resultadoObtido).toBe(resultadoEsperado)

}) // final do dividir 7 / 2