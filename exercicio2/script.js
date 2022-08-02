const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
// A)
console.log("nome do **primeiro** ator/atriz:",filme.elenco[0]);

//B)
console.log("nome do **último** ator/atriz:",filme.elenco[3]);

//C)
console.log("array com **todas** as transmissões de hoje:",filme.transmissoesHoje);

//D)
console.log("o **horário** de transmissão do filme no `Canal Brasil`:",filme.transmissoesHoje[1].horario);
