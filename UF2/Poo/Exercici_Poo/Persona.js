class Persona {
    constructor (_nom, _cognom1, _cognom2 = null, _edat, _sexe, _estat_civil)
    {
        _edat = Number(_edat);
        if(_nom == "" || _cognom1 == "" || _edat<=0 || _estat_civil == "")
        {
            throw new Error("No es pot crear una persona amb dades invalides");
        }else{
            this._nom = _nom;
            this._cognom1 = _cognom1;
            if(_cognom2 == undefined){
                this._cognom2 = null;
            }else{
                this._cognom2 = _cognom2;
            }
            this._edat = _edat;
            this._sexe = _sexe;
            if(!this.validarEstat(_estat_civil)){
                throw new Error("Estat Civil errroni");
            }
        }

        
    }

    validarEstat(estat)
    {
        if(estat == "solter" || estat == "casat" || estat == "separat" || estat == "divorciat" || estat == "vidu"){
            this._estat_civil = estat.toUpperCase();
            return true;
        }else{
            return false;
        }
    }

    toString()
    {
        if(this._cognom2 != null){
            return "Nom: "+this._nom+" cognoms: "+this._cognom1 + " " +this._cognom2+" edat: "+this._edat+" estat civil: "+this._estat_civil;
        }else{
            return "Nom: "+this._nom+" cognoms: "+this._cognom1 + " edat: "+this._edat+" estat civil: "+this._estat_civil;
        }
    }
    
}

document.addEventListener("DOMContentLoaded", f_main);

function f_main()
{
    document.getElementById("botoPer").addEventListener("click", f_afegirP);
}

function f_afegirP()
{
    let nom = document.getElementById("nomP").value;
    let cognom1 = document.getElementById("cognom1P").value;
    let cognom2 = document.getElementById("cognom2P").value;
    let edat = document.getElementById("edatP").value;
    let radioButtons = document.getElementsByName("sexeP");
    let sexe = "";
    if(radioButtons[0].checked){
        sexe = "D";
    }else if(radioButtons[1].checked){
        sexe = "H";
    }
    //let sexe = document.querySelectorAll('input[name="sexeP"]:checked').value;

    let estat_civil = document.getElementById("estatCivilP")[document.getElementById("estatCivilP").selectedIndex].value;
    console.log(estat_civil);

    let p;
    try{
        p = new Persona(nom, cognom1, cognom2, edat, sexe, estat_civil);
        console.log(p.toString());
    }catch(e){
        console.log("perosna malament + " + e);
    }
}