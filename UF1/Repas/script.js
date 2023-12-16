document.addEventListener("DOMContentLoaded", f_main);

function f_main(){
    //exercici 1
    /*
    const DOL_EURO = 0.9308;
    let ok = true;
    do{
        let dolars = prompt("Dolars:");
        if(isNaN(dolars) || dolars <= 0 || dolars == null){
            alert("Numero no valid");
            ok = false;
        }else{
            let euros = dolars * DOL_EURO;
            alert("Euros: " + euros.toFixed(2));
            console.log(euros);
            ok = true;
        }
    } while(!ok);
*/
    
    //exercici 2;
    document.getElementById('boto1').addEventListener('click', f_exercici);
    //Exercici 3;
    let boto2 = document.getElementById('boto2');
    boto2.addEventListener('click', f_graus);
    //Exercici 4;
    document.getElementById('boto3').addEventListener('click', f_concatenar);
    //Exercici 5;
    document.getElementById('boto4').addEventListener('click', f_login);
    //Exercici 6;
    document.getElementById('Repe').addEventListener('click', f_repeticio);
    //Exercici 7
    document.getElementById('fibonacci').addEventListener('click', f_fibonacci);
    //Exercici 8
    document.getElementById('factorial').addEventListener('click', f_factorial);
    //Exercici 9
    document.getElementById('increment').addEventListener('click', f_increment);
    //Exercici 10
    document.getElementById('divisió').addEventListener('click', f_divisio);
    //Exercici 11
    document.getElementById('boto5').addEventListener('click', f_validacio);
    //Exercici 12
    document.getElementById('accio').addEventListener('click', f_restaReal);
    //Exercici 13
    document.getElementById('boto6').addEventListener('click', f_conversio);

}
function f_conversio(){
    let num = Number(document.getElementById('quantitat').value);
    let final = document.getElementById('valor1');

    if(isNaN(num)|| num == 0){
        final.textContent = "Numero no valid";
    }else{
        let select1 = document.getElementById('Uorigen');
        let select2 = document.getElementById('Udesti');
        
        if(select1.selectedIndex == select2.selectedIndex ){
            final.textContent = "El resultat es el mateix";
        }else{
            switch(select1.value){
                case 'k':
                    num = num*1000000;
                    break;
                case 'me':
                    num = num*1000;
                    break;
                case 'mi':
                    break;
                default:
                    final.textContent = "Opcio no valida";
                    break;
            }
            
            switch(select2.value){
                case 'Kilòmetres':
                    num = num/1000000;
                    final.textContent = "Resultat: "+num+" km";
                    break;
                case 'Metres':
                    num = num/1000;
                    final.textContent = "Resultat: "+num+" m";
                    break;
                case 'Mil·limetres':
                    final.textContent = "Resultat: "+num+" mm";
                    break;
                default:
                    final.textContent = "Opcio 2 no valida";
                    break;
            }
        }
        
    }
}


function f_restaReal(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let divResultat = document.getElementById('resultat');
    let resultat = 0;
    if(num1 == "" || num2 == ""){
        alert("Entrada no valida");
    }else{
        num1 = Number(num1);
        num2 = Number(num2);

        if(isNaN(num1) || isNaN(num2)){
            divResultat.textContent ="Entrada no valida";
        }else{
            resultat = num1 - num2;
            divResultat.textContent ="Resultat: "+resultat.toFixed(2);
        }
    }

}

function f_validacio(){
    let dni = document.getElementById('dni');
    let lletra = document.getElementById('lletra');

    //const expNum = new RegExp(/^[0-9]{8}$/);
    //console.log(expNum.test(dni.value));
    //const expLletra = new RegExp(/^[A-Z]{1}$/);
    //console.log(expLletra.test(lletra.value));
    const lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    //if(!expNum.test(dni.value)){
    
    dni = Number(dni);
    lletra = lletra.toUpperCase();
    if(idNaN(dni) || dni < 0 || dni > 99999999){
        alert("Numero de dni erroni");
    }else{
        /*
        let i = 0;
        while(i < lletres.length && lletres[i] != lletra.value){
            i++;
            console.log(i, lletres[i], lletra.value);
        }
        */
        //if(i == lletres.length){

        if(!lletres.includes(lletra)){
            alert("La lletra no es una de les valides");
        }else{
            dni = Number(dni.value);
            let residu = dni%23;
            console.log(lletra.value, residu, lletres[residu]);

            if(lletres[residu] != lletra.value){
                alert("Lletra no valida per al tipus de numero");
            }else{
                alert("DNI VALID");
            }
        }
    }
}

function f_divisio(){
    let a, b, c, x;
    /*
    a = Number(prompt("introdueix el valor de a: "));
    b = Number(prompt("introdueix el valor de b: "));
    c = Number(prompt("introdueix el valor de c: "));
    */

    let cadena = prompt("Introdueix tres numeros separats per un espai");
    let caracters = cadena.split(' ',3); //limita a recollir 3 numeros;

    for(let i = 0; i < caracters.length; i++){
        caracters[i] = Number(caracters[i]);
    }
    console.log(caracters);


    if(isNaN(a) || iNaN(b) || isNaN(c) || caracters.length != 3){
        alert("entrada no valida");
    }else{
        a = caracters[0];
        b = caracters[1];
        c = caracters[2];
        if(a != 0){
            x = c-b/a;
            if( x = 0){
                alert("indeterminat");
            }else{
                alert("El valor de x es: "+x.toFixed(2));
            }
        }else{
            alert("Infinit");
        }
    }    
}


function f_increment(){
    let num1;
    do{
        num1 = Number(prompt("Introdueix un numero: "));
    }while(isNaN(num1));
    
    let num2;
    do{
         num2 = Number(prompt("Introdueix un numero igual o més gran que l'anterior: "));
    }while(num1 > num2 || isNaN(num2));
    let txt;
    if(num1 == Number.parseInt(num1)){
         txt = ""+num1;
        for(i = num1+1; i <= num2; i++){
            txt += ", "+i;
        }
    }else{
        txt = ""+num1.toFixed(2);
        for(i = num1+1; i <= num2; i++){
            txt += ", "+i.toFixed(2);
        }
    }

    //Condicional ternari; txt += (esEnter? num1+",":num1.tofixed(2)+", ");
    
    alert("El resultat es: "+txt);
    
}


function f_factorial(){
    let n = Number(prompt("introduiex un numero positiu: ",25));
    let res = 1;
    if(n <= 0 || isNaN(n) || Number.parseInt(n) != n || n <= 22){
        alert("Entrada "+n+"no valida");
        return;
    }
    
    i = 1;
    while (i <= n){
        res *= i;
        i++;
    }

    alert("El factorial de "+n+"! es = "+f_recursiva(n));

    function f_recursiva(x){
        if(x == 1){
            return 1;
        }else{
            return x*f_recursiva(x-1);
        }
    }
}




function f_fibonacci(){
    let num = Number(document.getElementById('qTermes').value);
    let sortida = document.getElementById('termesFibonacci');

    t0 = 0;
    t1 = 1;

    if(num == 0){
        sortida.innerHTML = "Seqüencia buida";
    }else if(num == 1){
        sortida.innerHTML = "Seqüencia 0";
    }else if(num > 0){
        let txt = "La seqüencia de valors és "+t0+", "+t1;
        i = 2
        while(i <= num){
            let aux = t0+t1;
            t0 = t1;
            t1 = aux;
            txt += ", "+t1;
            i++;
        }
        sortida.innerHTML = txt;
    }else{
        sortida.innerHTML = "Entrada erronea";
    }
}

function f_repeticio(){
    let frase  = prompt("Introdueix una frase");
    let vegades;
    do{
        vegades = prompt("Introdueix el numero de vegades a repetir");
    }while(vegades < 0 && vegades != '');

    for(let i = 0; i < vegades; i++){
        alert(frase);
    }
}

function f_login(){
    const PROVA = ['juan','juan'];

    let user = document.getElementById('user');
    let pass = document.getElementById('pass');

    if(user.value == PROVA[0] && pass.value == PROVA[1]){
        document.getElementById('validacio').innerHTML = "Login Completat";
    }else{
        document.getElementById('validacio').innerHTML = "Login Incorrecte";
    }

    user.value = "";
    pass.value = "";

}

function f_concatenar(){
    let nom = document.getElementById('nom').value;
    let cognom1 = document.getElementById('cognom1').value;
    let cognom2 = document.getElementById('cognom2').value;

    document.getElementById('a').innerHTML = nom+" "+cognom1+" "+cognom2;
    document.getElementById('b').innerHTML = cognom2+" "+cognom1+" "+nom;
    document.getElementById('c').innerHTML = `El meu nom es: ${nom}`;
    document.getElementById('d').textContent = "Els meus cognoms son: "+cognom1+" "+cognom2;
}

function f_graus(){
    
    let entrada = Number(document.getElementById('valor').value);
    console.log(entrada);

    if(!isNaN(entrada) && document.getElementById('valor').value.trim() != ''){
        let kelvin, faren, rankine;

        kelvin = entrada + 273.15;
        faren = 1.8*entrada+32;
        rankine = faren + 459,67;


        alert("Els "+entrada+"ºC son: "+kelvin+" ºK, "+faren+" ºF, "+ rankine+" R");
        
    }else{
        alert("El valor introduit no es correcte");
    }

    
}

function f_exercici(){
    //Eecollida de dades
    let inputs = [];
    for (let i = 1; i < 11; i++){
        inputs[i-1] = Number(document.getElementById('n'+i).value); 
                    // pasar els valors directament a numero per que no craixi
    }
    console.info(inputs);


    //Validació
    let correcte = true;
    let taula = inputs[0];
    let j = 1;
    while(j < inputs.length ){
        if(taula *(j+1) != inputs[j]){
            break;
        }
        j++;
    }

    let missatge = document.getElementById('missatge'); 
    console.info(missatge);

    if(j != inputs.length){
        missatge.value = "Incorrecte";
    }else{
        missatge.value = "Correcte";
    }


}





