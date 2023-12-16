class Llibre
{
    constructor(){
        
    }

    

}
document.addEventListener("DOMContentLoaded", f_main2);

function f_main2()
{

    document.getElementById("botoCot").addEventListener("click", crearCotxe);
    
}

function crearCotxe()
{
    let matricula = document.getElementById("matC").value;
    let color = document.getElementById("colorC").value;
    let marca = document.getElementById("marcaC").value;
    let model = document.getElementById("modelC").value;
    let dataMatriculacio = document.getElementById("dataC").value;

    //console.log(matricula, color, marca, model, dataMatriculacio);

    let c = new Cotxe(matricula, color, marca, model, dataMatriculacio);

    console.log(c.toString());
}