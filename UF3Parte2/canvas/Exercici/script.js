document.addEventListener('DOMContentLoaded', f_main);

function f_main()
{
    f_pintar();

    window.addEventListener('resize', f_pintar);
}

function f_pintar()
{
    let canvas = document.getElementById('canvas');
    canvas.style = 'border: 1px solid black';

    x = window.innerWidth - 35;
    y = window.innerHeight - 35;
    canvas.width = x;
    canvas.height = y;
    
    //console.log('x: '+x+' y: '+y);

    ctx = canvas.getContext('2d');

    ctx.beginPath(); 
    ctx.arc(x/2, y/2, x*0.1, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke(); 
    ctx.closePath();

    ctx.fillStyle = 'blue';
    ctx.font = 'bold '+x*0.04+'px Menlo';
    ctx.fillText("My TEXT!",x*0.1,y*0.2);

    ctx.beginPath(); 
    ctx.strokeStyle='red';
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y); 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); 
    ctx.strokeStyle='red';
    ctx.lineWidth = 2;
    ctx.moveTo(x, 0);
    ctx.lineTo(0, y); 
    ctx.stroke();
    ctx.closePath();
}