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
  