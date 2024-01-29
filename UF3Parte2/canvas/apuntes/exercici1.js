document.addEventListener('DOMContentLoaded', f_main)
let x = 1;
let control = true;
let mida = 200;
let temp;

function f_main()
{
    // let input = document.createElement('input');
    // input.type = 'text';
    // input.id = 'mida';
    // input.placeholder = 'Mida del canva'
    // input.addEventListener('input', ()=>{
        
    //     mida = document.getElementById('mida').value;
    //     let canvas = document.getElementById('canvas');
    //     if(canvas != null){
    //         canvas.remove();
    //         f_crearCanva()
    //     }else{
    //         f_crearCanva();
    //     }
    // });

    // document.body.lastChild.after(input);
    f_crearCanva();
}

function f_crearCanva()
{
    let canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = mida;
    canvas.height = mida;
    canvas.style.border = '1px solid black';

    document.body.lastChild.after(canvas);
    clearInterval(temp);
    temp = setInterval(f_pintar, 10, canvas)
 
}

function f_pintar(canvas)
{
    f_limpiar(canvas)
    
    let ctx = canvas.getContext("2d");   
    ctx.beginPath();  
    ctx.rect(0,0,x,x);
    ctx.fillStyle  = 'blue'; // assignar color de l'interior
    ctx.fillRect (0,0,x,x);
    ctx.closePath();
    
    if(x >= mida){
        control = false;
    }
    
    if(x <= 0){
        control = true;
    }

    if(control){
        x+=1;
    }else{
        x-=1;
    }
    
}

function f_limpiar(canvas)
{
    canvas.width=canvas.width;
}