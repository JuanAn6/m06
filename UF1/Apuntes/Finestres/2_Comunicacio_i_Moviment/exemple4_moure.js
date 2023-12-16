document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_abansTancar)
let f = null;
let p = null;
let i;
let tmp;

function f_main()
{
        document.getElementById('botoO').addEventListener('click',f_obrir);
        document.getElementById('botoT').addEventListener('click',f_tancar);
        document.getElementById('botoM').addEventListener('click',f_moure);
        //document.getElementById('info').innerHTML = "Mides de la pantalla "+
        //screen.width+" x "+screen.height;

    
}


function f_moure()
{
    if (f!=null && !f.closed)
    {
        //f.moveTo(600,400);
        // es resitua al punt indicat
        f.moveBy(0,-100);
        // es mou respecte on està ubicada la finestra 100 pixels aball
        // valor negatiu va cap amunt
        //f.moveBy(100,0);
        f.focus();
    }
}

function f_obrir()
{
    if (f == null || f.closed)
    {
        f = window.open("./subFinestre.html","","width=1000,height=500,top=500,left=0");
    } else{
        f.focus();
    }
}

function f_tancar()
{
    f_abansTancar();
}
function f_abansTancar()
{
    if (f!=null && !f.closed)
    {
        f.close();
    }
 
}