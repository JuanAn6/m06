
// ---- Date -------------------------------------------
let ara = new Date();

console.info(ara);
console.info(ara.getDay());
//0-6 >> 0:dg,1:dll,2:dm,3:dx,4:dj,5:dv,6:db
console.info(ara.getDate());


console.info('Mes actual ', ara.getMonth()+1);
ara.setMonth(12-1); // desembre
console.info('Mes canviat: ',ara.getMonth()+1,' ',ara);
console.info('Data en mil·lisegons: ',ara.getTime());
console.info('Any actual: ',ara.getFullYear());

let fiCurs = new Date('2024-05-31T00:33:00.345');  // dateString
console.info('Data en mil·lisegons: ',fiCurs.getTime(),' ',fiCurs);
console.info('Data , només els minuts: ',fiCurs.getMinutes());
console.info('Data , només les mil·lessimes: ',fiCurs.getMilliseconds());

console.info(new Date('2024-6-1T00:33:00'));
console.info(new Date('2024-06-01T7:33:00'));
console.info(new Date('2024-06-01T00:3:00'));
console.info(new Date('2024-06-01T00:33:5'));




/*
// ---- Math -------------------------------------------
//console.clear();
console.info(Math.PI.toFixed(4));

// generar un valor sencer entre min i max inclosos?
let x1 = Math.random();
console.info(x1);
// Llançament d’un dau (de 6 cares)
let dau = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

let dau2 = aleatori(1,6);

console.info(dau,' ',dau2);

function aleatori(min,max)
  {
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// ---- Number -------------------------------------------
//console.clear();
let num = 76;
  console.log(num.toString(16) + " en hexadecimal");
  console.log(num.toString(8) + " en octal");
  console.log(num.toString(2) + " en binari");

//Infinity és el valor per representar que s’ha sobrepassat la precisió dels números (que és fins a 15 dígits en la part entera):
console.log (5/0); //retorna Infinity 

//Not a Number (NaN) és una paraula reservada per indicar que el valor no representa un número. 
//Es pot utilitzar la funció global isNaN() per saber si l’argument és un número: 

  console.log(3*"a"); //NaN. 3+"a" retorna "3a"
  console.log(Number.isNaN(3*4)); //false
  console.log(isNaN(3*"a")); //true

// ---- String -------------------------------------------
//console.clear();
let texto = "hola";
console.info("dins de 'texto' hi ha : ",texto);
texto[0] = texto.charAt(0).toUpperCase(); // 1ra majúscula
console.info("1r intent de modificar la inicial, perquè sigui en majúscula:",texto);
console.info("Aixó que la instrucció: <texto.charAt(0).toUpperCase()>");
console.info(" retorna: ",texto.charAt(0).toUpperCase());
*/

    /**
        OBJECTIU: 
        Modificar UNA(1) posició de "str", la cadena amb contingut
        PARÀMETRES:
            str: la cadena a modificar,
            index: la posició que es vol modificar,
            chr: el nou caràcter que es vol situar en la posició index
        RETORN:
            La nova cadena que ha de substituir "str"
    */
    /*
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    //El mètode substr retorna un fragment de la str que l’invoca.
    // substr(0,valor) => retorna de la posició 0, fins una quantitat de caràcters com indiqui el valor
    // substr(valor)   => retorna de la posició valor fins el final de la cadena
    return str.substr(0,index) + chr + str.substr(index+1);
	//return str.substr(0,index) + chr + str.substr(index+chr.length);
}

texto = setCharAt(texto,0,texto[0].toUpperCase());
console.info("2n intent de modificar la inicial, perquè sigui en majúscula:",texto);

let str = "MP06. Desenvolupament Web en Entorn Client. UF 1: Sintaxi del llenguatge. Objectes predefinits del llenguatge";
str = setCharAt(str,36,"Server");
console.info("-------------- search(caràcter/s) -----------------------");
let posicioEspai = str.search(' ');
console.info("str = ",str);
// la e de "del"
console.info("str.search(' ') = ",posicioEspai);

/*
	Funció: getLastItem
	OBJECTIU: seleccionar la última part d'una cadena que està just després del símbol /
	Ús dels mètodes lastIndexOf i substring pels objectes String
*/
//const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
/*
function getLastItem(thePath)
{
	return thePath.substring(thePath.lastIndexOf('/')+1);
}
console.info("-------------------------------------------");
console.info(" ús funció getLastItem(ruta)");
console.log(getLastItem('/Users'));
console.log(getLastItem('/Users/Maria'));
console.log(getLastItem('/Users/Maria/test.jpg'));
console.log(getLastItem('https://google.es/test'));
console.info("---------------- replace(cadena_cercar, cadena_substituir) ---------------------------");
let cadena = "JavaScript JavaScript JavaScript JavaScript JavaScript";

    console.log(cadena.replace('Java', 'Type')); //'TypeScript'
    console.log(cadena.replace(/Java/,'Type')); //'TypeScript'
//Usant expressions regulars:
	console.log('JavaScript'.replace(/a/, 'AA')); 
	console.log('JavaScript JavaX'.replace(/Java/g, 'AA'));						

console.info(cadena.split('',10));
console.info(cadena.split(' '));
console.info(cadena.split('Scr',3));

// -------- ARRAYS ---------------------------------------

let a1 = [];
let a2 = [12,"hola",4,-3, new Date(), -0.32];
console.info(a1,' ',a2,);

let daus = new Array(10);
for (let i=0;i<10;i++)
{
        daus[i] = Math.floor(Math.random()*6)+1;
}
console.info("Generació aleatòria de 10 valors entre 1 i 6: "+daus);

/*
Molts dels mètodes de la classe Array admeten com a paràmetre una funció. 
Especialment aquells mètodes que fan un recorregut per l'array
Si això passa, els paràmetres que es poden indicar en la funció són:
    1r paràmetre és l’element de la posició de l’array que s'està reccorren
    2n paràmetre és la posició
    3r paràmetre és l’array
*/
/*
let parells = [];
let senars = [];
function separarParellsSenars(v)
{
    if (v%2==0) parells.push(v);
    else        senars.push(v);
}
daus.forEach(separarParellsSenars);
console.log("--------- forEach----------");
console.log("Valors parells: ",parells);
console.log("Valors senars: ",senars);

/* 
	map: retorna un array de la mateixa longitud 
	El map fa un recorregut per l'Array i l'omple amb els valors que es retornen a cada iteració,
	si en alguna iteració no retorna res, la posició queda buida
*/
/*
console.log("--------- map ----------");
let i=0;
let nou = daus.map(function (e,pos,array) {
                            if (e==6)
								//return i++;  
								return pos+1;
                            })
console.info("Posicions on hi ha un 6: "+nou);							
/*
  find: retorna el 1r valor que troba que compleix la condició
*/
/*
console.log("--------- find ----------");
console.info(daus);
nou = daus.find(function (e,pos,array) {
                            if (e%2==0)
                            return true;
                            })
console.info(" 1r valor parell: "+nou);
nou = daus.findIndex(function (e,pos,array) {
                            if (e%2==0)
                            return true;
                            })
console.info("Posició del 1r parell: "+nou);

/*
   filter: retorna array amb els valors de l'array original que compleixen la condició
*/
/*
console.info("Tots els imparells: "+daus.filter((a) =>  a%2!=0));
// un altre exemple de filter -> https://flaviocopes.com/javascript-filter/                            
let nombres = [450,18,23,4,32,3,300,150,40];
console.info(' ',nombres.sort());
//compte! El mètode sort modifica el contingut original de l'array

function ordenarNombres(a,b)
{
    return a-b;
}

// function desordenar()
// {
    // return Math.random() - 0.5;
// }

 console.info('En ordre numèric: ',nombres.sort(ordenarNombres));
 //console.info("En ordre invers: "+nombres); // o alternativament, modificant la funció ordenarNombres
// nombres.sort(desordenar);
// console.info("Desordenats: "+nombres);
 nombres.reverse();
 console.info("En ordre invers: "+nombres);

 let paraules = ['Maria','Arnau','Pau','Adrià'];
 paraules.forEach((ele,pos,tot)=> ele = ele.toLowerCase());
 console.info("Accés per valor als elements de l'array: ",paraules);
 paraules.forEach((ele,pos,tot)=> tot[pos] = ele.toLowerCase());
 console.info(paraules);
 paraules.sort();
 console.info(paraules);

// --------------- RegExp ---------------------------------------------

// amb cadenes literals
'JavaScript'.search('Script') //4
'JavaScript'.search('TypeScript') //-1
// amb expressions regulars
'JavaScript'.search(/Script/) //4
'JavaScript'.search(/script/i) //4
'JavaScript'.search(/a+v/) //1


// -----------------------------------------------------------------------------------------
//console.clear();
  document.addEventListener('DOMContentLoaded',main);
  /*
  L’esdeveniment DOMContentLoaded es dispara quan el document 
  ha estat completament carregat i analitzat, sense esperar 
  que els fulls d’estil, les imatges i els subframes 
  acabin de carregar-se.
  L’esdeveniment Load es pot utilitzar 
  per detectar una pàgina totalment carregada.
  */
  /*
  function main()
  {
      boto.addEventListener('click',mostrarMissatge);
      document.addEventListener('submit',mostrarMissatge);    
      
  }
      
    function mostrarMissatge(esdeveniment)
    {
        //esdeveniment.preventDefault();
          var nom = window.document.getElementById('nom').value;
          var edat = document.getElementById('edat').value;
          if (isNaN(edat) || parseInt(edat)!=edat || edat<=0) {
              window.alert("Edat no vàlida!");
          } else {
              iniVal = 0;
              sms = "";
              while (iniVal < edat)
              {
                  iniVal ++;
                  sms += iniVal + ". Feliç Aniversari " + nom + "!<br>";
              }
              //console.info(sms)
              document.getElementById('para').innerHTML = sms;
          } // fi si
    } // fi funció
	*/