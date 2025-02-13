/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const userChoiceFirst = prompt("Scrivi una parola [es. gatto, pizza, ...]");
const userChoiceSecond = prompt("Scrivi un'altra parola, diversa dalla prima [es. cane, hamburger ...]");

const isGreater = userChoiceFirst.length > userChoiceSecond.length;
const isSimilar = userChoiceFirst === userChoiceSecond;

if (isGreater) {
    console.log(userChoiceFirst);
    console.log(userChoiceSecond);
} else if (isSimilar) {
    console.log("le due parole sono uguali");
} else {
    console.log(userChoiceSecond);
    console.log(userChoiceFirst);
}