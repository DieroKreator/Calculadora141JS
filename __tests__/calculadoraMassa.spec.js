// bibliotecas
// referencia ao codigo da calculadora
const calculadora = require('../src/calculadora')

// referencia a massa de teste
const massa = require('../fixtures/massa')

// Somar
test.each(massa.array.map(bloco => [
    bloco.num1,
    bloco.num2,
    bloco.esperadoSoma]))
    ('somar %f + %f com massa', (num1, num2, resultadoEsperado) => {
        // Executa
        const resultadoObtido = calculadora.somarDoisNumeros(num1, num2)
        // Valida
        expect(resultadoObtido).toBe(resultadoEsperado)
    })