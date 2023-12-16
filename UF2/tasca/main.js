document.addEventListener("DOMContentLoaded", f_main);
let txt = "";
function f_main()
{
    let arr = ['Juan','Garcia','Jimenez','Laura','Julia','Joan','David','Manel','Denis','Guim'];
    
    document.getElementById("p1").textContent = arr.every(f_1);
    document.getElementById("p2").textContent = arr.every(f_2);
    document.getElementById("p3").textContent = arr.some(f_3);
    document.getElementById("p4").textContent = arr.some(f_4);
    document.getElementById("p5").textContent = arr.filter(f_5);
    document.getElementById("p6").textContent = arr.find(f_6);
    document.getElementById("p7").textContent = arr.filter(f_7);
    document.getElementById("p8").textContent = arr.findIndex(f_8);

    arr.forEach(f_9);
    document.getElementById("p9").innerHTML = "<ul>"+txt+"</ul>";
    
    document.getElementById("p10").textContent = arr.join(" == ");
    document.getElementById("p11").textContent = "la comanda es array.push('ULTIM') i retorna el length resultant del array.";
    document.getElementById("p12").textContent = "la comanda es array.unshift('PRIMER') i retorna el length resultant del array.";
    document.getElementById("p13").textContent = "la comanda es array.pop() i retorna el element que s'ha tret del array.";
    document.getElementById("p14").textContent = "la comanda es array.shift() i retorna el element que s'ha tret del array.";

}
function f_1(element){
    return element.length > 3;
}
function f_2(element, i){
    if(i%2 != 0){
        return true 
    }else{
        return element.length > 3;
    }   
}
function f_3(element){
    return element[1] == 'a';
}
function f_4(element){
    return element.includes("ez");
}
function f_5(element){
    return element[1] == 'a';
}
function f_6(element){
    return (element[0].toLowerCase() == 'l' && element.length <= 6);
}
function f_7(element){
    return element.includes("ia");
}
function f_8(element){
    return (element.includes("ia") && element.indexOf("ia")%3 == 0);
}
function f_9(element){
    txt += "<li>";
        if(element.length <= 5){
            txt += "<b>"+element+"</b>";
        }else{
            txt += element+"";
        }
    txt += "</li>";
}