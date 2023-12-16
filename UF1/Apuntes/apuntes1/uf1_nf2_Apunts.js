// PUNT 2 -------------------------------------------------------------------------------------
console.info('--------------------------------------');
let anes = 4;
/**
* Si es descomenta la línia següent, dóna error
* doncs, l'ús de let és més robuts que var i es queixa a l'intentar declarar una variable amb el mateix nom
**/
//let anes = "avisar";
//qualsevol = new Date();
var qualsevol = 20;
var qualsevol = "no es queixa";
// evitar l'ús del var
/**
* es mostra undefined 
**/
function run() {
  let name;
  console.log(`notació d'interpolació ${name}`);
   name = 'Joan';
  console.log(name);
}

run();

/**
* Exemple d'ús de variable sense declarar
**/
function exemple()
{
    nom = 'Carme'; 
    console.info(nom);
}

exemple();

/**
* Exemple de visibilitat de la variable i de HOISTING
**/
let nom2 = "Martina";
function exemple2() {
  let nom2 = 'Maria'; // si es descomenta la línia es pot veure com el valor ara és Maria
  console.log(nom2);
  //let nom2 = 'Amanda'; // Error!
}

exemple2();
let nom3;
console.info(nom3);
nom3 = null;
console.info(nom3);
// PUNT 3 -------------------------------------------------------------------------------------
//console.clear();
console.info('--------------------------------------');
// convertir de número a cadena
console.info(String(10)) //"10"
console.info((10).toString()); //"10"

// convertir una Data a Cadena
console.info(String(new Date('2022-09-08')));
console.info((new Date('2022-09-08')).toString());
console.info(new Date());

// Transformar una data a Number pot tenir sentit en algunes situacions
console.info(Number(new Date()));
// JS retorna el timestamp, és a dir, la quantitat de mil·lisegons des del 1970

const count = Number('1234') //1234

// Les Strings sempre s'escapcen per davant i darrera abans de convertir-se en números
Number(" 1 ") //1

// Per valors amb decimals cal indicar un punt com a separador 
Number("12.2")
Number('10,000') //NaN

// A part d'usar el constructor Number d'aquesta manera, també es pot fer ús dels mètodes: parseInt() , parseFloat()
const count1 = parseInt('1234', 10)
parseInt('10.00', 10) //10     ✅ (considered decimals, cut)
parseInt('10.20', 10) //10     ✅ (considered decimals, cut)
parseInt('10.81', 10) //10     ✅ (considered decimals, cut)
parseFloat('10.00', 10) //10     ✅ (considered decimals, cut)
parseFloat('10.20', 10) //10.2     ✅ (considered decimals)
parseFloat('10.81', 10) //10.81     ✅ (considered decimals)
Math.floor()
Math.floor('10.20') //10 ✅
Math.floor('10.81') //10 ✅
// i l'operador  + davant de la cadena que es vol convertir a numèric
// i multiplicar per 1 és el sistema més ràpid de tots
'10.20' * 1 //10.2 ✅
+'10.81'//10.81 ✅


// PUNT 4 -------------------------------------------------------------------------------------
//console.clear();
console.info('--------------------------------------');
let x;
if (x == undefined)
{
    console.info("La variable x encara no està inicialitzada");
}
if (typeof(x) == 'undefined')
{
    console.info("El tipus de la variable x és 'undefined'?");
    console.info('El tipus de la variable x és \'undefined\'?');
    console.info(`El tipus de la variable x és 'undefined'?`);
}
let d = "Hola \"nom\"";
// per escapar cometes dobles
console.log(d);
d = 'Hola "nom"';
console.log(d);
d = 'Hola \'nom\''; // la recomanada per Google
console.log(d);
d = `Hola 'nom'`; // aquesta notació es coneix com interpolació i de les 3 potser és la més recomanada i segura
console.log(d);
    
// PUNT 5 -------------------------------------------------------------------------------------
//console.clear();
console.info('--------------------------------------');
let mitjana = 10;
let text = 'La puntuació aconseguida és '+mitjana+14+' punts';
console.info(text);
text = 'La puntuació aconseguida és '+(mitjana+14)+' punts';
console.info(text);