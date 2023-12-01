document.addEventListener('DOMContentLoaded', f_main);



function f_main() 
{
    console.log(document.forms);
    
    for(let i = 0; i < document.forms.length; i++){
        //canviar estil:
        let elements = document.forms[i].elements;
        for(let j = 1; j < elements.length; j++){
            elements[j].setAttribute("style", "background-color: lightgrey;");
        }  
    }
    //afegir els events:
    document.getElementById("submit").addEventListener("click", f_validarForm1);
    document.getElementById("submit2").addEventListener("click", f_validarForm2);

    document.getElementById("reset").addEventListener("click", ()=>{
        document.getElementById("a1").textContent = "";
    });
    document.getElementById("reset2").addEventListener("click", ()=>{
        document.getElementById("a2").textContent = "";
    });
    document.getElementById("a1").style.color ="red";
    document.getElementById("a2").style.color ="red";
}


function f_validarForm1(evt)
{
    evt.preventDefault();

    let nom = document.getElementById("nom").value;
    let cognoms = document.getElementById("cognoms").value;
    let dni = document.getElementById("dni").value;
    let zodiac = document.getElementById("zodiac").value;

    //let er1 = new RegExp("[A-Z][a-z]*");
    let er1 = new RegExp("[A-Z][a-z]+(\\s[A-Z][a-z]+)?");
    let er2 = new RegExp("[A-Z][a-z]+\\s[A-Z][a-z]+");
    let er3 = /\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}/;

    let valides = false;
    if( er1.test(nom) && er2.test(cognoms) && er3.test(dni) && (zodiac == "Aries" || zodiac == "Tauro" || zodiac == "Géminis" || zodiac == "Cáncer" || zodiac == "Leo" || zodiac == "Virgo" || zodiac == "Libra" || zodiac == "Escorpio" || zodiac == "Sagitario" || zodiac == "Capricornio" || zodiac == "Acuario" || zodiac == "Piscis")){
        document.getElementById("a1").textContent ="Dades valides";
        valides = true;
    }else{
        document.getElementById("a1").textContent ="Dades no valides";
    }

    if(valides){

        let objJson = {
            'nom' : nom,
            'cognoms' : cognoms,
            'dni' : dni,
            'zodiac' : zodiac,
        }
        
        let json = {'dades' : []};
        
        let jsontemp = localStorage.getItem("dades");
        
        if(jsontemp != null){
            json = JSON.parse(jsontemp);
            json.dades.push(objJson);
            localStorage.setItem("dades", JSON.stringify(json));
        }else{
            json.dades.push(objJson);
            localStorage.setItem("dades", JSON.stringify(json));
        }
        console.log(json);
    }

}


function f_validarForm2(evt)
{
    evt.preventDefault();

    let nom_usuari = document.getElementById("nom_usuari").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    let er1 = new RegExp("([A-Z]|[a-z]|[0-9])+");

    let valides = false;

    if( er1.test(nom_usuari) && password1.length > 6 &&  password1 == password2){
        document.getElementById("a2").textContent ="Dades valides";
        valides = true;
    }else{
        if(password1.length <= 6){
            document.getElementById("a2").textContent ="Dades no valides, la contrasenya ha de tenir més de 6 caracters";
        }else{  
            document.getElementById("a2").textContent ="Dades no valides";
        }
        
    }

    if(valides){

        let objJson = {
            'nom_usuari' : nom_usuari,
            'password' : password1,
        }
        
        let json = {'dades' : []};
        
        let jsontemp = localStorage.getItem("dades2");
        
        if(jsontemp != null){
            json = JSON.parse(jsontemp);
            json.dades.push(objJson);
            localStorage.setItem("dades2", JSON.stringify(json));
        }else{
            json.dades.push(objJson);
            localStorage.setItem("dades2", JSON.stringify(json));
        }
        console.log(json);
    }

}
