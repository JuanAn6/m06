document.addEventListener("DOMContentLoaded", f_main);

function f_main(){
    //Exercici 1
    const mesos =['Gener','Febrer','Març','Abril','Maig','Juny','Juliol','Agost','Setembre','Octubre','Novembre','Desembre'];
    //alert(mesos);
    console.log(mesos);

    const dies =['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte'];
    //alert(dies);
    console.log(dies);

    data = new Date();
    console.log(data);
    console.log(data.getMonth());

    let divMes = document.getElementById('mes');
    divMes.innerHTML = data.getMonth()+"  "+mesos[data.getMonth()];

    let divDia = document.getElementById('diaSetmana');
    divDia.innerHTML = data.getDay()+"  "+dies[data.getDay()];


    //Exercici 2

    document.getElementById('numDia').textContent = data.getDay();
    document.getElementById('mesLletres').textContent = mesos[data.getMonth()];
    document.getElementById('anny').textContent = data.getFullYear();
    document.getElementById('hora').textContent = data.getHours();
    document.getElementById('minuts').textContent = data.getMinutes();
    document.getElementById('segons').textContent = data.getSeconds();

    //Exercici 3
    document.getElementById('botoDia').addEventListener('click',f_buscador);


    //extra
    let avui = new Date();
    let dema = new Date();
    let ahir = new Date();
    
    dema.setDate(avui.getDate()+1);
    ahir.setDate(avui.getDate()-1);


    let diff = dema - ahir;

    

}

function f_buscador(){
    const dies = ['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mesSelect').value;
    let any = document.getElementById('any').value;

    

    if(dia != "" && mes != "" && any != ""){
        document.getElementById('nom1').textContent = "Català";
        document.getElementById('nom2').textContent = "Anglés";
        document.getElementById('nom3').textContent = "Castellà";
    
        date = new Date(any+"-"+mes+"-"+dia);
        console.info(date);

        if(date.getDate() != dia){
            console.log("Data erronea");
        }else{
            document.getElementById('dia1').textContent = dies[date.getDay()];
            document.getElementById('dia2').textContent = days[date.getDay()];
            document.getElementById('dia3').textContent = dias[date.getDay()];
        }

    }else{
        console.log(date);// return: Invalid date;
    }

}