// String a ser invertida
const string = "Hello, world!";

// Variável para armazenar a string invertida
let invertedString = "";

// Percorre a string de trás para frente e adiciona cada caractere à variável invertedString
for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
}

// Imprime a string invertida
console.log(invertedString);
