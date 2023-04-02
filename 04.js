// Valores de faturamento mensal de cada estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Cálculo do valor total mensal da distribuidora
const valorTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Cálculo do percentual de representação de cada estado no valor total mensal da distribuidora
const percentualSP = (faturamentoSP / valorTotal) * 100;
const percentualRJ = (faturamentoRJ / valorTotal) * 100;
const percentualMG = (faturamentoMG / valorTotal) * 100;
const percentualES = (faturamentoES / valorTotal) * 100;
const percentualOutros = (faturamentoOutros / valorTotal) * 100;

// Impressão dos percentuais de representação de cada estado
console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`);
