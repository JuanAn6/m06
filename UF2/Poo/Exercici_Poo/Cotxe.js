class Cotxe
{
    constructor ( matricula, color, marca, model, dataMatriculacio){
        //utilizando los setters
        this.matricula = matricula;
        this.color = color;
        this.marca = marca;
        this.model = model;
        this.dataMatriculacio = new Date(dataMatriculacio);
    }

    set matricula (matricula){
        const patronMatricula = /^\[0-9]{4}[A-Z]{3}$/;
        if (patronMatricula.test(matricula)) {
            this._matricula = matricula;
        }else{
            this._matricula = "0000xxx";
        }
    }
    get matricula (){
        return _matricula;
    }

    set color (color){
        this._color = color;
    }
    get color (){
        return this._color;
    }

    set marca (marca){
        this._marca = marca;
    }
    get marca (){
        return this._marca;
    }

    set model (model){
        this._model = model;
    }
    get model (){
        return this._model;
    }

    set dataMatriculacio (dataMatriculacio){
        this._dataMatriculacio = new Date(dataMatriculacio);
    }
    get dataMatriculacio (){
        return this._dataMatriculacio;
    }
    veureParcial(){
        return "Color: "+this._color+" Marca: "+this._marca+" Model: "+this._model;
    }
    toString()
    {
        return "Matricula: "+this._matricula + this.veureParcial() +" Data Matriculacio: "+ this._dataMatriculacio.toLocaleDateString();
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