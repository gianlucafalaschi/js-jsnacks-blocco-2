//- Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// CREO UN ARRAY DI NUMERI
let numbersArray = [20, 33, 44, 55, 100, 105, 99, 120, 1000, 3, 7];
// creo una costante per il numero di elementi dell'array
const arraySize = numbersArray.length;
let redText = document.querySelector('#red-text');
let greenText = document.querySelector('#green-text');
// scorro tutto gli elementi dell'array 
for(let i = 0; i < arraySize; i++) {
    let thisNumber = numbersArray[i];
    //controllo se i numeri sono dispari
        //se sono dispari li metto nel div rosso
    if(thisNumber % 2 !== 0) {
        //console.log('il numero è dispari e va nel div rosso', thisNumber);
        
        redText.innerHTML += (thisNumber + ' ');
    } 
      //altrimenti li metto nel div verde
      else {
        //console.log('il numero è pari e va nel div verde', thisNumber);
        
        greenText.innerHTML += (thisNumber + ' ');
      }  
        
}


 