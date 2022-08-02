const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log("Bulbasaur:",pokemon1);
// A)Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const copiaPokemon= {
    ...pokemon1,
    nome:"Squirtle",
    tipo:"Água"
};
console.log("Squirtle:", copiaPokemon);

//B)No objeto original, adicione mais uma propriedade, chamada `ataques`. 
pokemon1.ataques=[];
const ataque1={
    nome:"Investida",
    dano: 40,
    tipo:"Normal",
    precisao: 100
};
pokemon1.ataques.push(ataque1);

//C) tive dificuldade.... Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
copiaPokemon.ataques=[...pokemon1.ataques];
console.log(copiaPokemon);

//D)para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
const ataque2={
    nome:"Folha Navalha",
    dano: 45,
    tipo:"Grama",
    precisao: 100
};
pokemon1.ataques.push(ataque2);
console.log("add novo ataque:",pokemon1)

//E)para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
const ataque3={
    nome:"Jato de Água",
    dano: 40,
    tipo:"Água",
    precisao: 100
};
copiaPokemon.ataques.push(ataque3);

//F)Imprima os dois objetos no console.
console.log("Bulbasaur:\n",pokemon1,"\nSquirtle:\n",copiaPokemon);
// console.log("Squirtle:",copiaPokemon);