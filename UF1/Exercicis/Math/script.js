document.addEventListener('DOMContentLoaded',f_main);

function f_main(){
    //Exercici 1;
    document.getElementById('boto').addEventListener('click',f_exercici1);
    document.getElementById('boto2').addEventListener('click',f_exercici2);
    document.getElementById('boto3').addEventListener('click',f_exercici3);
    document.getElementById('boto4').addEventListener('click',f_exercici4);

}
function f_exercici1(){
    let num = document.getElementById('num').value; 
    
    array = num.split('.');
    num = Number(num);
    if(!isNaN(num)){
        if(array.length == 2){
            if(array[1].length == 3){
                let meitat = num/2;
                meitat = meitat.toFixed(2);
                let quadrat = Math.pow(num,2);
                let cub =  Math.pow(num,3);
                let arrel = Math.sqrt(num);
                let res = "Meitat: "+meitat+"<br>"+"Quadrat: "+quadrat+"<br>"+"cub: "+cub+"<br>"+"Arrel: "+arrel;

                document.getElementById('resultats').innerHTML = res;
            }else{
                document.getElementById('resultats').innerHTML = "Ha de tenir 3 decimals!";
            }
        }else{
            document.getElementById('resultats').innerHTML = "Ha de tenir 3 decimals";
        }
    }else{
        document.getElementById('resultats').innerHTML = "No es un numero!";
    }

    
    
}


function f_exercici2(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

    if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
        if(num1 != num2 && num1 != num3 && num2 != num3){
            let max = Math.max(num1,num2,num3);
            let min = Math.min(num1,num2,num3);
            document.getElementById('gran').textContent = "Maxim: "+max;
            document.getElementById('petit').textContent = "Minim: "+min;
        }else{
            document.getElementById('num1').textContent = "";
            document.getElementById('num2').textContent = "";
            document.getElementById('num3').textContent = "";
            alert("Numero repetit");
        }
    }else{
        alert("No es un numero");
    }

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function f_compare(a,b){
    return a-b
}

function f_exercici3(){
    let nums = [];
    /*
    for(let i = 0; i < 6;i++){
        nums[i] = getRandomInt(49)+1; //valors entre 1-49
    }

    let j = 0;
    while(j < nums.length-1){
        let i = 0;
        while (i < nums.length){
            if(nums[j] == nums[i] && i != j){
               nums[i] = getRandomInt(49)+1;
            }
            i++;
        }
        j++;
    }
    */

    while(nums.length < 6){
        let nou = getRandomInt(49)+1;
        if (!nums.includes(nou)){
            nums.push(nou);
        }
    }
    //ordenar la cadena
    nums.sort(f_compare);


    nums.push(getRandomInt(10)) //valors entre 0-9; 
    
    console.log(nums);

    let numsMostrar = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 10){
            numsMostrar[i] = "0"+nums[i];
        }else{
            numsMostrar[i] = ""+nums[i];
        }
    }
    numsMostrar[6] = "R: "+nums[6];
    console.log(numsMostrar);
    alert("Aposta generada: "+numsMostrar);


    let celes = document.getElementsByTagName('td');
    for(let i=0; i < 6; i++){
        celes[i].textContent = numsMostrar[i];
    }
    celes[7].textContent = numsMostrar[6];

}



function f_exercici4(){
    let nums = [];
    let al;
    for(let i = 0; i < 15 ; i++){
        al = getRandomInt(3);
        /*
        if(al == 0){
            nums[i] = "X";
        }else{
            nums[i] = al;
        }
        */
        //al == 0?nums[i] = "X":nums[i] = al;
        
        nums.push(al == 0?'X':al);
    }
    console.log(nums);
    document.getElementById('quiniela').textContent = "["+nums+"]";
}

