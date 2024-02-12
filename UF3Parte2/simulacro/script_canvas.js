document.addEventListener('DOMContentLoaded', f_main);

const COLORS = ['tomato', 'sandybrown', 'gold', 'lawngreen', 'skyblue', 'royalblue','mediumpurple'];

const MIDA = 18;
function f_main()
{
    
    let c = document.querySelectorAll('canvas')[0];
    let ctx = c.getContext('2d');

    for(let i = 1; i < 8; i++){
        ctx.beginPath();

        ctx.arc(c.width/2, c.height, (i*MIDA), 1*Math.PI, 2*Math.PI);
        ctx.strokeStyle = COLORS[i-1];
        ctx.lineWidth = MIDA;
        ctx.stroke();

        ctx.closePath();
    }


    let c2 = document.querySelectorAll('canvas')[1];
    let ctx2 = c2.getContext('2d');

    let radiIni = 0;
    let radiFi = 130;
    let puntCentral = [c2.width/2, c2.height];
    let puntFinal = puntCentral;
    let degradat = ctx2.createRadialGradient(...puntCentral, radiIni, ...puntFinal, radiFi);
    let num = 0 ;
    COLORS.forEach((e,p,a) => {
        degradat.addColorStop(num,e);    
        num += 1/COLORS.length;
    });
    ctx2.beginPath();
    ctx2.arc(c2.width/2, c2.height, radiFi , 1*Math.PI, 2*Math.PI);
    ctx2.fillStyle = degradat;
    ctx2.fill();
    ctx2.closePath();
}