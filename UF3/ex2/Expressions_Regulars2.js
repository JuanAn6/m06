const f_main = () => {
    let op1 = new RegExp(""); // constructor
    let op2 = /xxx/; // literal

    let er = /ad/;
    let er2 = new RegExp("^ad");
    // MÈTODES PER APLICAR SOBRE EXPRESSIONS REGULARS
    // console.info(er.test("cadena"));
    // console.info(er2.test("cadena"));
    // MÈTODES PER APLICAR SOBRE CADENES, que tenen algun paràmetre que és EXPRESSIÓ REGULAR
    // MATCH
    // "cadena".match(er);
    // retorna null si no troba cap coincidència, o [] amb la coincidència o les coincidències /g
    // indicar quants caràcters $ apareixen dins una cadena
    let er_match1 = new RegExp("\\$","g");
    let er_match2 = /\$/g;
    let cadena_match = "Una cadena que tingui el símbol $ $ $$, i comptarem les apareicions d'aquest caràcter $.";
    let array1 = cadena_match.match(er_match1);
    if (array1!=null)
        console.info("S'ha trobat el dolar: "+array1.length+" vegades");
    else
        console.info("No s'ha trobat el dolar en la cadena: "+cadena_match);
    let array2 = cadena_match.match(er_match2);
    if (array2!=null)
        console.info("S'ha trobat el dolar: "+array2.length+" vegades");
    else
        console.info("No s'ha trobat el dolar en la cadena: "+cadena_match);
    // REPLACE
    // "cadena".replace(er,canvi);
    // retorna una cadenaNova substituint la 1ra o /g totes les coincidències
    const C = "El gos de la veïna és més bonic que el teu gOs";
    const ER = /Gos/i;
    console.log(C.replace(ER, 'gat'));
    let c = "El Gos de la veïna és més bonic que el teu GOS.";
    er = /GOS/g;
    console.log(c.replace(er, 'gat'));
    // substituir la paraula "dimarts" amb majus, minus, o una combinació per dissabte
    c = "Avui és dimarts, però la setmana que ve, el DIMARTS, serà com un divendres";
    er = new RegExp("dimarts",'gi'); // important l'ordre dels modificadors: 1r g després i
    console.log(c.replace(er, 'dissabte'));
    // SEARCH
    // "cadena".search(er);
    // retorna -1 o la posició on comença el patró
    // en una cadena cercar els noms d'arxiu amb extensió .png
    c = "L'arxiu dibuix.png ocupa més espai que l'arxiu imatge.png";
    er = /\.png/g;
    let pos = -4;
    let i;
    let nomArxiu;
    do {
        c = c.substring(pos+4);
        pos = c.search(er);
        console.info(c,' ',pos);
        for (i = pos;c[i]!=' ' && i>0 ;i--);
        nomArxiu = c.substring(i,pos);
        console.info(nomArxiu);
    } while (nomArxiu.length>0);
    // SPLIT
    // "cadena".split(separador);
    let array_amb_les_paraules = C.split(" "); // operació contraria = array.join(" ");
    // comptar quants espais en blanc té una cadena
    c = "  cadena d'exemple  per comptar quants espais en blanc té  ";
    er = new RegExp('\\s','g');
    let array = c.split(er)
    console.info(array);
    console.info(array.length-1);
    // com faig amb el match el mateix
    c='cadenaSenseEspais,perTant,senseCoincidencies';
    //console.info((c.match(er)).length); // si faig el length d'un match pot petar sinó troba coincidències
}

document.addEventListener('DOMContentLoaded',f_main);