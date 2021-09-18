console.log("\nCONCAT => Concatenar dois arrays\n");

const frutas = ['banana',"maçã","uva"];
const comidas = ["arroz","carne"];

const comidasFrutas = comidas.concat(frutas);

console.log(comidasFrutas);

console.log("\nJOIN => Transforma todo os elementos em uma string,e recebe um parâmetro como separador\n");

const arr = ['branco','amarelo','azul',20];

const arrJoin = arr.join("-");
console.log(arrJoin);

console.log("\nMAP => Percorre o array,executa uma função de callback para cada elemento, e retorna um novo array \n");

const exArr = [20,50,100];

const arrMap = exArr.map(numero => numero * 1.1);

console.log(arrMap);

console.log(`\nFilter => Percorre o array,executa uma função de callback para cada elemento,
verificando as condições implementadas e retorna um novo array \n`);

const arrFilter = exArr.filter(num => num > 30);

console.log(arrFilter);