String.prototype.fill = function()
{
    if(arguments.length > 3 || arguments[0].length > 1 || typeof(argumnets[0])!='string') return "Error";
    if(arguments.length == 2 && (isNaN(arguments[1]) || arguments[1] < 0)) return "ERROR";
    if(arguments.length == 3 && (iNaN (arguments[2]) || arguments[2] < 0 || arguments[2] < arguments[1])) return "ERROR";

    let v = arguments[0];
    let posicioInici = 0;
    let posicioFinal = this.length;
    if(arguments.length == 2 ) posicioInici = arguments[1];
    if(arguments.length == 3) posicioFinal = arguments[2];

    let txt = this.split('');
    for(let i = posicioInici; i < posicioFinal; i++ ){
        txt[i] = v;
    }
    return txt.join('');
}