  let trobat = true;
  let conegut;
  let valor = new Date();
  let numero = 13;
  let cadena = "Avui és dilluns";

      console.info("Valors variables abans d'invocar funció:: ");
      console.info(trobat,' ',conegut,' ',valor.toString(),' ',numero,' ',cadena);

      function f_pasXvalor(trobat,conegut,valor,numero,cadena)
      {
        trobat = false;
        conegut = 'Hola';
        numero = 200;
        valor.setFullYear(1982);
        cadena = "Si avui és dilluns, demà serà dimarts)";
        console.info("Valors variables dins de la funció:: ");
        console.info(trobat,' ',conegut,' ',valor.toString(),' ',numero,' ',cadena);
      }

      f_pasXvalor(trobat,conegut,valor,numero,cadena);

      console.info("Valors variables fora de la funció, després de la seva invocació:: ");
      console.info(trobat,' ',conegut,' ',valor.toString(),' ',numero,' ',cadena);

      console.info("CONCLUSIÓ: només l'objecte Date s'ha passat x referència");

      
      let taula = new Array(1,2,3,4,5);
            // línea anterior equivalent a: let taula = [1,2,3,4,5];

        function f_modificarArray(a)
        {
            for (i in a)
            {
                a[i]=a[i]*2;
            }
        }
        console.info('Contingut inicial d\'un array: ',taula);
        
		f_modificarArray(taula);
        
		console.info('Contingut de l\'array després de la funció: ',taula.toString());
        
        // si s'intenta modificar l'objecte directament: no es modifica fora de la funció!
        
		function f_modificarArray2(a)
        {
            let x = new Array('a','b','c','d','e');
           a = x;
           // a = new Array(x);
           // a.pop(); // treu l'últim element 
           //a.shift(); // treu el 1r element
            /*
            for (i in a)
            {
                a[i]=x[i];
            }*/
        }
        
		f_modificarArray2(taula);
        
		console.info('Contingut de l\'array després de la funció que intenta modificar-lo senser: ',taula);
        /*
        Els objectes es passen x referència, no es pot modificar directament, donat que és una referència
        , una adreça de memòria
        si que es pot modificar, si s'accedeix a les seves dades membres, via mètodes, posicions o camps
        */
        function f_recursiva(x)
        {
            if (x == 1) return x;
            else
                return x*f_recursiva(x-1);
        }
		console.info("Exemple d'us de la recursivitat");
        console.info(f_recursiva(1));
        console.info(f_recursiva(2));
        console.info(f_recursiva(3));
        console.info(f_recursiva(4));
        console.info(f_recursiva(5));
        console.info(f_recursiva(6));
        