document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar2)


function f_main()
{
    document.getElementById('boto2').addEventListener('click',f_obrir_tancar);
}

//ex2
let f1 = null;
let temp = null;
function f_obrir_tancar(){
    if(f1 == null || f1.closed){
        f1 = window.open("https://www.marca.com","","width=1000,height=500,top=100,left=100");
        temp = setTimeout(f_tancar2, 8000);
    }else{
        f1.focus();
    }
    
}
function f_tancar2(){
    if(!f1.closed && f1 != null){
        f1.close();
    }
    clearTimeout(temp);
}