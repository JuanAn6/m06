document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar4)


function f_main()
{
    document.getElementById('boto4').addEventListener('click',f_obrir4);
}

//ex2
let f4 = null;
let temp1 = null;
let i;
function f_obrir4(){
    if(f4 == null || f4.closed){
        f4 = window.open("https://www.marca.com","",);
        i = 0;
        temp1 = setInterval(f_contar, 1000);
        console.log(f4);
    }else{
        alert("la finestra ja esta oberta");
    }
    
}
function f_tancar4(){
    if(!f3.closed && f3 != null){
        f3.close();
        
    }else{
        alert("la finestra no esta oberta");
    }
}

function f_contar(){
    if(f4.closed || f4 == null){
        clearInterval(temp1);
        document.getElementById('t').textContent = i;
    }else{
        i++;
    }
    
}