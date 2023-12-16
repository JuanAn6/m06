document.addEventListener("DOMContentLoaded", f_main);
function f_main(){
    document.getElementById('escollir').addEventListener('click', f_color);
    document.getElementById('ex4').addEventListener('click', f_ex4);

    document.body.style.backgroundColor = localStorage.getItem('color');


    if(localStorage.getItem('visita')){
        document.getElementById('data').textContent = localStorage.getItem('visita');
    }
    localStorage.setItem('visita',new Date());
}

function f_color(){
    const colors = ['salmon', 'aqua','bisque'];
    let color = document.getElementById('color').selectedIndex;    
    localStorage.setItem('color', colors[color]);
}

function f_ex4(){
    let v = document.getElementById('key').value;
    let valor = localStorage.getItem(v);
    if(valor != null){
        alert("Existeix el valor "+ valor);
    }else{
        alert("No existeix");
    }
}