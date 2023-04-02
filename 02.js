// Informe o número a ser verificado
const numero = 13;

// Inicialização das variáveis para calcular a sequência de Fibonacci
let fibonacci = [0, 1];

// Cálculo da sequência de Fibonacci até o valor ser maior ou igual ao número informado
while (fibonacci[fibonacci.length - 1] < numero) {
    const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proximo);
}

// Verificação se o número pertence à sequência
if (fibonacci.includes(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}