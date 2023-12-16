document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar7)


function f_main()
{
    f_obrir7();
    document.getElementById('boto7').addEventListener("click",f_tancar7);
}

//ex2
let f7 = null;
let temp5 = null;
let fase = 0;
function f_obrir7(){
    clearInterval(temp5);
    if(f7 == null || f7.closed){
        f7 = window.open("finestra.html","","width=300,height=200");
        temp5 = setInterval(f_moure3, 100);
        fase = 1;
    }else{
        alert("la finestra ja esta oberta");
    }
}
function f_tancar7(){
    if(!f7.closed && f7 != null){
        f7.close();
        clearInterval(temp5);
    }
}

function f_moure3(){
    if(!f7.closed && f7 != null){
        if(fase == 1){
            f7.resizeBy(200,100);
        }else{
            f7.resizeBy(-200,-100);
        }
        
        //console.log("f7: "+f7.outerWidth+", "+f7.outerHeight+" Screen: "+screen.width+", "+screen.height);

        if(f7.outerWidth >= screen.width || f7.outerHeight >= screen.height){
            fase = 0;
        }else if(f7.outerWidth <= 200 || f7.outerHeight <= 100){
            fase = 1;
        }
    }else{
        clearInterval(temp5);
    }
}


