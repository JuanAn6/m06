document.addEventListener("DOMContentLoaded", f_main);

function f_main(){
    ex1(25);
}
function ex1(b){
    let alc = 0;
    let s = b;
    if(b == 1){
        s = 0; 
        alc = 1;
    }else{
        let i = 1;
        while(!(s < (i-1)*4)){
            if(i != 1){
                alc++;
                s = s - ((i-1)*4);
                i = i+2;
            }else{
                s--;
                alc++;
                i = i+2;
            }
        }
    }
    console.log("Numero de blocs: "+b+" Minim alcada: "+alc+" Sobrants: "+s);
}
