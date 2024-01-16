// crear nova etiqueta
let newTag = document.createElement('tagName');
// afegir nova etiqueta
desti.appendChild(newTag);

let textNode = document.createTextNode(textToInsert);
// afegir text dins etiqueta, // opció 1
newTag.appendChild(textNode);
// opció 2
newTag.textContent = "textToInsert";

// ATRIBUTS
desti.setAttribute('id','cognom1');
desti.getAttribute('id');
desti.removeAttribute('id');
desti.hasAttribute('id');

// afegir abans o després d'un node, 1 o diversos nodes
// els nodes a inserir poden ser etiquetes o text
// admet "spread operator" en el paràmetre si és ...array
origen.before(node1, [node2, ... nodeN])
origen.after(node1, [node2, ... nodeN])

// crear còpies d'un node
nodeOriginal.cloneNode([profunditat])
nodeOriginal.cloneNode(false); // valor per defecte, no es clonen descendents
nodeOriginal.cloneNode(true); // es clonen també els descendents del nodeOrigen
// COMPTE! Si el node té 'id' és indispensable modificar el 'id' del/s clon/s
// i què passa amb els escoltadors????? NO els copia!!!!


parentNode.append(node1,[node2, ... nodeN])
/*  
Differences          append()                      appendChild()
Return value        undefined                      The appended Node object
Input                Multiple Node Objects          A single Node object
Parameter Types      Accept Node and DOMString      Only Node
*/

// afegir abans del 1r fill d'un node pare, 1 o diversos nodes
parentNode.prepend(...nodes);
parentNode.prepend(...DOMStrings);

// Objectiu: afegir codi HTML en algun lloc
// SINTAXI
element.insertAdjacentHTML(posició, text_a_parsejar); 
/*

'beforebegin': abans de l'element
'afterbegin': abans del 1r fill de l'element
'beforeend': després de l'últim fill de l'element
'afterend': després de l'element
El text_a_parsejar si és una entrada d'un usuari no fer servir aquest mètode per evitar riscos.
Exemple llista.
*/
// Objectiu: afegir un node abans d'un node. Tots dos han de tenir el pare comú.
// SINTAXI
parentNode.insertBefore(newNode, existingNode);
//Exemple
/*
nodeExistent.parentNode.insertBefore(nouNode,nodeExistent);
*/