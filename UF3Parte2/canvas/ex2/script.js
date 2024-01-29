document.addEventListener('DOMContentLoaded', f_main)

function f_main()
{
    let canvas = document.getElementById('canvas');
    canvas.style.border = '1px solid black';
    canvas.width = 400;
    canvas.height = 400;

    let ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "./back.jpg";

    img.onload = function(){
        ctx.beginPath(); 
        ctx.drawImage(img, 0, 0);
        ctx.closePath();
        f_cara(ctx);
    }
    
}

function f_cara(ctx)
{
    ctx.beginPath(); 
    ctx.arc(200, 200, 150, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke(); 
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); 
    ctx.arc(150, 150, 20, 0, 2 * Math.PI);
    ctx.lineWidth = 0;
    ctx.stroke(); 
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); 
    ctx.arc(250, 150, 20, 0, 2 * Math.PI);
    ctx.lineWidth = 0;
    ctx.stroke(); 
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); 
    ctx.arc(160, 140, 5, 0, 2 * Math.PI);
    ctx.lineWidth = 0;
    ctx.strokeStyle = 'white';
    ctx.stroke(); 
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); 
    ctx.arc(260, 140, 5, 0, 2 * Math.PI);
    ctx.lineWidth = 0;
    ctx.strokeStyle = 'white';
    ctx.stroke(); 
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); 
    ctx.arc(200, 220, 50, 0.2 * Math.PI , 0.8 * Math.PI);
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'yellow';
    ctx.stroke(); 
    ctx.fill();
    ctx.closePath();
}