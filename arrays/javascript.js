const arr = ["banana","uva","maçã"];

console.log(`Array inicial\n${arr}`);

console.log("\nFOR EACH - Percorrendo cada item do array e executando uma função de callback\n");
arr.forEach(item => console.log(item)); // Percorre cada elemento do array e executa uma função


console.log("\nPUSH - Adicionando um elemento na última posição do array\n")
arr.push("chocolate"); // Adiciona um elemento na última posição do array

console.log(arr);

console.log("\nPOP - Removendo o último elemento do array\n")
arr.pop(); // Remove o último elemento do array

console.log(arr);

console.log("\nSHIFT - Removendo primeiro elemento do array\n")

arr.shift(); 
console.log(arr);


console.log("\nUNSHIFT - Adicionando um elemento no primeiro índice do array\n");

arr.unshift("Chocolate");

console.log(arr);


console.log("\nINDEX OF - Procura um índice de um elemento passado como parâmetro\n");

const indexOfArray = arr.indexOf("uva");

console.log(indexOfArray);

console.log("\nSPLICE - Corta um array recebendo uma posição inicial e a outra final\n");

console.log(arr);

const splicedArray = arr.splice(indexOfArray,2);
console.log(splicedArray);


