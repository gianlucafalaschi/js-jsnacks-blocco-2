// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// chiedo 2 volte una parola all'utente
/* let firstUserWord = prompt('Dammi una prima parola');
let secondtUserWord = prompt('Dammi una seconda parola');

// trovo la lunghezza della parola
// se la parola piu' corta e' la prima la stampo
if(firstUserWord.length < secondtUserWord.length) {
    console.log("La parola piu' corta è ", firstUserWord);
    // poi stampo la seconda
    console.log("La parola piu' lunga è ", secondtUserWord);    
}
//altrimenti stampo prima seconda parola 
        // e poi stampo la prima
 else{
    console.log("La parola piu' corta è ", secondtUserWord);    
    console.log("La parola piu' lunga è ", firstUserWord);
} */


////////////////////////////////////////////////
//CORREZIONE

// Chiedo 2 parole all'utente 
// Se la prima parola e' piu' lunga, stampo prima la seconda e poi öa prima
// Se la seconda parola e' piu' lunga stampo prima la prima e poi la seconda
// Altrimenti stampo "lunghezza parole uguali"

const firstWord = prompt('Dammi la prima parola');
const secondWord = prompt('Dammi la seconda parola');
console.log(firstWord);
console.log(secondWord);

if(firstWord.length > secondWord.length) {
    console.log(secondWord + ' ' + firstWord); 
} else if(secondWord.length > firstWord.length) {
    console.log(firstWord + ' ' + secondWord);
} else {
    console.log('Le parole hanno la stessa lunghezza');
}