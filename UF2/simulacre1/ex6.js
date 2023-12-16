function f_mitjana(taula){
    let sum = 0;
    if(arguments[0] instanceof Array){
        if(arguments[0].length > 0){
            arguments[0].forEach(function (e,i,a){
                sum += e;
            });
            return sum/arguments[0].length;
        }else{
            return 0;
        }
    }
    return -1;
}