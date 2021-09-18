// const arr = [20,25,30,40,50];

// const total = arr.reduce((acc,item,index) => {
//   console.log(`\nLoop ${index}\n`);
//   console.log(`acc => ${acc}`);
//   console.log(`item => ${item}`);
//   console.log(`\n Fim Loop ${index}\n`);
//   return acc + item;
// }, 10)

// console.log("TOTAL =>",total);

// const arr = ["oi","oiiiiiiiiii2",'thcauuuuu',"eiii"];

// const total = arr.reduce((maiorPalavra,palavraAtual,index) => {
//   console.log(`\nLoop ${index}\n`);
//   console.log(`maiorPalavra => ${maiorPalavra}`);
//   console.log(`palavraAtual => ${palavraAtual}`);
//   if(palavraAtual.length > maiorPalavra.length){
//     console.log(`\n Fim Loop ${index}\n`);
//     return palavraAtual 
//   }
//   console.log(`\n Fim Loop ${index}\n`);
//   return maiorPalavra;
  
// },"");

// console.log("TOTAL =>",total);

// const pokemons = [
//   {
//     name:"pikachu",
//     type:"electric"
//   },
//   {
//     name:"squirtle",
//     type:"water"
//   },
//   {
//     name:"magikarp",
//     type:"water"
//   }
// ];


// const typesForPokemons = pokemons.reduce((pokemonsPorTipo,pokemonAtual) => {
//   pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];
//   pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual);
//   return pokemonsPorTipo
// }, {});

// console.log(typesForPokemons.water);


const teste = [
  {
    name:"Felipe",
    age:18
  },
  {
    name:"Rafael",
    age:19
  },
  {
    name:"Marina",
    age:17
  }
]

const porIdade = teste.reduce((porIdade,idadeAtual) => {
  if(idadeAtual.age >= 18){
    porIdade["maiores"] = porIdade["maiores"] || [];
    porIdade["maiores"].push(idadeAtual);
  }else{
    porIdade["menores"] = porIdade["menores"] || [];
    porIdade["menores"].push(idadeAtual);
  } 
  return porIdade;
},{})

console.log(porIdade);

// const porIdade = {
  // maiores: [],
  // menores:[]
// }