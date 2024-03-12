// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
//se è dispari stampa il numero successivo

// chiedo un numero all'utente
let userNumber = parseInt(prompt('Dammi un numero'));
//controllo se il numero e' pari
    if(userNumber % 2 === 0) {
        // se il numero e' pari stampo il numero
        console.log(userNumber);
    }
    //altrimenti stampo il numero successivo
    else{
        userNumber +=  + 1;
        console.log(userNumber);
    }
    
    
