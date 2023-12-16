let biblio = [];

  document.addEventListener('DOMContentLoaded',f_main);
  function f_main()
  {
    document.getElementById('botoLl').addEventListener('click',f_llibreN);
    document.getElementById('botoLl2').addEventListener('click',f_llegirP);
  }
  function f_llibreN()
  {
    let t= document.getElementById('titolLL').value;
    let a= document.getElementById('autorLL').value;
    let p= document.getElementById('pagsLL').value;
    try {
        let l = new LLibre(t,a,p);
        console.info(l);
        biblio.push(l);
        f_rescriureSelect();
        document.getElementById('titolLL').value ='';
        document.getElementById('autorLL').value ='';
        document.getElementById('pagsLL').value ='';
    } catch (e)
    {
        document.getElementById('sol3').innerHTML += '<br>'+e;
    }
  }

  function f_llegirP()
  {
    let pos = document.getElementById('llibresAllegir').selectedIndex;
    if (pos!=-1)
    {
        let llibre = document.getElementById('llibresAllegir').options[pos].value;
        // TODO: substituir for per forEach
        //for (let i=0;i<biblio.length;i++)

        let pos = biblio.findIndex(function (e){
          return e.titol == llibre;
        });
        
        let n = Number(document.getElementById('paginesLlegides').value);
        biblio[pos].llegir(n);
        if (biblio[pos].pLlegides == biblio[pos].pTotals)
        {
            console.info("Trobat el llibre que cal esborrar");
            setTimeout(function ()
            {
                console.info(pos);
                biblio.splice(pos,1);  
                // slice crea una copia de l'array o bé un fragment
                console.info(biblio);
                f_rescriureSelect();
            },3000);
        }
        f_rescriureSelect();
        document.getElementById('paginesLlegides').value = '';
    } else {
      document.getElementById('sol3').innerHTML += '<br>Eps! Selecciona un llibre a llegir';
    }
  }

  function f_rescriureSelect()
  {
    let txt = '';
    for (let ll of biblio)
    {
        txt += '<option value='+ll.titol+'>'+ll+'</option>';
    }
    document.getElementById('llibresAllegir').innerHTML = txt;
    document.getElementById('llibresAllegir').selectedIndex = -1;
  }