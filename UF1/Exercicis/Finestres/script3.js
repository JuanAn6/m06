document.addEventListener('DOMContentLoaded',f_main);
window.addEventListener('beforeunload',f_tancar3)


function f_main()
{
    document.getElementById('boto3a').addEventListener('click',f_obrir3);
    document.getElementById('boto3b').addEventListener('click',f_tancar3);
    document.getElementById('pantalla').textContent = screen.width+" x "+screen.height;
}

//ex2
let f3 = null;

function f_obrir3(){

    let x = Number(document.getElementById("ent1").value);
    let y = Number(document.getElementById("ent2").value);
    if(x <= 0 || x >screen.width || y <= 0 || y > screen.height){
        alert("valors no valids");
    }else{
        if(f3 == null || f3.closed){
            f3 = window.open("https://www.marca.com","","width="+x+",height="+y+",top=100,left=100");
        }else{
            alert("la finestra ja esta oberta");
        }
    }
}
function f_tancar3(){
    if(!f3.closed && f3 != null){
        f3.close();
        
    }else{
        alert("la finestra no esta oberta");
    }
}