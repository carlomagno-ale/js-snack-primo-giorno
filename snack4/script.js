/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

const oddNumbers = [];

for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt('inserisci un numero'));

    if (userNumber % 2 === 1) {
        oddNumbers.push(userNumber);
    } 
}

console.log(oddNumbers)
