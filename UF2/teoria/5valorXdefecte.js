/**
* Es permet indicar un valor per defecte els paràmetres
**/
const sum = function (a = 10, b = 2) {
    return a + b;
};


console.log(sum()); // => 12
console.log(sum(-2)); // => 0
console.log(sum(undefined,-10)); // => 0
console.log(sum(3, 2)); // => 5
let ent = [20,13]; 
// exemple d'ús de l'operador spread
console.log(sum(...ent)); // => 33

