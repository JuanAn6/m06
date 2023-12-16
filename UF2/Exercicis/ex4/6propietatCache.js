document.addEventListener('DOMContentLoaded',funcioPrincipal);
      function funcioPrincipal()
      {
        document.getElementById('a').innerHTML = 'Crida primer: '+esPrimer(5);
        setTimeout(_ => {
                        document.getElementById('b').innerHTML = 'Crida primer: '+esPrimer(5);
                        }   
                    ,5000);
        setTimeout(_ => document.getElementById('c').innerHTML = 'Crida primer: '+esPrimer(17),10000);
        setTimeout(_ => document.getElementById('c').innerHTML += '<br>Crida primer: '+esPrimer(12),15000);
        setTimeout(_ => 
            {   
                document.getElementById('c').innerHTML += '<br>Crida primer: '+esPrimer(12);
            },20000);
      }

function esPrimer(valor){
    let primers = localStorage.getItem('primers');
    
    if(!localStorage.getItem('primers')) {
        primers = {}; // si no hi ha cache de resultats, la creem
    }else{
        primers = JSON.parse(primers); //convertir string a array asociatiu o JSON
    }
     
    if(primers[valor] != null) { // resultat ja calculat
        return "<b>" + primers[valor] + "</b>";
    }
     
    // cal calcular-lo perquè no tenim el resultat
     
    let primer = (valor != 1) // 1 no és primer
     
    // busquem un divisor superior a 2 i inferior a valor
     
    for(let i = 2; i <= valor/2; i++){
        if(valor % i == 0){
            primer = false;
            break;
        }
    }
    if (primer)
        primers[valor] = valor;
    
    else
        primers[valor] = 'El '+valor+' no és primer';

    localStorage.setItem('primers',JSON.stringify(primers));

    return valor;
}
