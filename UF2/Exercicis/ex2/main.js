
document.addEventListener('DOMContentLoaded', f_main);

let out;
let j;
let tmp;
let res;

function f_main(){
    res = f_partA(new Date(), 10);
    
    out = document.getElementById('out');
    j = 0;
    //tmp = setInterval(f_mostrar,1000);
    
    f_partC();
    
}

function f_partC(){

    const JDPEX1 = [
        [new Date('2023-10-15'),5],
        [new Date('2024-01-01'),3],
        [new Date('2023-10-30'),4],
        [new Date('2000-04-18'),2],
        [new Date('2010-07-16'),1]
        ];

    JDPEX1.forEach(function (valor, index, array) {
        let d = valor[0];
        let n = valor[1];

        let s = f_partA(valor[0],valor[1]);
        //f_partA(...valor);
        
        // s.forEach(function(valor, index, array){
        //     console.log(valor.toLocaleDateString());
        // });

        // let res = s.map(function(valor,index, array){
        //     return valor.toLocaleDateString();
        // });

        let res = s.map(dataToLocale);
        
        res.forEach(function(valor, index, array){
            console.log(valor);
        });
        
    });
}

function dataToLocale(valor){
    return valor.toLocaleDateString();
}

function f_mostrar(){
    
    if(j == res.length){
        clearInterval(tmp);
        j = 0;
    }else{
        out.innerHTML +="<br>"+res[j].toLocaleDateString();
        j++;
    }
    console.log("res: "+res.length+"j: "+j+ "  valor: "+res[j].toLocaleDateString());
}

function f_partA(){
    
    if(arguments.length != 2 || !arguments[0] instanceof Date || parseInt(arguments[1]) != arguments[1] ){
        return;
    }
    
    let a = [];

    for(let i = 0; i  < arguments[1]; i++){
        let d = new Date(arguments[0]);
        d.setDate(d.getDate()+i);

        a.push(d);
    }
    
    return a;
}