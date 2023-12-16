document.addEventListener("DOMContentLoaded", f_main);

function f_main()
{
    
    let titols = Object.keys(supers);
    let datos = supers.members;
    
    let resultat = "";
    resultat = "<table border='1'>";
    resultat += "<tr>";

    titols.forEach(function (e){
        resultat += "<th>"+e+"</th>";
    });

    resultat += "</tr>";

    datos.forEach(function (e){
        resultat += "<tr><td>"+e.id+"</td><td>"+e.nombre+"</td><td>"+e.basico+"</td></tr>";
    });
    resultat += "</table>";

    document.getElementById("out").innerHTML = resultat;
    
        
}
