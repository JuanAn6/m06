class LLibre{
    constructor(t,aut,pt){
        this.autor=aut; // invoco el setter autor
        this.titol= t; // invoco el setter titol
        this.pTotals = pt;// invoco el setter ptotals
        this._pllegides=0; // inicialització de pllegides
    }

    set autor(a)
    {
        //console.info(a,' ',a.trim()=="",' ',a==null,'  ',a==undefined);
        if(a==null || a==undefined || a.trim()==""){
            this._autor="Desconegut";
        }else if (typeof(a)!=='string'){ // ===
            throw new Error("autor no vàlid");
        } else{
            this._autor=a;
        }
    }
    set titol(t)
    {
        if (typeof(t)!=='string' || t.trim().length==0){ // ===
            throw new Error("títol no vàlid");
        }
        this._titol = t.toUpperCase();
    }
    set pTotals(pt)
    {
        if (!isNaN(Number(pt)) && pt>0 && pt == parseInt(pt))
            this._ptotals=Number(pt);
        else
            throw new Error("pàgines totals no vàlides");
    }

    get titol()
    {
        return this._titol;
    }
    get autor()
    {
        return this._autor;
    }
    get pTotals()
    {
        return this._ptotals;
    }
    get pLlegides()
    {
        return this._pllegides;
    }
/*
 Si no s’indica paràmetre cal fer que l’objecte ja s’ha llegit tot,
  en cas contrari cal validar que el paràmetre és numèric,
   positiu i menor o igual que les pàgines totals del llibre.
    Si el valor no és vàlid, el mètode no farà res. 
    En cas que ja s'hagin llegit pàgines i el valor indicat + 
    les pàgines llegides superi el total, s'assignarà directament el total com a pàgines llegides.
*/
llegir(){
        console.info(' començo a llegir algunes pàgines del llibre...')
        if(arguments.length==0){
            this._pllegides=this._ptotals;
        }else{
            console.info('.... ',this._titol);
            if(!isNaN(arguments[0]) && arguments[0]>0 && arguments[0]<=this._ptotals){
                if((Number(arguments[0])+Number(this._pllegides))>Number(this._ptotals)){
                    this._pllegides=Number(this._ptotals);
                }else{
                    this._pllegides += Number(arguments[0]);
                }
            }
        }
        console.info("Total: "+this._ptotals);
        console.info("Llegaides: "+this._pllegides);
    }

   toString()
   {
    return "LLIBRE: "+this._titol+" , autor: "+this._autor+" Pàg. total i llegides: "+this._ptotals+" / "+this._pllegides;
   }
}