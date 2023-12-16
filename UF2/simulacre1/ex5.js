function f_ex5(cadena){
    if(arguments.length != 1 && typeof(arguments[0])=='string'){
        return "ERROR";
    }

    let arr = cadena.split("");
    let resultat = [];

    arr.forEach(function(e,i,a){
        e = e.toUpperCase();
        resultat.push(arr.pocicioTap(e));
    });

    let resultatFinal = "";
    
    resultat.forEach(function(e,i,a){
        if(e[0] != " " && e[0] != -1){
            for(let i = 0; i < e[0]; i++){
                resultatFinal += "*";
            }
            resultatFinal += " ";
            for(let i = 0; i < e[1]; i++){
                resultatFinal += "*";
            }
            resultatFinal += " ";
        }else if(arr[i] == " "){
            resultatFinal += " ";
        }else{
            resultatFinal += arr[i];
        }
        
    });

    return resultatFinal;
}

Array.prototype.pocicioTap = function (e){
    const MAT = [['A','B','C','D','E'],['F','G','H','I','J'],['L','M','N','O','P'],['Q','R','S','T','U'],['V','W','X','Y','Z']];

    let i = 0;
    while(i < MAT.length){
        let j = 0;
        while (j < MAT.length){
            if(e == MAT[i][j]){
                return [i+1,j+1];
            }
            j++;
        }
        i++;
    }
    
    if(i == MAT.length){
        return [-1,-1];
    }
}
