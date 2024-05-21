// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadreCalcio = 
[
 {
    nome:'team1',
    puntiFatti:0,
    falliSubiti:0
 }, 
 {
    nome:'team2',
    puntiFatti:0,
    falliSubiti:0
 }, 
 {
    nome:'team3',
    puntiFatti:0,
    falliSubiti:0
 }
]

const genPuntiEFalli = squadreCalcio.map((element, index, arr) => {
    return {
        nome: element.nome,
        puntiFatti: Math.floor((Math.random() * 100) + 1),
        falliSubiti: Math.floor((Math.random() * 100) + 1),
    };
});

console.log(genPuntiEFalli)

const risultatiSquadre = genPuntiEFalli.map(element => {
    return {
        nome: element.nome,
        falliSubiti: element.falliSubiti,
    };
});


console.log(risultatiSquadre)


