// VARIABLES GLOBALS
let paraules = ['☠aleix','JordiM','JordiV','1Guillem','Dani','PauN','Adrián','Ivan','Laura','Germán','pauC','Toni','&carlos','Erik','Nil','David','Aitor'];
let persones = [
   {nom: 'Alejandra', cognom: 'Quiroga', edat: 25},
   {nom: 'Jason', cognom: 'Ajax', edat: 33},
   {nom: 'Mauricio', cognom: 'Katze', edat: -4},
   {nom: 'José Luis', cognom: 'Rodríguez', edat: 0},
   {nom: 'Arya', cognom: 'Stark', edat: 9} 
];
// ESCOLTADORS D'ESDEVENIMENTS
document.addEventListener('DOMContentLoaded',funcioPrincipal);
      function funcioPrincipal()
      {
            res.innerHTML += ('Paraules en estat incial: '+paraules)+'<br>'
            paraules.sort();
            res.innerHTML += ('Paraules ordenades: '+paraules)+'<br>';
            paraules.sort(desordenar);
            res.innerHTML += ('Paraules desordenades: '+paraules)+'<br><br>';
            res.innerHTML += ('Persones originals: '+JSON.stringify(persones))+'<br><br><br>';
            ordenarAsc(persones,'edat','N');
            res.innerHTML += ('Persones ordenades x Edat: '+JSON.stringify(persones))+'<br><br>';
            ordenarDesc(persones,'cognom');
            res.innerHTML += ('Persones ordenades Desc x Cognom: '+JSON.stringify(persones))+'<br><br>';
            ordenarDesc(persones,'edat');
            res.innerHTML += ('Persones ordenades Desc x edat: '+JSON.stringify(persones)+'<br><br>');
            ordenarAsc(persones,'nom','S');
            res.innerHTML += ('Persones ordenades x nom: '+JSON.stringify(persones));
      }

      function desordenar()
      {
          return Math.random() - 0.5;
      }
      
      /**
      PÀRAMETRES:
        p_array_json : array d'objectes JSON que es vol ordenar
        p_key: camp dels objectes JSON pel qual es vol ordenar
        t: tipus del camp pel qual es vol ordenar l'array 'S: String' i 'N: Number'
      **/
      function ordenarAsc(p_array_json, p_key,t) {
          if (t== undefined)
          {
              console.info("Eps! Falta un paràmetre");
              return;
          } else if (t!='S' && t!='N')
          {
              console.info("Eps! 3r paràmetre no vàlid!");
              return;
          }
         console.info('ordenació de',p_key,' per camp de tipus: ',t);
         p_array_json.sort(function (a, b) {
             if (t=='S')
             {
                return (a[p_key] == b[p_key]?0:(a[p_key] > b[p_key]?1:-1)); 
             }
             else if (t=='N')
             {
                 return a[p_key] - b[p_key];
             }
         });
      }
      /**
      PÀRAMETRES:
        p_array_json : array d'objectes JSON que es vol ordenar
        p_key: camp dels objectes JSON pel qual es vol ordenar
      **/
      function ordenarDesc(p_array_json, p_key) {
         p_array_json.sort(function (a, b) {
             if (typeof(a[p_key])=='string')
               return (a[p_key] == b[p_key]?0:(a[p_key] < b[p_key]?1:-1));
             else if (typeof(a[p_key])=='number')
                 return b[p_key] - a[p_key];
         });
      }