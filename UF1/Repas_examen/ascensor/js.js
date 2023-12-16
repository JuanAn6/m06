document.addEventListener('DOMContentLoaded', main)




function main(){

    let pisActual = localStorage.getItem('pis');
    if(pisActual == null){
        pisActual = getRandomInt(3)+1;
        localStorage.setItem('pis', pisActual);
    }

    document.getElementById("pis").value = pisActual
    document.getElementById("cridar").addEventListener('click', f_venir);

}

let f = null;
function f_venir(){
    if(f == null || f.closed){
        f = window.open('ascensor.html','');
    }else{
        f.focus
    }

    if(localStorage.getItem('pis') != '0'){
        tmp = setInterval(f_canviPis, 2000);
    }
}

function f_canviPis(){
    let pisActual = localStorage.getItem('pis');
    pisActual = Number(pisActual)-1;
    if(pisActual == 0){
        clearInterval(tmp);
        
    }
    document.getElementById('pis').value = pisActual;
    localStorage.setItem('pis', pisActual);
}

function f_anar(){

}
function f_activar_bt(){
    f.document.getElementById("0").disabled = false;
    f.document.getElementById("1").disabled = false;
    f.document.getElementById("2").disabled = false;
    f.document.getElementById("3").disabled = false;
    console.log("hola");
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}