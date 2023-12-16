class Cotxe {
    constructor(matricula,color,marca = 'sense',model,dataM)
    {
        this.matricula = matricula; // invocaci� del setter
        this.color = (color.trim().length==0?'desconegut':color);// invocaci� del setter
        this.marca = marca;// invocaci� del setter
        this.model = (model.length==0?'sense':model);// invocaci� del setter
        console.info(dataM);
        this.dataM = dataM;// invocaci� del setter
    }

/**
 * JSON de colors
 * En un arxiu a part perquè el seu manteniment fos més senzill.
 * [] = claudator / arrays
 * {} = llaves, claus / objectos JSON
 * 
 * colors = [ {'nom':'rojo'},{'nom':'azul electrico'},{'nom':'verde'}];
 * Array d'objectes
 * colors = ['rojo','azul electrico','verde'];
 * **/

    set matricula(mat)
    {
        let patro = /\d{4}[B-D|F-H|J-N|P-W|X-Z]{3}/;
        if (mat.trim()=='' || !patro.test(mat))
            throw new Error("matricula no vàlida");
        this._matricula = mat;
    }
    set color(c)
    {
        let colors = ['rojo','azul electrico','verde','violeta','lila','amarillo','rosa'];
        if (colors.includes(c))
            this._color = c;
        else
            throw new Error("color no vàlid")
    }
    set marca(m)
    {
        if (m.trim().length==0)
            throw new Error("marca no vàlida");
        this._marca = m; 
    }
    set model(model)
    {
        if (model.trim().length==0)
            throw new Error("model no vàlid");
        this._model = model;
    }
    set dataM(d)
    {
        if (new Date(d)== 'Invalid Date')
            throw new Error("data no vàlida");
        //console.info(d);
        //console.info(new Date(d));
        this._dataM = new Date(d);
        //console.info(this._dataM)
    }

    get matricula ()
    {
        return this._matricula;
    }
    get color ()
    {
        return this._color;
    }
    get marca ()
    {
        return this._marca;
    }
    get model ()
    {
        return this._model;
    }
    get dataM ()
    {
        return this._dataM;
    }

    toString()
    {
        return 'Cotxe-> MATRICULA:'+this._matricula+' '+this.veureParcial()+', Data Matricula: '+(this._dataM).toLocaleDateString();
    }

    veureParcial()
    {
        return 'Color: '+this._color+',Marca: '+this._marca+', Model: '+this._model;
    }
}