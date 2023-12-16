document.addEventListener('DOMContentLoaded',f_main);

function f_main(){
    /*
    Metodes per regexp

    match
        cadena.match(regexp);
        retorna null si no troba cap coincidencia o [] amb la coincidencia o les coincidencies;

    
    replace
        cadena.replace(regexp, cadena_rempla);
        retorna la cadena amb les coincidencies cambiades;

    search
        cadena.search(regexp);
        retorna -1 o la pocicio on comença el patro
    split
    */
    //amb el metode match:  indicars quants $ apareixen dind d'una cadena;


    let erMatch = /\$/g;
    let erMatch2 = new RegExp("\\$", "g");

    let cadena = " Hola $ que tal $ si $ bien$";
    let array1 = cadena.match(erMatch);
    let array2 = cadena.match(erMatch2);
    console.info(cadena + " test: ");
    console.info(array1);
    console.info(cadena + " test2: ");
    console.info(array2);


    let c = "Avui es dimarts, pero la setamana que ve, el DIMARTS, sera com un divendres";
    let er = new RegExp("dimarts", "gi") // /dimarts/gi;
    console.log(c.replace(er, "dissabte"));

    let er2 = new RegExp("\\.png"); // /\.png/;
    let c2 = "L'arcxiu dibuix.png es mes gran que el arxiu imatge.png";
    console.log(c2.search(er2));

    



}