document.addEventListener('DOMContentLoaded',f_main);
function f_main()
{
    document.getElementsByTagName('input')[0].addEventListener('click',function ()
    {
        let valor = f_getRandomIntInclusive(0,100);
        let nom = "numero"+valor;
        if (f_getCookie(nom).length==0)
        {
            let dies = 5;
            f_setCookie(nom,f_getRandomIntInclusive(0,100),dies);
        }
    });
    document.querySelectorAll('input[type="button"]')[1].addEventListener('click',function ()
    {
        location.reload();
    });

    
    document.querySelector('p > button').addEventListener('click', f_esborar);

    document.querySelectorAll('p > input ')[document.querySelectorAll('p > input ').length - 1].addEventListener('click', f_mostrar);
    
}

function f_getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function f_esborar()
{
    let cookies = f_extreuCookies();
    let keys = Object.keys(cookies);
    keys.forEach( (v)=>{
        f_eliminaCookie(v);
    });
}

function f_mostrar()
{
    if(document.querySelector('ol') != null)
        document.querySelector('ol').remove();

    let cookies = f_extreuCookies();
    let keys = Object.keys(cookies);
    let llista = document.createElement('ol');
    let li_aux = document.createElement('li');
    keys.forEach( (v)=>{
        let li = li_aux.cloneNode();
        li.textContent = v+': '+cookies[v];
        llista.append(li);
    });
    document.body.lastElementChild.previousElementSibling.before(llista);
}