document.addEventListener("DOMContentLoaded", f_main);

let temp = null;
let temp2 = null;

let num = 0;

let temp1 = null;
function f_main(){
    document.getElementById('b').addEventListener("click", function f(){
        
        document.getElementById("p").innerHTML = "";
        if (document.getElementById("text").value.length > 0){
            temp1 = setInterval(ac, 10);
        }else{
            document.getElementById("text").value = "00:00:00";
            temp1 = setInterval(ac, 10);
        }
        
    });
    
    document.getElementById('a').addEventListener("click", marca);
    
    
    
    
    
    //temp2 = setTimeout(mostrarInfo, 5000, "si");
    
}
function marca(){
    let marca = document.getElementById('text').value;
    document.getElementById("p").innerHTML += "<br>"+marca;
}

function ac(){
    
    let time = document.getElementById("text").value;

    


    let caixa = document.getElementById("text");
    time = time.split(":");
    //minuts, segons, milisegons 00:00:00;

    if(time[2] < 99){
        time[2] ++;
        caixa.value = time[0]+":"+time[1]+":"+time[2];
    }else{
        time[2] = '00';
        if(time[1] < 59){
            time[1]++;
            caixa.value = time[0]+":"+time[1]+":"+time[2];
        }else{
            time[1] = '00';
            if(time[0] < 59){
                time[0]++;
                caixa.value = time[0]+":"+time[1]+":"+time[2];
            }
        }
    }
}   





function f1(){
    
    document.getElementById('p').textContent = num;
    
    if(num == 2000){
        clearInterval(temp);
        f_mostrarAlerta();
    }

    num += 1;
}

function f_mostrarAlerta(){
    console.log("Se acabo");
}

function f2(){
    temp = setInterval(f1,1);
    num = 0;
}


let resposta;
let temp3 = null;

function mostrarInfo(p1){
    document.getElementById("info").textContent = "han pasado 5 seg: "+p1;

    let resposta = confirm("vols continuar");
    temp3 = setInterval(f_segons, 10);
}

let q = 500;
function f_segon(){
    if(resposta != null){
        clearInterval(temp3);
        console.log("hola");
    }
    q+=500;
}


