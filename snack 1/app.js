// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando template literal

const bikes = 
[
    {
        nome: 'bici 1',
        peso: 12
    }, 
    {
        nome: 'bici 2' ,
        peso: 16
    }, 
    {
        nome: 'bici 3' ,
        peso: 8
    },
    {
        nome: 'bici 4',
        peso: 9
    },
]

let lightBike = bikes[0]

for( let i = 0; i < bikes.length; i++) {
    let currentBike = bikes[i]
    if (currentBike.peso < lightBike.peso) {
        lightBike = currentBike
    }
}

console.log('la bici più leggera è: '+lightBike.nome,'e pesa: '+lightBike.peso+'kg')