document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar1)


function f_main()
{
    document.getElementById('boto1').addEventListener('click',f_obrirFinestra);
}


//ex 1
let f = [null,null,null];

function f_obrirFinestra()
{
    
    for(let i = 0 ; i < f.length ; i++){
        if (f[i] == null || f[i].closed)
        {   
            let top = ((10*i)*2)+100;
            let left = (i*10)*2;
            f[i] = window.open("./finestra.html","","width=1000,height=500,top="+top+",left="+left);
            //setTimeout(f_boto_tancar, 100);
        } else{
            f[i].focus();
        }
    }
    
}
        
function f_tancar1(){
    for(let i = 0 ; i < f.length ; i++){
        if (f[i] != null || !f[i].closed)
        { 
            f[i].close();
        }
    }
}

function f_boto_tancar(){
    for(let i = 0; i <f.length; i++){
        f[i].document.getElementById("tancar").addEventListener('click',fucntion =>{
            f[i].close();
        });
    }
}
    