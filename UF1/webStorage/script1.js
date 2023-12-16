document.addEventListener("DOMContentLoaded", f_main);
function f_main(){
    document.getElementById('enviar').addEventListener('click', f_enviar);
    document.getElementById('recuperar').addEventListener('click', f_recuperar);
    document.getElementById('esborrar').addEventListener('click', f_esborrar);
    
    let valor_n = localStorage.getItem('nom1');
    let valor_a = localStorage.getItem('adreca');
    if(valor_n != null && valor_a != null){
        document.getElementById('nom1').value = localStorage.getItem('nom1');
        document.getElementById('adreca').value = localStorage.getItem('adreca');
    }
}
let temp = null;
function f_enviar(ev){
    
    ev.preventDefault();

    let n = document.getElementById('nom1').value;
    let a = document.getElementById('adreca').value;

    if (n.trim().length == 0 || a.trim().length == 0){
        return;
    }
    let valor_n = localStorage.getItem('nom1');
    let valor_a = localStorage.getItem('adreca');
    if(valor_n == null && valor_a == null){
        localStorage.setItem('nom1', n);
        localStorage.setItem('adreca', a);
    }else{
        let resposta = confirm("Ja existeixen els valors nom1: "+valor_n+", adreca: "+valor_a);
        if(resposta){
            localStorage.setItem('nom1', n);
            localStorage.setItem('adreca', a);
        }else{
            document.getElementById('nom1').value = valor_n;
            document.getElementById('adreca').value = valor_a;
        }
    }
    temp = setTimeout(f_natejar,2000);
    
}
function f_natejar(){
    document.getElementById('nom1').value = "";
    document.getElementById('adreca').value ="";
    
}

function f_recuperar(){

}

function f_esborrar(){
    let valor_n = localStorage.getItem('nom1');
    let valor_a = localStorage.getItem('adreca');
    if(valor_n != null && valor_a != null){
        document.getElementById('nom1').value = localStorage.removeItem('nom1');
        document.getElementById('adreca').value = localStorage.removeItem('adreca');
    }
}