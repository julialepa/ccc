function calcolaSomma (a,b){
    const risultato = a+b
    const risultatoDiv = document.getElementById("risultato") 
    risultatoDiv.innerHTML = risultato
}

function calcolaSommaDaInput () {
    const aValue = document.getElementById ("numeroA").value; //sto prendendo l'input per id e l'attributo valore (accedo all'elemento dell'oggetto)
    const bValue = document.getElementById ("numeroB").value;
    const a = parseFloat (aValue) //parseFloat e prova a  trasformare tutto in valore numerico, aValu è la  costante che contiene l'id NumeroA
    const b = parseFloat (bValue)


    if (!isNaN(a) && !isNaN(b)){ 
    const risultato = a + b;
    const risultatoDiv = document.getElementById("risultato");
    risultatoDiv.innerHTML = risultato 
    } else {
        manageError ()
    }
}

function manageError () {
    const aEl = document.getElementById ("numeroA");
    const bEl = document.getElementById ("numeroB");
    const risultatoEl = document.getElementById("risultato")
    
    aEl.value =""
    bEl.value =""
    risultatoEl.innerHTML = '';
    alert('Attenzione! Solo numerini :3')
}



let count = 0;
document.write("INIZIA LOOP");

while (count < 10) {
    document.write("current count" + count + "<br />");
    count ++;
}

document.write("loop stoppa!")