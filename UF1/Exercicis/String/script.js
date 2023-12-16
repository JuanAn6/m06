document.addEventListener('DOMContentLoaded', f_main);

function f_main(){
    //EXERCICI 1;

    //transforma un array a string separant cada pocisio amb una coma;
    let unArray = ['H','O','L','A'];

    let unString = unArray.toString();
    console.log(unString);
    console.log(unArray);

    //revers del split transformant un array en un string;
    let array2 = ['J','U','A','N'];
    let string2  = array2.join('');
    console.log(string2);
    console.log(array2);

    //separa un string per cada posicio transforman-lo en un array;
    let string3 = "ANTONIO";
    let array3 = string3.split('');
    console.log(string3);
    console.log(array3);



    console.log(unArray[0]); // es la fomra de accedir a una pocició del array;
    console.log(unString.charAt(1)); //metode especific de la classe string per accedir a una pocisió;
    console.log(unString[2]); //no es queixa javascript pero com exiteix un metode especific per accedir es millor utilitzar-lo;



    unArray[0] = 'Z';
    //unString.charAt(0) = 'V'; D'aquesta forma no es pot assignar valor només serveix per mostrar;
    unString[1] = 'K'; // no deixa modificar pero no dona cap error;

    console.log(unArray[0]);
    console.log(unString.charAt(1));
    console.log(unString[1]);


    //EXERCICI 2:

    //document.getElementById('majus').addEventListener('click', f_majus);
    //document.getElementById('minus').addEventListener('click', f_minus);

    document.getElementById('majus').addEventListener('click', f_m);
    document.getElementById('minus').addEventListener('click', f_m);

    document.getElementById('tractarFrase').addEventListener('click', f_tractarFrase);
    document.getElementById('vocalitzar').addEventListener('click', f_vocals);
    document.getElementById('substitucio').addEventListener('click', f_replace);

}

function f_majus(){
    let text = document.getElementById('original').value;
    text = text.toUpperCase();
    document.getElementById('original').value = text;
}
function f_minus(){
    let text = document.getElementById('original').value;
    text = text.toLowerCase();
    document.getElementById('original').value = text;
}

function f_m(event){
    let b = event.target.id;
    let text = document.getElementById('original').value;
    if(b == 'minus'){
        text = text.toLowerCase();
    }else{
        text = text.toUpperCase();
    }
    document.getElementById('original').value = text;
}


function f_tractarFrase(){
    let frase = document.getElementById('cadena').value;
    let avisos = document.getElementById('avisos');
    let cadenaAmbIs = document.getElementById('cadenaAmbIs');
    let quantitat = document.getElementById('quantitatAs');

    if(!(frase.length >= 15)){
        avisos.innerHTML = "La cadena ha de ser de minim 15 caracters";
        cadenaAmbIs.innerHTML = "";
        quantitat.innerHTML = "";
    }else{
        avisos.innerHTML = "";
        
        let qt = 0;
        for(let i = 0; i < frase.length; i++){
            if(frase.charAt(i) == 'a' || frase.charAt(i) == "A"){
                qt++;
            }
        }
        quantitat.innerHTML = "Quantitat de cops que surt: "+qt;
        
        frase = frase.replaceAll("a","i");
        frase = frase.replaceAll("A","I");
        cadenaAmbIs.innerHTML = frase;
        
    }
}


function f_vocals(){
    let frase = document.getElementById('frase').value;
    let qc = 0;
    let qta = 0;
    let qte = 0;
    let qti = 0;
    let qto = 0;
    let qtu = 0;
        for(let i = 0; i < frase.length; i++){
            switch(frase.charAt(i)){
                case 'a': case 'A':
                    qta++;
                    break;
                case 'e' : case 'E':
                    qte++;
                    break;
                case 'i' : case 'I':
                    qti++;
                    break;
                case 'o' : case 'O':
                    qto++;
                    break;
                case 'u' : case 'U':
                    qtu++;
                    break;
            }
            if(frase[i] != ' '){
                qc++;
            }
        }

    let arr = frase.split('');
    arr = arr.reverse();
    let reversa = arr.join('');

    document.getElementById('qc').innerHTML = ""+qc;
    
    document.getElementById('qAs').innerHTML = " "+qta;
    document.getElementById('qEs').innerHTML = " "+qte;
    document.getElementById('qIs').innerHTML = " "+qti;
    document.getElementById('qOs').innerHTML = " "+qto;
    document.getElementById('qUs').innerHTML = " "+qtu;

    document.getElementById('Finvertida').innerHTML = reversa;
}


function f_replace(){
    let caracter1 = document.getElementById('oldChar').value;
    let caracter2 = document.getElementById('newChar').value;
    let frase = document.getElementById('sentence').value;

    if(frase.length == 0){
        alert('Introdueix frase');
    }else{
        if(caracter2.length == 0 || caracter1.length == 0){
            alert('Introdueix caracter per substituir');
        }else{
            document.getElementById('novaFrase').innerHTML = frase.replaceAll(caracter1, caracter2);
    
        }
    }
    
}