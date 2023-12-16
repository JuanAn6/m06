document.addEventListener('DOMContentLoaded',funcioPrincipal);

function funcioPrincipal()
{
    document.getElementById('botoCot').addEventListener("click",f_cotxe);
}

function f_cotxe()
{
    let m=document.getElementById('matC').value;
    let c=document.getElementById('colorC').value;
    let marca=document.getElementById('marcaC').value;
    let model=document.getElementById('modelC').value;
    let d=document.getElementById('dataC').value;

    try {
        c = new Cotxe(m,c,marca,model,d);
        document.getElementById('dadesCotxe').innerHTML = c+'<br>'+c.veureParcial();
    } catch (e)
    {
        console.info(e);
    }

    
}