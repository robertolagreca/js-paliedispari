//Primo esercizio

//Palidroma:
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma 
//e poi usate quella funzione appena dichiarata


//Dichiaro la variabile. Uso prompt per richiedere la parola all'utente. Stampo su JS.
let parola;
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
        return true;

    } else {

        console.log("La parola non è palindroma");
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


//Inizializzo variabili globali. Risultato lo imposto a false.
let sceltaUtente, numeroEstratto, risultato;
risultato = false;


//chiedo all'utente di scegliere tra pari e dispari. chiedo di inserire un numero tra 1 e 5.
//Stampo in console.
sceltaUtente = prompt("Scegli pari o dispari.");
numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("L'utente ha scelto " + sceltaUtente + " ed ha inserito il numero " + numeroUtente);


//richiamo la funzione numeroRan per calcolare un numero random da 1 a 5.
//dopo di che passo alla funzione controlloSomma due argomenti: 
//il numero scelto dall'utente e quello estratto.
numeroEstratto = parseInt(numeroRan());
risultato = controlloSomma(numeroUtente , numeroEstratto);


//if con tutti i casi in cui vengono confrontati:
//se la variabile risultato è true o false (se true significa che la somma è pari, false è dispari)

if(risultato && sceltaUtente == "pari"){

    console.log("Hai vinto. Il numero calcolato è pari!");

} else if (risultato && sceltaUtente !="pari"){

    console.log("Hai perso. Il numero calcolato è dispari!");

} else if (!risultato && sceltaUtente == "dispari"){
    console.log("Hai vinto. Il numero calcolato è dispari!");

} else {
    console.log("Hai perso. Il numero calcolato è pari");
}



function numeroRan(){
    let numero = 0;

    numero = Math.floor(Math.random() * 6);
    console.log("Il numero estratto è " + numero);

    return numero;
}



function controlloSomma(numUtente, numEstratto){
    let somma, controllo;
    somma = 0;
    controllo = "";

    somma = numUtente + numEstratto;
    console.log("La somma dei due numeri è " + somma);

    if(somma % 2 == 0){
        controllo = "pari";
        return true;
    } else {
        controllo = "dispari";
        return false;
    }
}