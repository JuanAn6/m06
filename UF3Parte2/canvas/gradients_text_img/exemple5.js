document.addEventListener('DOMContentLoaded',function () {

// zona 1r canvas 300x300 de l'esquerra
// QUADRAT SUPERIOR ESQUERRA
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    let degradat = ctx.createLinearGradient(0,0,0,100); // VERTICAL
    degradat.addColorStop(0,'white'); // blanc inicial
    degradat.addColorStop(1,'red'); // vermell final
    ctx.fillStyle = degradat;
    ctx.fillRect(0,0,100,100);
    
// QUADRAT SUPERIOR 2N ESQUERRA	
    degradat = ctx.createLinearGradient(0,0,100,100); // diagonal
    degradat.addColorStop(0.5,'black'); 
    degradat.addColorStop(0.7,'yellow');
    degradat.addColorStop(1,'green');
    ctx.fillStyle = degradat;
    ctx.fillRect(100,0,100,100);
    
// QUADRAT INFERIOR ESQUERRA	
    degradat = ctx.createLinearGradient(0,0,100,0); // HORITZONTAL
    // 0,0 on comença el degradat
    // 100,0 on acaba el degradat
    degradat.addColorStop(0,'black'); 
    degradat.addColorStop(0.5,'red');
    degradat.addColorStop(1,'white');
    ctx.fillStyle = degradat;
    ctx.fillRect(0,200,100,100);
    // 0,200 punt on començar a pintar el rectangle.
    // 100,100 ample i alt del rectangle
    
// QUADRAT INFERIOR DRET	
    degradat = ctx.createLinearGradient(100,0,0,100); // diagonal
    degradat.addColorStop(0,'blue'); 
    degradat.addColorStop(1,'red');
    ctx.fillStyle = degradat;
    ctx.fillRect(200,200,100,100);

// zona 2n canvas 300x300 de la dreta
    c = document.getElementById("canvas2");
    ctx = c.getContext("2d");
    degradat = ctx.createLinearGradient(0,0,300,0); // HORITZONTAL
    // 0,0 on comença el degradat
    // 300,0 on acaba el degradat , per fer-lo horitzontal
    degradat.addColorStop(0,'magenta'); 
    degradat.addColorStop(0.5,'blue');
    degradat.addColorStop(1,'red');
    let degradatIntern = ctx.createLinearGradient(0,0,0,300);  // VERTICAL
    degradatIntern.addColorStop(0,'red'); 
    degradatIntern.addColorStop(0.2,'orange');
    degradatIntern.addColorStop(0.3,'yellow');
    degradatIntern.addColorStop(0.5,'green'); 
    degradatIntern.addColorStop(0.7,'blue');
    degradatIntern.addColorStop(0.9,'blueViolet');
    degradatIntern.addColorStop(1,'indigo');
    
    ctx.fillStyle = degradatIntern; // estil de l'interior de la figura
    ctx.fillRect(0,0,300,300); // pintar el rectangle
    ctx.strokeStyle = degradat;
    ctx.lineWidth = 30;
    ctx.strokeRect(0,0,300,300)//pintar el marge degradat
});