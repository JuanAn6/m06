document.addEventListener('DOMContentLoaded', f_main)

const JDPEX2 = [
    ['penjat','penjat'],
    ['penjat','aeioumlnpsc'],
    ['endevinalla','aeioumlnpsxfp'],
    ['jazz','aeoiu'],
    ['popurri','aeioumnlrr'],
    ['internet','aeiountrtr'],
    ['espantaocells','aeiousmnltpcfqrwt']
];

const MAX = 7;

function f_main(){
    JDPEX2.forEach(function(ele,index, array){
        console.log("Resultat: "+f_penjat(ele[0],ele[1])+ " ele: "+ele);
    });
}
function f_penjat(){
    
    if(arguments.length != 2)
        return "ERROR de parametres";

    if(!(typeof(arguments[0]) == 'string' && typeof(arguments[1]) == 'string'))
        return "ERROR de tipus";

    

    let lletres = arguments[1].split('');
    let paraula = arguments[0].split('');
    let errors = [];
    let endevinades = [];
    let qt = [];
    let resultat = "PENJAT";
    
    lletres.forEach(function (ll, i, larray){
        if(paraula.includes(ll) && !endevinades.includes(ll)){
            endevinades.push(ll);
            paraula.forEach(function (p, i, parray){
                if(p == ll){
                    qt++;
                }
            });
            if(qt == paraula.length) resultat = "SALVAT";
        }else{
            if(!errors.includes(ll))
                errors.push(ll);
            if(errors.length == MAX)
                resultat = "MORT";
        }
    });

    return resultat;
}