document.addEventListener('DOMContentLoaded',f_main);

function f_main(){

    //EX1
    let op1 = new RegExp("[0-9]{2,5}"); 
    let cadena ="23";
    console.info(cadena+" "+op1.test(cadena));


    let op2 = new RegExp("\\s{3}"); 
    let cadena2 ="   ";
    console.info(cadena2+" "+op2.test(cadena2));

    let op3 = new RegExp("[b-l][0-9]{2}"); 
    let cadena3 ="c34";
    console.info(cadena3+" "+op3.test(cadena3));

    let op4 = new RegExp("([2-3][0-9])|(40)");
    let cadena4 ="40";
    console.info(cadena4+" "+op4.test(cadena4));

    //EX2

    let exp1 = /^[0-9]{3}(\+|\-)[0-9]{2}$/;
    let cad1 = "345+67";
    console.info(cad1+" "+exp1.test(cad1));

    //let exp2 = /^([e]|[e]\-)gmail$/;
    let exp2 = /^e-?gmail$/;
    let cad2 = "e-gmail";
    console.info(cad2+" "+exp2.test(cad2));
    
    let exp3 = /^\dpq$/;
    let cad3 = "4pq";
    console.info(cad3+" "+exp3.test(cad3));

    
    /*
    //EX3

        /\d\d\d-?\d\d/ 3 digits despres un guio opcional y 2 digits mes
        /[A-Z0-7][0-9]\d\d/ de la a a la z majuscules del un digit del 0 i tres digits mes
        /[^A-Z]\w/  el primer claudator fa negacio de A-Z y la \w fa referencia a [A-Z] o [0-9] o [a-z] o [_]
        /\bescola/ busca la praula escola separada de latres lletres amb espai o altres separadors com ". , ; :" 
        /co{3}ab/
        /co{3,}l{1,}/
        ^graciesJoel$ cadena exactament igual que aixo;
        \bgraciesJoel\b ara es buscar graciesJoel pero separat d'altres paraules per els dos costats (\b -> limit de paraula)


    //EX4

        /A3-4/              A3-4
        /A\dB\d/            A1B2
        /\D\D\d3\D/         #A43%
        /\d\d\w\w\w\D/      12___.
        /..\d/              D.5 //el punt es pot cambiar per qualsevol cosa
        /\d\d\w\s\d/        34A 4
        /[a+pqz4]\d\d/      p77 // entre els claudators es posen com si fos or

    */

    

}
