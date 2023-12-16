document.addEventListener("DOMContentLoaded", f_main);

let json = {
    "persones" : [
    {
        "dni":1,
        "nom":"Joan",
        "cognoms":"Esteve",
        "adreça":"C/ Colom 123"
     },
     {
        "dni":2,
        "nom":"Anna",
        "cognoms":"Peiró",
        "adreça":"C/ Mariola 25"
     },
     {
        "dni":3,
        "nom":"Ricard",
        "cognoms":"Calvo",
        "adreça":"Plaça Camp del codina, 2"
     }]
};

function f_main()
{
    document.getElementById("boto").addEventListener("click", f1);
}
function f1(){

    let titols = Object.keys(json.persones[0]);
    let persones = json.persones;
    
    let resultat = "";
    resultat = "<table border='1'>";
    resultat += "<tr>";

    titols.forEach(function (e){
        resultat += "<th>"+e+"</th>";
    });

    resultat += "</tr>";

    persones.forEach(function (e){
        resultat += "<tr><td>"+e.dni+"</td><td>"+e.nom+"</td><td>"+e.cognoms+"</td><td>"+e.adreça+"</td></tr>";
    });
    resultat += "</table>";
    document.getElementById("demo").innerHTML = resultat;
}