let v = null;
let c = null;
let txt = "";
do{
    v = prompt("Indica un valor: ");
    c = confirm("Vols continuar");

    if(Number(v) < 0){
        txt +=" "+v;
    }

}while(c);

alert(txt);