/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

const userChoiceFirst = Number (prompt("Scrivi un numero [es. 4, 10, 40 ...]"));
const userChoiceSecond = Number (prompt("Scrivi un altro numero diverso dal primo [es. 5, 11, 41 ...]"));

const greaterNumber = userChoiceFirst > userChoiceSecond ;

if (greaterNumber) {
   console.log(userChoiceFirst)
} else {
    console.log(userChoiceSecond)
}