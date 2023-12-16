Date.prototype.meitat = function(d)
{
    let avui = new Date();
    let dif1 = Math.abs(avui - this);
    let dif2 = Math.abs(avui - d);

    if(dif1 < dif2){
        return this;
    }else if(dif2 < dif1){
        return d;
    }else{
        return -1;
    }
}

