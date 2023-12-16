document.addEventListener("DOMContentLoaded", f_main);

function f_main(){
    
        // JOCS DE PROVA Exercici 1
    let jp1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];    
    let jp2 = new Array("Adverbi","conjunció","interjecció","Li","ha","sortit","bé","Bé","ha","dit","que","vindria","Bé","bé","Nom","masculí","pl","béns","satisfacció","hisenda","Desitjar","el","bé","de","tothom","Béns","immobles","be","Nom","masculí","pl","bens","anyell","Nom","femení","pl","bes","nom","de","la","lletra","b","déu","Nom","masculí","pl","déus","divinitat","ésser","suprem","deu","Altres","usos","pl","deus","numeral","10","font","verb","deure","és","Verb","ser","es","Altres","usos","pronom","feble","article","salat","plural","de","la","lletra","e","mà","Nom","femení","pl","mans","terminació","del","braç","ma","Possessiu","àton","pl","mes","Ma","mare","més","Adverbi","quantitatiu","N'hi","ha","més","És","més","difícil","que","abans","mes","Altres","usos","nom","masculí","pl","mesos","part","de","l'any","conjunció;","plural","del","possessiu","ma","món","Nom","masculí","pl","mons","conjunt","de","totes","les","coses","creades","la","Terra","mon","Possessiu","àton","pl","mos","Mon","pare","pèl","Nom","masculí","pl","pèls","filament","que","creix","a","la","pell","pel","Contracció","pl","pels","de","per","i","el","què","Relatiu","precedit","de","preposició","interrogatiu","exclamatiu","nom","pl","quès","El","títol","amb","què","s'ha","traduït","Què","ha","fet","avui?","Explica'm","què","ha","fet","Què","dius","ara","Voler","saber","el","què.","que","Altres","usos","relatiu","conjunció","quantitatiu","El","càrrec","que","ara","té","Sembla","que","plou","Que","bonic","sé","Verb","saber","se","Pronom","feble","No","se","sap","on","és","sí","Adverbi","afirmatiu","Sí","és","cert");
    let jp3 = [0,0,0,1,1,1,1,1,1,12,40,60,60,40,12];
    let jp4 = [-12,0,4,7,8];
    /*
        SOLUCIÓ
        la moda és:  a  (5 vegades)
        la moda és:  pl  (13 vegades)
        la moda és:  empat, una de les modes és: 12  (2 vegades)
        la moda és:  empat, una de les modes és: -12  (1 vegades)
    */

    


    f_totesLesModes(jp1);
    f_moda(jp1);

    document.getElementById('boto2').addEventListener('click',f_ex2);
    document.getElementById('boto3').addEventListener('click', f_ex3);
    document.getElementById('boto4').addEventListener('click', f_ex4);
    document.getElementById('boto5').addEventListener('click', f_ex5);
}

function f_totesLesModes(a){
    let modes = [];
    let frequencies = [];

    a.forEach(function (e, i , ac){
        if(!modes.includes(e)){
            modes.push(e);
            frequencies[modes.length-1] = 1;
        }else{
            modes.forEach(function (e2, j){
                if(e2 == e){
                    frequencies[j]++;
                }
            });
        }
    });

    let maxRepes = Math.max(...frequencies);

    a.forEach(function (ele, i, arc) {
        if(frequencies[i] == maxRepes){
            console.log(ele+" es una de les modes");
        }   
    });

}

function f_moda(a){
    a.sort();
    let empat = false;
    let q = 1; //vegades que es repeteix
    let valor = a[0];
    let qMax = 0;

    console.log(a);

    valor = a[0];
    for(let i = 1 ; i <= a.length; i++){
        if (i < a.length && a[i-1] == a[i]){
            q++;
        }else{
            if(qMax <= q){
                if(qMax == q){
                    empat = true;
                }else{
                    empat = false;
                }
                valor = a[i-1];
                qMax = q;
            }
            q = 1;
        }
    }
    console.log("Moda: "+ valor+ " Quantitat de cops: "+ qMax+ " Empat: "+empat);
}

function f_ex2(){
    p1 = document.getElementById('caixa1').value;
    p2 = document.getElementById('caixa2').value;
    let sortida = "";
    let max_qt = 0;
    
    if (p1.includes(' ') || p2.includes(' ')){
        return;
    }
    
    if(p1.length > p2.length){
        max_qt = p2.length;
    }else{
        max_qt = p1.length;
    }

    let text = p1.split('');
    text.reverse();
    p1 = text.join('');

    let text2= p2.split('');
    text2.reverse();
    p2 = text2.join('');

    let i = 0;
    while(i < max_qt && p1[i] == p2[i]){
        sortida += ""+p1[i];
        i++;
    }
    console.log(sortida.length);
    if(sortida.length != 0){
        let p = sortida.split('');
        p.reverse();
        sortida = p.join('');
        console.log(sortida);
        document.getElementById('paragraf1').textContent = ""+sortida;

    }else{
        document.getElementById('paragraf1').textContent = "no tenen res igual";
    }
    
}

/*
Una gallina xica, tica, mica, camacurta i ballarica, va tenir sis fills xics, tics, mics, camacurts i ballarics. Si la gallina no hagués estat xica, tica, mica, camacurta i ballarica, els seus fills no haurien estat xics, tics, mics, camacurts i ballarics.
*/
function f_ex3(){
    p1 = document.getElementsByName('frase')[0].value;
    p2 = document.getElementsByName('paraula')[0].value;
    
    
    let eliminar = ['.',',',':',';','!','?'];
    paraules = p1;
    eliminar.forEach(function (e){
        paraules = paraules.split(e);
        console.log(e);
        console.log(paraules);
        paraules = paraules.join('');
    });

    paraules = paraules.split(' ');

    let i = 0;
    paraules.forEach(function (e){
        if(e.toUpperCase() == p2.toUpperCase()){
            i++;
        }
    });

    console.log(paraules);

    document.getElementById('qP').textContent = "La paraula: "+p2+" es repeteix: "+i;
}

/*
    const cent50 = 50;
    const cent20 = 20;
    const cent10 = 10;
    const cent5 = 5;
    const cent2 = 2;
    const cent1 = 1;
    
    const euro = 1;
    const dosEuro = 2;
    const bi5 = 5;
    const bi10 = 10;
    const bi20 = 20;
    const bi50 = 50;
    const bi100 = 100;
    const bi200 = 200;
    const bi500 = 500;
    */

function f_ex4(){
    
    let diners = Number(document.getElementById('import').value);

    if(isNaN(diners) || diners!=parseInt(diners) || diners <= 0){
        return;
    }


    let valors = [500,200,100,50,20,10,5,2,1];
    let bitllets = [];
    let residu = 0;
        
    valors.forEach(function (ele,i){
        if(diners >= ele){
            residu = diners % ele;
            bitllets[i] = Math.trunc(diners / ele);
            diners = residu;
        }else{
            bitllets[i] = 0;
        }
    });
    
    let sortida = "";
    let tds = document.getElementsByTagName('td');
    let j = 18;
    for(let i = 0; i < valors.length; i++){
        sortida = "Quantitat de bitllets de "+valors[i]+": "+bitllets[i];
        console.info(sortida);
        tds[j].textContent = bitllets[i];
        j += 2;
    }
}

function f_ex5(){
    let l1 = document.getElementById('linia1').value;
    let l2 = document.getElementById('linia2').value;
    let l3 = document.getElementById('linia3').value;
    let l4 = document.getElementById('linia4').value;

    let preu = 0;
    let qtLinia = 0;
    

    if(l1 != 0){

        //l1 = l1.split(' ',10);
        l1 = l1.split(' ');
        if(l1.length == 10){
            qtLinia ++;
            preu += 4;
        }else if (l1.length > 10){
            alert("Supera el limit de 10 paraules");
        }else{
            preu += (l1.length * 0.5);
        }

        console.log(l1);

    }

    if(l2 != 0){
        //l2 = l2.split(' ',10);
        l2 = l2.split(' ');
        if(l2.length == 10){
            qtLinia ++;
            preu += 4;
        }else if (l2.length > 10){
            alert("Supera el limit de 10 paraules");
        }else{
            preu += (l2.length * 0.5);
        }

        console.log(l2);

    }

    if(l3 != 0){
        //l3 = l3.split(' ',10);
        l3 = l3.split(' ');
        if(l3.length == 10){
            qtLinia ++;
            preu += 4;
        }else if (l3.length > 10){
            alert("Supera el limit de 10 paraules");
        }else{
            preu += (l3.length * 0.5);
        }

        console.log(l3);

    }

    if(l4 != 0){
        //l4 = l4.split(' ',10);
        l4 = l4.split(' ');
        if(l4.length == 10){
            qtLinia ++;
            preu += 4;
        }else if (l4.length > 10){
            alert("Supera el limit de 10 paraules");
        }else{
            preu += (l4.length * 0.5);
        }

        console.log(l4);

    }


    if(qtLinia > 3){
        preu = preu * 0.9;
    }
    
    console.log("Preu: "+preu);

    document.getElementById('cost').textContent = "Preu: "+preu;

}