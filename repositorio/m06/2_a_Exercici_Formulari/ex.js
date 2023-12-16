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

    let zodiacs = ["Aries",
    "Tauro",
    "Géminis",
    "Cáncer",
    "Leo",
    "Virgo",
    "Libra",
    "Escorpio",
    "Sagitario",
    "Capricornio",
    "Acuario",
    "Piscis"];
    let zodiacValid = false;
    let i = 0;
    while(i < zodiacs.length && zodiacs[i] != zodiac){
        i++;
    }
    
    if(i < zodiacs.length){
        zodiacValid = true;
    }
    
    let valides = false;
    //if( er1.test(nom) && er2.test(cognoms) && er3.test(dni) && (zodiac == "Aries" || zodiac == "Tauro" || zodiac == "Géminis" || zodiac == "Cáncer" || zodiac == "Leo" || zodiac == "Virgo" || zodiac == "Libra" || zodiac == "Escorpio" || zodiac == "Sagitario" || zodiac == "Capricornio" || zodiac == "Acuario" || zodiac == "Piscis")){
    if(er1.test(nom) && er2.test(cognoms) && er3.test(dni) && zodiacValid){
        document.getElementById("a1").textContent ="Dades valides";
        document.getElementById("a1").style.color ="green";
        valides = true;
    }else{
        if(!er3.test(dni)){
            document.getElementById("a1").textContent ="Dni no valid";
        }
        if(!er2.test(cognoms)){
            document.getElementById("a1").textContent ="Congoms no valids";
        }
        if(!er2.test(nom)){
            document.getElementById("a1").textContent ="Nom no valid";
        }
        document.getElementById("a1").style.color ="red";
    }

    if(valides){

        let objJson = {
            'nom' : nom,
            'cognoms' : cognoms,
            'dni' : dni,
            'zodiac' : zodiac,
        }
        
        f_json(objJson, "dades");
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
        document.getElementById("a2").style.color ="green";
        valides = true;
    }else{
        if(er1.test(nom_usuari)){
            document.getElementById("a2").textContent ="Les contrasenyes han de ser iguals";
        }
        if(password1.length <= 6){
            document.getElementById("a2").textContent ="Dades no valides, la contrasenya ha de tenir més de 6 caracters";
        }
        if(er1.test(nom_usuari)){
            document.getElementById("a2").textContent ="Nom d'usuari no valid";
        }
        document.getElementById("a2").style.color ="red";
    }

    if(valides){

        let objJson = {
            'nom_usuari' : nom_usuari,
            'password' : password1,
        }

        f_json(objJson, "dades2");
    }

}

function f_json(objJson, dades)
{
    let json = {'dades' : []};
        
    let jsontemp = localStorage.getItem(dades);
        
    if(jsontemp != null){
        json = JSON.parse(jsontemp);
        json.dades.push(objJson);
        localStorage.setItem(dades, JSON.stringify(json));

        console.log("objeto json para mostrar en pantalla:");
        console.log(json.dades[json.dades.length -2]);

        mostrarJson(json.dades[json.dades.length -2]);
        let temp = setTimeout(()=>{
            document.getElementById("mostrar").innerHTML = "";
        }, 10000);

    
    }else{
        json.dades.push(objJson);
        localStorage.setItem(dades, JSON.stringify(json));
        
        console.log("no hi habia dades abans de aquesta");
    }
    console.log(json);
}

function mostrarJson(json)
{
    let mostrar = document.getElementById("mostrar");

    let text = "";
    let keys = Object.keys(json);
    keys.forEach(k => {
        text += k+": "+json[k]+" <br>";
    });
    mostrar.innerHTML = text;
}
