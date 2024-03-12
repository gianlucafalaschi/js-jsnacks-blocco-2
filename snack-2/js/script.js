// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
/* 
// chiedo 2 volte una parola all'utente
for(let i = 0; i < 2; i++){
    let userWord = prompt('Dammi una parola');
    // trovo la lunghezza della parola
    let userWordLength = userWord.length;
    console.log(userWordLength);
    //controllo quale parola e' piu' corta 
    if(userWordLength > userWordLength) {
        console.log('prima parola', )
    }
    // se la parola piu' corta e' la prima la stampo
        // poi stampo la seconda
    //altrimenti stampo prima seconda parola 
        // e poi stampo la prima
}


 */

// chiedo 2 volte una parola all'utente
let firstUserWord = prompt('Dammi una prima parola');
let secondtUserWord = prompt('Dammi una seconda parola');

// trovo la lunghezza della parola
// se la parola piu' corta e' la prima la stampo
if(firstUserWord.length > secondtUserWord.length) {
    console.log(firstUserWord);
    // poi stampo la seconda
    console.log(secondtUserWord);    
}
//altrimenti stampo prima seconda parola 
        // e poi stampo la prima
 else{
    console.log(secondtUserWord);    
    console.log(firstUserWord);
}