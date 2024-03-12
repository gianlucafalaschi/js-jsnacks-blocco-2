// - Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

//creo variabile sum con valore 0
let sum = 0;
// chiedi all'utente un numero di 4 cifre
const userNumber = prompt('Dammi un numero di 4 cifre'); 

// vedere ogni cifra del numero separatamente
for(let i = 0; i < userNumber.length; i++) {
    // creare variabile per userNumber[i] e renderla integer
    let thisNumber = parseInt(userNumber[i]);
  //console.log(thisNumber);
// aggiungere ogni numero alla somma precedente
    sum += thisNumber;
    
}
// stampare la somma
console.log(sum); 