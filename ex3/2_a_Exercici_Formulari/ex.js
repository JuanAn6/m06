document.addEventListener('DOMContentLoaded', f_main);

function f_main() 
{
    console.log(document.forms);
    
    for(let i = 0; i < document.forms.length; i++){
        //canviar estil:
        let elements = document.forms[i].elements;
        console.log(elements);

        for(let j = 1; j < elements.length; j++){
            console.log(elements[j]);
            elements[j].setAttribute("style", "background-color: aqua;");
        }

        
    }

    //afegir els events:
    document.getElementById("submit").addEventListener("click", f_validarForm1);
    document.getElementById("submit2").addEventListener("click", f_validarForm2);
    

}


function f_validarForm1(evt)
{
    evt.preventDefault();

    let nom = document.getElementById("nom").value;
    let cognoms = document.getElementById("cognoms").value;
    let dni = document.getElementById("dni").value;

    //let er1 = new RegExp("[A-Z][a-z]*");
    let er1 = new RegExp("[A-Z][a-z]*(\\s[A-Z][a-z]*)?");
    let er2 = new RegExp("[A-Z][a-z]*\\s[A-Z][a-z]*");
    let er3 = /\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}/;

    console.log(er1.test(nom)+", "+er2.test(cognoms)+", "+er3.test(dni))

    if( er1.test(nom) && er2.test(cognoms) && er3.test(dni)){
        document.getElementById("a1").textContent ="Dades valides";
    }else{
        document.getElementById("a1").textContent ="Dades no valides";
    }

}


function f_validarForm2()
{

}
