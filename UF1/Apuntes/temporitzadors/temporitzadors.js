let tmp1 = null;
let tmp2 = null;
let tmp3 = null;
let tmp4 = null;
let tmp5 = null;
let ini = 10;

document.addEventListener('beforeunload',f_tancar);

function f_tancar()
{
    clearInterval(tmp4);
    clearInterval(tmp5);
    clearInterval(tmp2);
    //clearTimeout(tmp1);
}

document.addEventListener('DOMContentLoaded', function f_main() {
    document.getElementById("inici").addEventListener('click',() =>{
        if (document.getElementById("caixa1").value.length == 0){
            document.getElementById("caixa1").value = "00:00:00";
        } else {
            f_actualitzarCronometre();
        }
        tmp4 = setInterval(f_actualitzarCronometre,10);
    });

    document.getElementById('time').textContent = new Date().toLocaleTimeString()+' '+
    new Date().toLocaleDateString()+' '+new Date().toLocaleString();
    tmp5 = setInterval(f_cadaSegon,1000);

    document.getElementById("aturar").addEventListener('click',f_aturarCronometre);


    // EXEMPLE: compte enrere
    //f_repeticio();
    //tmp1 = setInterval(f_repeticio,1000);
    // que cada segon que es repeteixi la funció f_repeticio
    tmp2 = setTimeout(f_mostrarInformacio,3000,[1,2,3,4],"Salutacions!");
});


function f_repeticio()
{
    document.getElementById('p1').textContent = ini;
    ini--;
    if (ini <0) {
        clearInterval(tmp1);
        f_mostrarAlerta();
    }
    if (ini == 8) clearTimeout(tmp2);

}

function f_mostrarAlerta()
{
    alert("S'ha finalitzat el compte enrere!");
}

function f_mostrarInformacio(p1,p2)
{
    let out = document.getElementById('info');
    out.innerHTML = p1+'<br>';
    out.innerHTML += p2+'<br>';
    // tmp3 = setInterval(f_segon,10);
    // mIni = new Date();
    // resposta = confirm("Vols continuar?");
    
}
let mIni,mFi;
let resposta = null;
function f_segon()
{
    if (resposta!=null) 
    {
        clearInterval(tmp3);
        mFi = new Date();
        let milisegons = mFi.getTime() - mIni.getTime();
        document.getElementById('info').innerHTML = milisegons+" mil·lisegons";
    }
}

function f_actualitzarCronometre()
{
    let valorActual = document.getElementById("caixa1").value;   
    
    let parts = valorActual.split(':');
    console.info(parts);
    // minuts parts[0]
    // segons parts[1]
    // milisegons parts[2]
    if (parts[2]<99)
    {
        parts[2]++;
        parts[2]= (parts[2]<10?'0'+parts[2]:parts[2]);
        document.getElementById("caixa1").value = parts[0]+':'+parts[1]+':'+parts[2];   
    } else {
        parts[2] = '00';
        if (parts[1]<59)
        {
            parts[1]++;
            parts[1]= (parts[1]<10?'0'+parts[1]:parts[1]);
            document.getElementById("caixa1").value = parts[0]+':'+parts[1]+':'+parts[2];   
        } else {
            parts[1]='00';
            if (parts[0]<59)
            {
                parts[0]++;
                parts[0]= (parts[0]<10?'0'+parts[0]:parts[0]);
                document.getElementById("caixa1").value = parts[0]+':'+parts[1]+':'+parts[2];           
            } else {
                alert("Cronometre desbordat");
            }
        }
    }
    console.info(parts);
}

function f_aturarCronometre()
{
    clearInterval(tmp4);
}

function f_cadaSegon(){
    document.getElementById('time').textContent = new Date().toLocaleTimeString()+' '+
    new Date().toLocaleDateString()+' '+new Date().toLocaleString();   
}