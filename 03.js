// Vetor com o faturamento diário da distribuidora
const faturamentoDiario = [1000, 1200, 800, 1500, 1100, 900, 1300, 1400, 1100, 1000, 1200, 900, 1000, 1100, 1200, 1300, 1400, 1200, 900, 1100, 1000, 1300, 1400, 1500, 1200, 1100, 1000, 900, 800, 1200];

// Inicialização das variáveis para calcular o menor valor, o maior valor e a média mensal
let menorValor = faturamentoDiario[0];
let maiorValor = faturamentoDiario[0];
let somaFaturamento = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    const valorAtual = faturamentoDiario[i];
    if (valorAtual < menorValor) {
        menorValor = valorAtual;
    }
    if (valorAtual > maiorValor) {
        maiorValor = valorAtual;
    }
    somaFaturamento += valorAtual;
}
const mediaMensal = somaFaturamento / faturamentoDiario.length;

// Cálculo do número de dias em que o faturamento diário foi superior à média mensal
let diasSuperiorMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaMensal) {
        diasSuperiorMedia++;
    }
}

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi R$ ${menorValor}.`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês foi R$ ${maiorValor}.`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasSuperiorMedia}.`);
