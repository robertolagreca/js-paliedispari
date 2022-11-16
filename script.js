//Primo esercizio

//Palidroma:
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma 
//e poi usate quella funzione appena dichiarata


//Dichiaro la variabile. Uso prompt per richiedere la parola all'utente. Stampo su JS.
let parola;
console.log("Gioco parola palindroma");
parola = prompt("Inserisci una parola. Verrà controllata se è palindroma");
console.log("La parola inserita è " + parola);

//Richiamo funzione palindromo passando come argomento la variabile parola.
palindromoCheck(parola);


//Funzione palindromo
function palindromoCheck(p) {


    //Inizializzo array vuoto.
    let parolaArray = [];


    //Inserisco nell'array l'argomento, utilizzando split. Permette di splittare ogni carattere ed 
    //inserirlo all'interno di una posizione dell'array
    //Vengono messi con l'ordine dato.
    parolaArray = p.split('');
    console.log("La parola è stata trasformata in array" + parolaArray);


    //Uso reverse sull'array, in modo che mi inverte la posizione di tutti i caratteri
    parolaArray = parolaArray.reverse();
    console.log("La parola all'interno dell' array è stata invertita " + parolaArray);


    //controllo se l'array invertito sia uguale all'argomento passato.
    //se si finisce la funzione e restituisce esito positivo
    //se no finisce la funzione e restituisce esito negativo
    if (parolaArray == p){

        console.log("La parola è palindroma");
        console.log("----------------------");
        return true;

    } else {

        console.log("La parola non è palindroma");
        console.log("--------------------------");
    }

    return false;   
  } 
  

//Secondo esercizio

//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//VERSIONE 1 controllo pari e dispari con IF. 
//VERSIONE 2 controllo pari e dispari con IF all'interno di funzione controllo somma.

//Inizializzo variabili globali.
let sceltaUtente, numeroEstratto;
//let risultato = false; per Versione 1


//chiedo all'utente di scegliere tra pari e dispari. chiedo di inserire un numero tra 1 e 5.
//Stampo in console.
sceltaUtente = prompt("Scegli pari o dispari.");
numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("L'utente ha scelto " + sceltaUtente + " ed ha inserito il numero " + numeroUtente);


//richiamo la funzione numeroRan per calcolare un numero random da 1 a 5.
//dopo di che passo alla funzione controlloSomma due argomenti: 
//il numero scelto dall'utente e quello estratto.
numeroEstratto = parseInt(numeroRan());


//risultato = controlloSomma(numeroUtente , numeroEstratto, sceltaUtente); per Versione 1
controlloSomma(numeroUtente , numeroEstratto, sceltaUtente);

//funzione che restituisce un numero random da 1 a 5
function numeroRan(){
    let numero = 0;

    numero = Math.floor(Math.random() * 5) + 1 ;
    console.log("Il numero estratto è " + numero);

    return numero;
}


//funzione che somma i due numeri. Controlla se la somma è pari e dispari
//confronta il risultato con la scelta dell'utente. (Ver-2)
function controlloSomma(numUtente, numEstratto, sceUtente){
    let somma, controllo;
    somma = 0;
    controllo = "";

    somma = numUtente + numEstratto;
    console.log("La somma dei due numeri è " + somma);

    if(somma % 2 == 0){
        controllo = "pari";
            if(controllo == sceUtente){
                console.log("Hai vinto! La somma è pari " + somma + ". Tu hai scelto un numero " + sceUtente);
            } else 
            {
                console.log("Hai perso! La somma è pari "  + somma + ". Tu hai scelto un numero " + sceUtente);
            }
        //return true; per Versione 1
    } else {

        controllo = "dispari";
            if(controllo == sceUtente){
                console.log("Hai vinto! La somma è dispari " + somma + ". Tu hai scelto un numero " + sceUtente);
            } else 
            {
                console.log("Hai perso! La somma è dispari " + somma + ". Tu hai scelto un numero " + sceUtente);
            }
        //return false; per Versione 1
    }
}

//Ver.1. Versione 2 all'interno della funzione controlloSomma.
//if con tutti i casi in cui vengono confrontati:
//la variabile risultato è true o false (se true significa che la somma è pari, false è dispari)
//e contemporaneamente sceltaUtente è pari o dispari. 

//Se risultato = true e sceltaUtente = "pari" --> l'utente ha indovinato
//Se risultato = true e sceltaUtente = "dispari" --> l'utente non ha indovinato
//Se risultato = false e sceltaUtente = "dispari" --> l'utente ha indovinato
//Se risultato = true e sceltaUtente = "pari" --> l'utente non ha indovinato
/* if(risultato && sceltaUtente == "pari"){

    console.log("Hai vinto. Il numero calcolato è pari!");

} else if (risultato && sceltaUtente !="pari"){

    console.log("Hai perso. Il numero calcolato è dispari!");

} else if (!risultato && sceltaUtente == "dispari"){
    console.log("Hai vinto. Il numero calcolato è dispari!");

} else {
    console.log("Hai perso. Il numero calcolato è pari");
} */