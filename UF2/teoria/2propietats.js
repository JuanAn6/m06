      (function funcioPrincipal()
      {
          principal();
          setTimeout(function () {
              document.getElementById('c').innerHTML = listItems("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
          },10000);
          console.info(prova.length);
          let array = ["hola",4,["a","b","c"],new Date()];
          prova(...array);
          prova(array);
      })();

      function principal()
      {
        let espai ="<br>Per defecte la funció 'listItems' espera "+listItems.length+" paràmetres";
        espai += "<br>Per defecte la funció 'principal' espera "+principal.length+" paràmetres";
        document.getElementById('a').innerHTML =  espai;
        document.getElementById('b').innerHTML = listItems(2015,2016);
        avui = new Date();
        let mes = ['gener','febrer','març','abril','maig','juny','juliol','agost','setembre','octubre','novembre','desembre'];
        document.getElementById('c').innerHTML = listItems("avui",avui.getDate(),mes[avui.getMonth()]);
      }
      
      function listItems() {
          let text = "";
          let items = arguments.length;
          text +="<br>Jo sóc la funció: listItems";
          text +=" i m'han passat: "+items+" paràmetres en aquesta crida";
          text +=". Jo habitualment espero "+listItems.length+" Paràmetres.";
          text +="<ul>";
          for (let i=0;i<items;i++) {
            text +="<li>"+ arguments[i]+'</li>';
          }
          text +="</ul>";
          return text;
       }
       
       function prova(a,b,c)
       {
           console.log(prova.length);
           console.log('1r paràmetre: ',a,' = ',arguments[0]);
           console.log('2n paràmetre: ',b,' = ',arguments[1]);
           console.log('3r paràmetre: ',c,' = ',arguments[2]);
           console.log('4t paràmetre: ',arguments[3]);
       }