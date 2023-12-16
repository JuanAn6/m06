document.addEventListener("DOMContentLoaded",f_main);
let temp = null;
function f_main(){
    
    mostrar();
    temp = setInterval(mostrar,1000);
    setTimeout(amagar, 5000);
    
}

let i = 5;

function mostrar(){
    document.getElementById("segons").textContent = "Segons: "+i;
    i--;
}


function amagar(){
    let img = document.getElementsByTagName('img')[0];
    img.style.opacity = 0;
    clearInterval(temp);
}