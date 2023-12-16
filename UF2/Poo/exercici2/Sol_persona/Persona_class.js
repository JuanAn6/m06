class Persona{
    constructor(_nom,_cognom1,_cognom2 = null,_dataNaix,_sexe,_estatcivil){
            this.nom =_nom; // invocar setter
            this.cognom1=_cognom1; // invocar setter
            this.cognom2=_cognom2; // invocar setter
            this.dataNaix=_dataNaix; // invocar setter
            this.sexe=_sexe; // invocar setter
            this.validarEstat(_estatcivil);
    }

    get nom()
    {
        return this._nom;
    }
    set nom(_nom)
    {
        if (_nom.trim().length ==0)
            throw new Error("Nom no vàlid!");
        this._nom = _nom;
    }
    get cognom2()
    {
        return this._cognom2;
    }
    set cognom2(_cognom2)
    {
        this._cognom2 = _cognom2;
    }
    get cognom1()
    {
        return this._cognom1;
    }
    set cognom1(_cognom1)
    {
        if (_cognom1.trim().length==0)
            throw new Error("CogNom1 no vàlid!");
        this._cognom1 = _cognom1;
    }
    get dataNaix()
    {
        return this._dataNaix;
    }
	// TODO: modifica camp edat per camp datade naixement que ha de ser del passat
    set dataNaix(_dataNaix)
    {
        let d = new Date(_dataNaix);
        if (d == 'Invalid Date' || d > (new Date()))
            throw new Error("Data naixement no vàlida");
        this._dataNaix = d;
    }
    get sexe()
    {
        return this._sexe;
    }
    set sexe(_sexe)
    {
        if (_sexe== 'D' || _sexe=='H')
            this._sexe = _sexe;
        else
            throw new Error("Sexe no vàlid");
    }
    get estatcivil()
    {
        return this._estatcivil;
    }
    set estatcivil(_estatcivil)
    {
        this.validarEstat(_estatcivil);
    }

    validarEstat(estat)
    {//Solter, Casat, Separat, Divorciat o Vidu
        let options = document.getElementById('estatCivilP').options;
        //console.info(options);
        let estats = [];
        // TODO: forEach
        // for (const radioButton of radioButtons) {
        for (let i=1;i<options.length;i++)
        {
            estats.push(options[i].value);
        }
        // for (let e of options )  {
        //     if (e.length!=0) // per saltar l'opció buida
        //         estats.push(e.value);
        //     //console.info(e);
        // }
        
        if (estats.includes(estat))
            this._estatcivil = estat.toUpperCase();
        else
            throw new Error("Estat civil no vàlid");
        
        /* ALTERNATIVAMENT
        if (estat=="solter" || estat=="casat" ||  estat=="separat" ||  estat=="divorciat" ||  estat=="vidu")
            return true;
        else
            return false;
            */
    }

    toString()
    {
        let text='Persona: ';
        text +=" Nom: "+ this._nom;
        text +=" Cognoms: "+ this._cognom1;
        if(this._cognom2!="" && this._cognom2!=null)text +=" "+this._cognom2;
        text +=" Data naixement: "+ this._dataNaix.toLocaleDateString();
        text +=" Sexe: "+ this._sexe;
        text +=" Estat Civil: "+ this._estatcivil;
        return text;
    }
  }