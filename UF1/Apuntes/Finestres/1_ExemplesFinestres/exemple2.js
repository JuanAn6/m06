document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar)
let f = null;
let p = null;
let i;

function f_main()
{
        document.getElementById('botoF').addEventListener('click',f_obrirFinestra);
        document.getElementById('botoP').addEventListener('click',f_obrirPestanya);
        document.getElementById('botoT').addEventListener('click',f_tancar);
        document.getElementById('info').innerHTML = "Mides de la pantalla "+
        screen.width+" x "+screen.height;    
}

function f_obrirFinestra()
{
    if (f == null || f.closed)
    {
        f = window.open("./subFinestre.html","","width=1000,height=500,top=100,left=0");
    } else{
        f.focus();
    }
}

function f_obrirPestanya()
{
    if (p == null || p.closed)
    {
        p = window.open("./subPestanya.html","");
    } else{
        p.focus();
    }
}

function f_tancar()
{
    if (f!=null && !f.closed)
    {
        f.close();
    }
    if (p!=null && !p.closed)
    {
        p.close();
    }
}