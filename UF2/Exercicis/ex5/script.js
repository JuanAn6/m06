document.addEventListener('DOMContentLoaded', f_main);

function f_main(){
    
    let array = [1,2,3,4,5,6]
    console.log(array.canvi(1,2), array);

    let paraula = "hola";
    console.log(paraula.checkCase());

    let si = "tuvieja89";
    console.log(si.checkNumbers());

    let paraula2 = "aaaaa";
    console.log(paraula2.quantitat("A"));
    
    console.log("13.4.3.214.3434.3.443.4334.34.34".quantitat("."));


    let d1 = new Date("2023-11-03");
    console.log(new Date("2023-11-04").meitat(d1));

    
}

