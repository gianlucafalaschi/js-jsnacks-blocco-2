// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// chiedo 2 volte una parola all'utente
let firstUserWord = prompt('Dammi una prima parola');
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
}