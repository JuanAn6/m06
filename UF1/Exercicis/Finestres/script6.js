document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar6)


function f_main()
{
    document.getElementById('boto6').addEventListener('click',f_obrir6);

}

//ex2
let f6 = null;
let temp4 = null;

let x = 0;
function f_obrir6(){
    clearInterval(temp4);
    if(f6 == null || f6.closed){
        f6 = window.open("finestra.html","","width=100,height=100");
        x = 0;
        temp4 = setInterval(f_moure2, 50);
     
    }else{
        alert("la finestra ja esta oberta");
    }
}
function f_tancar6(){
    if(!f6.closed && f6 != null){
        f6.close();
        clearInterval(temp4);
    }
}

function f_moure2(){
    if(!f6.closed && f6 != null){
        if(x == 0){
            f6.moveBy(50,0);
            x++;
        }else if(x == 1){
            f6.moveBy(0,50);
            x++;
        }else if(x == 2){
            f6.moveBy(-50,0);
            x++;
        }else if(x == 3){
            f6.moveBy(0,-50);
            x = 0;
        }
    }   
}


