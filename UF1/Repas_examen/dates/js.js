document.addEventListener('DOMContentLoaded', main)

function main(){
    let avui = new Date();

    let ja= new Date('2024-01-06');
    let da = new Date('2023-10-07');

    let ma = new Date();

    ma.setDate(1);
    ma.setMonth(4-1);
    ma.setFullYear(ma.getFullYear()+1);
    
    console.log(ma.toLocaleDateString());
    console.log(ja);
    console.log(avui.toLocaleTimeString());
    
    ma.setHours(ja.getHours());
    ma.setMinutes(ja.getMinutes());
    ma.setSeconds(ja.getSeconds());
    ma.setMilliseconds(ja.getMilliseconds());

    let dif = ma - ja; //retorna timestamp (milisegons);
    console.info(dif);
    
    let dies = 1000*60*60*24;
    let diesDif = dif/dies;


    console.info(dif);
    console.info(diesDif);


    //recorregut d'una data;

    let inici = new Date(ja);
    let final = new Date(ma);

    let qDies = 0;

    while(inici < final){
        inici.setDate(inici.getDate()+1);
        qDies ++;
    }

    console.info(qDies);
}