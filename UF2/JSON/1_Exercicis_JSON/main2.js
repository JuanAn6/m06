document.addEventListener("DOMContentLoaded", f_main);

let obj = {
    "datos" : [
        {
            "id" : "1",
            "nombre" : "Conocimientos sobre JAVASCRIPT",
            "basico" : "SI", 
        },
        {
            "id" : "2",
            "nombre" : "Conocimientos sobre DOM",
            "basico" : "SI", 
        },
        {
            "id" : "3",
            "nombre" : "Conocimientos sobre MOOTOOLS",
            "basico" : "NO", 
        },
        {
            "id" : "4",
            "nombre" : "Curso básico papiroflexia",
            "basico" : "SI", 
        },
        {
            "id" : "5",
            "nombre" : "Curso avanzado aviones papel",
            "basico" : "NO", 
        },
        {
            "id" : "6",
            "nombre" : "Curso mus cantinero",
            "basico" : "SI", 
        },
        {
            "id" : "7",
            "nombre" : "Organización de fiestas",
            "basico" : "SI", 
        },
        {
            "id" : "8",
            "nombre" : "Como entrar en la Tuna y no repetir curso",
            "basico" : "NO", 
        },
        {
            "id" : "9",
            "nombre" : "Como entrar en la Tuna",
            "basico" : "NO", 
        }
        
    ]
}

function f_main()
{
    var handlerFunction = f1.bind(null, "SI");
    var handlerFunction2 = f1.bind(null, "NO");
    
    document.getElementById("m_b").addEventListener("click", handlerFunction);
    document.getElementById("n_b").addEventListener("click", handlerFunction2);
        
}
function f1(mostrar){
    console.log(mostrar);
    let titols = Object.keys(obj.datos[0]);
    let datos = obj.datos;
    
    let resultat = "";
    resultat = "<table border='1'>";
    resultat += "<tr>";

    titols.forEach(function (e){
        resultat += "<th>"+e+"</th>";
    });

    resultat += "</tr>";

    datos.forEach(function (e){
        if(mostrar == "SI" && e.basico == "SI"){
            resultat += "<tr><td>"+e.id+"</td><td>"+e.nombre+"</td><td>"+e.basico+"</td></tr>";
        }else if (mostrar == "NO" && e.basico == "NO"){
            resultat += "<tr><td>"+e.id+"</td><td>"+e.nombre+"</td><td>"+e.basico+"</td></tr>";
        }
    });
    resultat += "</table>";

    document.getElementById("out").innerHTML = resultat;
}