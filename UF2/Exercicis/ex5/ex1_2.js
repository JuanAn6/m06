Array.prototype.canvi = function(p1,p2)
{
    if(arguments.length != 2 || arguments[0] == arguments[1] || arguments[0] < 0 || arguments[1] < 0 || isNaN(arguments[0]) || isNaN(arguments[1]) || parseInt(arguments[1])!= arguments[1] || parseInt(arguments[0])!= arguments[0]){
        return false;
    }
    if(arguments[0] >= this.length || arguments[1] >= this.length){
        return false;
    }

    let aux = this[p1];
    this[p1] = this[p2];
    this[p2] = aux;
    return true;
}