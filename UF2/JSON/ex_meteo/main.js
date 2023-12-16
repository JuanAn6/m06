document.addEventListener("DOMContentLoaded", f_main)
let valor = 0;
let new_data = [];
function f_main(){
    let data = obj.data;
    let i = 0; //22
    for (let i = 0; i < data.length-21; i+=22){
        let new_json = {
            "CODIGO_ESTACION" : data[i].CODIGO_ESTACION,
            "NOMBRE_ESTACION" : data[i+1].NOMBRE_ESTACION,
            "FECHA" : data[i+2].FECHA,
            "TEMPERATURA_UNIDAD" : data[i+3].TEMPERATURA_UNIDAD,
            "TEMPERATURA_MAX" : data[i+4].TEMPERATURA_MAX,
            "TEMPERATURA_MED" : data[i+5].TEMPERATURA_MED,
            "TEMPERATURA_MIN" : data[i+6].TEMPERATURA_MIN,
            "RADIACION_SOLAR_UNIDAD" : data[i+7].RADIACION_SOLAR_UNIDAD,
            "RADIACION_SOLAR_MAX" : data[i+8].RADIACION_SOLAR_MAX,
            "RADIACION_SOLAR_MED" : data[i+9].RADIACION_SOLAR_MED,
            "PRECIPITACION_UNIDAD" : data[i+10].PRECIPITACION_UNIDAD,
            "PRECIPITACION_ACUM" : data[i+11].PRECIPITACION_ACUM,
            "HUMEDAD_RELATIVA_UNIDAD" : data[i+12].HUMEDAD_RELATIVA_UNIDAD,
            "HUMEDAD_RELATIVA_MED" : data[i+13].HUMEDAD_RELATIVA_MED,
            "PRESION_ATMOSFERICA_UNIDAD" : data[i+14].PRESION_ATMOSFERICA_UNIDAD,
            "PRESION_ATMOSFERICA_MED" : data[i+15].PRESION_ATMOSFERICA_MED,
            "VELOCIDAD_VIENTO_UNIDAD" : data[i+16].VELOCIDAD_VIENTO_UNIDAD,
            "VELOCIDAD_VIENTO_MAX" : data[i+17].VELOCIDAD_VIENTO_MAX,
            "VELOCIDAD_VIENTO_MED" : data[i+18].VELOCIDAD_VIENTO_MED,
            "VELOCIDAD_VIENTO_UNIDAD_KMMH" : data[i+19].VELOCIDAD_VIENTO_UNIDAD_KMMH,
            "VELOCIDAD_VIENTO_KMH_MAX" : data[i+20].VELOCIDAD_VIENTO_KMH_MAX,
            "VELOCIDAD_VIENTO_KMH_MED" : data[i+21].VELOCIDAD_VIENTO_KMH_MED,
        };
        new_data.push(new_json);
    }

    f_show();

    document.getElementById("seguent").addEventListener("click", function (){
        if(valor-1 < new_data.length){
            valor = valor+1
        }
        console.log(valor);
        f_show();
    });
    document.getElementById("anterior").addEventListener("click", function (){
        if(valor > 0){
            valor = valor-1
        }
        console.log(valor);
        f_show();
    });

    
}


function f_show(){
    console.log("hola");
    document.getElementById("CODIGO_ESTACION").textContent = new_data[valor].CODIGO_ESTACION;
    document.getElementById("NOMBRE_ESTACION").textContent = new_data[valor].NOMBRE_ESTACION;
    document.getElementById("FECHA").textContent = new_data[valor].FECHA;
    document.getElementById("TEMPERATURA_UNIDAD").textContent = new_data[valor].TEMPERATURA_UNIDAD;
    document.getElementById("TEMPERATURA_MAX").textContent = new_data[valor].TEMPERATURA_MAX;
    document.getElementById("TEMPERATURA_MED").textContent = new_data[valor].TEMPERATURA_MED;
    document.getElementById("TEMPERATURA_MIN").textContent = new_data[valor].TEMPERATURA_MIN;
    document.getElementById("RADIACION_SOLAR_UNIDAD").textContent = new_data[valor].RADIACION_SOLAR_UNIDAD;
    document.getElementById("RADIACION_SOLAR_MAX").textContent = new_data[valor].RADIACION_SOLAR_MAX;
    document.getElementById("RADIACION_SOLAR_MED").textContent = new_data[valor].RADIACION_SOLAR_MED;
    document.getElementById("PRECIPITACION_UNIDAD").textContent = new_data[valor].PRECIPITACION_UNIDAD;
    document.getElementById("PRECIPITACION_ACUM").textContent = new_data[valor].PRECIPITACION_ACUM;
    document.getElementById("HUMEDAD_RELATIVA_UNIDAD").textContent = new_data[valor].HUMEDAD_RELATIVA_UNIDAD;
    document.getElementById("HUMEDAD_RELATIVA_MED").textContent = new_data[valor].HUMEDAD_RELATIVA_MED;
    document.getElementById("PRESION_ATMOSFERICA_UNIDAD").textContent = new_data[valor].PRESION_ATMOSFERICA_UNIDAD;
    document.getElementById("PRESION_ATMOSFERICA_MED").textContent = new_data[valor].PRESION_ATMOSFERICA_MED;
    document.getElementById("VELOCIDAD_VIENTO_UNIDAD").textContent = new_data[valor].VELOCIDAD_VIENTO_UNIDAD;
    document.getElementById("VELOCIDAD_VIENTO_MAX").textContent = new_data[valor].VELOCIDAD_VIENTO_MAX;
    document.getElementById("VELOCIDAD_VIENTO_MED").textContent = new_data[valor].VELOCIDAD_VIENTO_MED;
    document.getElementById("VELOCIDAD_VIENTO_UNIDAD_KMMH").textContent = new_data[valor].VELOCIDAD_VIENTO_UNIDAD_KMMH;
    document.getElementById("VELOCIDAD_VIENTO_KMH_MAX").textContent = new_data[valor].VELOCIDAD_VIENTO_KMH_MAX;
    document.getElementById("VELOCIDAD_VIENTO_KMH_MED").textContent = new_data[valor].VELOCIDAD_VIENTO_KMH_MED;
}