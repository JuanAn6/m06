String.prototype.quantitat = function (lletra)
{
    if(arguments.length != 1 || String(arguments[0]).length != 1) return -1;

    let paraula = this.toLowerCase();
    lletra = lletra.toLowerCase();
    array = paraula.split("");
    let contador = 0;
    array.forEach(function (e,i,a) {
        if(e == lletra) contador++;
    });
    return contador;
}