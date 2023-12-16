document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar5)


function f_main()
{
    document.getElementById('boto5a').addEventListener('click',f_obrir5);
    document.getElementById('boto5b').addEventListener('click',f_tancar5);
}

//ex2
let f5 = null;
let temp2 = null;
let temp3 = null;
let i1;
function f_obrir5(){
    clearInterval(temp2);
    if(f5 == null || f5.closed){
        f5 = window.open("finestra.html","","width=100,height=100");
        i1 = 0;
        temp2 = setInterval(f_moure, 2000);
        temp3 = setInterval(f_contar5,1000);
    }else{
        f5.focus();
    }
    
}
function f_tancar5(){
    if(!f5.closed && f5 != null){
        document.getElementById('segons').textContent = i1;
        f5.close();
        clearInterval(temp2);
        clearInterval(temp3);
    }
}

function f_moure(){
    if(!f5.closed && f5 != null){
        f5.moveBy(50,0);
    }   
}

function f_contar5(){
    if(!f5.closed && f5 != null){
        i1++;
    }  
}

