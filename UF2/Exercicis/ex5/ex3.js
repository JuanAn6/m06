String.prototype.checkNumbers = function ()
{
    let numbers = false;
    let array = this.split('');
    
    // array.forEach(function (e,i,a){
    //     if(!isNaN(parseInt(e))) numbers = true;
    // });

    let i = 0;
    do{
        if(!isNaN(parseInt(array[i]))) numbers = true;
        i++;
    }while(!numbers);

    return numbers;
}