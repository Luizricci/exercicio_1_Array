let texto = "macro";

let textoMinusculo = texto.toLowerCase();
console.log("texto: " + textoMinusculo);

let separar = textoMinusculo.split("");

let vogais = separar.filter((separar) => ["a", "e", "i", "o", "u"].includes(separar));
let ordem = vogais.sort()

console.log("vogais encontradas: " + vogais)
console.log("numero total de vogais: " + vogais.length++)