Date.prototype.partA = function(){

    let dia = this.getDate();
    let mes = this.getMonth()+1;
    let any = this.getFullYear() % 100;
    
    if(dia > mes && dia > any &&mes > any){
        return -1;
    }else if (any > mes && any > dia && mes > dia){
        return 1;
    }else{
        return 0;
    }
}

Date.partB = function(){
    let d = new Date();
    d.setMilliseconds(0);
    d.setSeconds(0);
    d.setMinutes(0);
    d.setHours(0);
    return d;
}