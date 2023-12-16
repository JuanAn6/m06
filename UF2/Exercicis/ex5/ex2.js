String.prototype.checkCase = function()
{
    // let todasMinusculas = true;
    // let todasMajusculas = true;
    // let mix = 0;

    // let paraula = this.split('');
    
    // paraula.forEach( function (e,i,a) {
    //     if(e.match("[A-Z]")) todasMinusculas = false;
    //     if(e.match("[a-z]")) todasMajusculas = false;
    // });

    // if(!todasMinusculas && !todasMajusculas){
    //     return "mix";
    // }else if(todasMinusculas){
    //     return "Minuscules";
    // }else{
    //     return "Majuscules";
    // }

    if(arguments.length != 0) return "error";
    if(this == this.toLowerCase()) return "Minuscules";
    if(this == this.toUpperCase()) return "Majuscules";
    return "mix";
}