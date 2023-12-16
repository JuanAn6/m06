document.addEventListener("DOMContentLoaded",f_main);
let temp = null;
function f_main(){
    document.getElementById("endevinalla").textContent = "Com s'els hi diu als que no son gitanus?";

    document.getElementById("boto").addEventListener("click", f_try);

    temp = setTimeout(mostrar,10000);
    
    
}
function f_tancar(){
    clearTimeout(temp);
}
function f_try(){
    let correcte = "payos";

    let avis = document.getElementById("avis");
    let text = document.getElementById("solucio");

    if(correcte == text.value){
        avis.textContent="Correcte";
        clearTimeout(temp);
    }else{
        avis.textContent="Incorrecte";
        temp = setTimeout(mostrar,10000);
    }
}

function mostrar(){
    let correcte = "payos";

    let avis = document.getElementById("avis");
    let text = document.getElementById("solucio");

    if(correcte == text.value){
        avis.textContent="Correcte";
        clearInterval(temp);
    }else{
        avis.textContent="Segueixes pensant?";
    }
}
