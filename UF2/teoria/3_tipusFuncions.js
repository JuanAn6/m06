const add = function (a,b)
        {
            return a+b;
        }
console.log(add(1,2));
console.log(add());
		
const afegir = (a,b) =>  a+b;

console.log(afegir(-2,2));

console.log(typeof add,' ',typeof afegir);
let res = afegir(40,10);
console.log(res);

const substract = function resta(a,b)
        {
            return a-b;
        }

console.log(substract(120,20));
//console.log(resta(120,20)); //El nom de la funció és substract
		
const potencia = (a,b) =>
        {  
            let res = 1;
            for (let i=0;i<b;i++)
            {
                res = res*a;
            }
            return res;
        }
		
console.log(potencia(10,3));

let frasePersonal = new Function('a','b','return "què li passa a la "+a+" amb la "+b;');
console.error(frasePersonal('Maria','Teresa'));
console.error(frasePersonal());
console.error(frasePersonal('Maria','Teresa','Jana'));

function map(f,a) {
      let result = [];
      let i;
      for (i = 0; i < a.length; i++)      
        {
        result[i] = f(a[i]);
        }
      return result;
    }
const multiplicar= function(x) { return x * x * x;} 
let array = [0, 1, 2, 5, 10];
console.info(map(multiplicar, array));

let myFunc, num = 0;
    if (num == 0){
      myFunc = function(theObject) {
        theObject.make = "Toyota";
      }
    }
let cotxe = {}; 
myFunc(cotxe);
console.log(cotxe);