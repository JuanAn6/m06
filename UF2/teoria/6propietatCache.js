document.addEventListener('DOMContentLoaded',funcioPrincipal);
      function funcioPrincipal()
      {
        document.getElementById('a').innerHTML = 'Crida primer: '+esPrimer(5);
        console.log(esPrimer.cache);
        setTimeout(_ => {
                        document.getElementById('b').innerHTML = 'Crida primer: '+esPrimer(5);
                        }   
                    ,5000);
        setTimeout(_ => document.getElementById('c').innerHTML = 'Crida primer: '+esPrimer(17),10000);
        setTimeout(_ => document.getElementById('c').innerHTML += '<br>Crida primer: '+esPrimer(12),15000);
        setTimeout(_ => 
            {   
                document.getElementById('c').innerHTML += '<br>Crida primer: '+esPrimer(12)
                console.log(esPrimer.cache);
            },20000);
      }

function esPrimer(valor){
    if(!esPrimer.cache) {
        esPrimer.cache = {}; // si no hi ha cache de resultats, la creem
    }
     
    if(esPrimer.cache[valor] != null) { // resultat ja calculat
        return "<b>" + esPrimer.cache[valor] + "</b>";
    }
     
    // cal calcular-lo perquè no tenim el resultat
     
    let primer = (valor != 1) // 1 no és primer
     
    // busquem un divisor superior a 2 i inferior a valor
     
    for(let i = 2; i < valor; i++){
          if(valor % i == 0){
              primer = false;
              break;
          }
    }
    if (primer)
      esPrimer.cache[valor] = valor;
    else
      esPrimer.cache[valor] = 'El '+valor+' no és primer';
    return valor;
}
