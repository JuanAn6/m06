document.addEventListener('DOMContentLoaded',function () {

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    
    
// CERCLE BLANC
    ctx.beginPath(); 
    ctx.arc(100, 75, 50, 0, 2 * Math.PI); 
    // 100,75 punt central del cercle
    // 50 pixels de radi
    //  0 punt inicial del cercle
	
    //2*Math.PI definir un cercle, si el paràmetre anterior és 0
    // per fer el cercle complet: del punt 0 al 2*Math.PI
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke(); // dibuixar el contorn
    ctx.fillStyle = 'white';
    ctx.fill(); //per pintar l'interior del cercle
    
// CERCLE VERMELL
	setTimeout( function ()
    {
        ctx.beginPath(); 
        ctx.arc(100, 150, 25, 2 * Math.PI, 0);
        // 100,150 punt central del cercle
        // 25 pixels de radi
        // 0* Math.PI = 0 punt inicial del cercle
        ctx.fillStyle = 'red';
        ctx.fill();
    },1000);

// CERCLE retallat LILA	
    setTimeout( function ()
    {
        ctx.beginPath();
        ctx.arc(200, 75, 25, 0.5* Math.PI, 2 * Math.PI);
        // 200,75 punt central del cercle
        // 2* Math.PI indica el punt final del cercle ( les 3 h. d'un rellotge)
        // 0.5*Math.PI indica on es comença a dibuixar el cercle ( les 6h. d'un rellotge)
        ctx.fillStyle = 'purple'
        ctx.fill();
    },2000);

// SEMI CERCLE BLAU > PETIT
    setTimeout( function ()
    {
        ctx.beginPath(); //
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'Turquoise'; // color del contorn
        ctx.arc(200, 150, 25, 1.5* Math.PI, 2.5 * Math.PI);
		ctx.stroke(); // pintar el contorn
    },3000);
// SEMI CERCLE VERD GRAN
    setTimeout( function ()
    {
        ctx.beginPath(); 
        ctx.strokeStyle = 'green';
        ctx.arc(100, 200, 50, 0* Math.PI, 1* Math.PI);
        ctx.stroke();
    },4000);
// SEMI CERCLE vermell GRAN
	setTimeout( function ()
    {
        ctx.beginPath(); 
        ctx.strokeStyle = 'SandyBrown'
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.lineWidth = 7;
        ctx.arc(200, 250, 50, 1* Math.PI, 2* Math.PI);
        ctx.fill();// omplir interior
        ctx.stroke(); // pintar marge
        
    },5000);
	
// SEMI CERCLE ROSA PETIT C	
	setTimeout( function ()
    {
        ctx.beginPath(); 
        ctx.strokeStyle = 'salmon'
        ctx.arc(250, 50, 25, 0.5* Math.PI, 1.5* Math.PI);
        ctx.stroke();
    },6000);

// SEMI CERCLE blau GRAN superposat
setTimeout( function ()
    {
        ctx.beginPath(); 
        ctx.arc(250, 250, 50, 1* Math.PI, 1.5* Math.PI);
        ctx.fillStyle = "rgba(0,0,200,0.5)";
        ctx.fill();
        // triangle
        ctx.beginPath(); 
        ctx.moveTo(200, 250);  
        ctx.lineTo(250, 200); 
        ctx.lineTo(250, 250);
        ctx.fill(); // pintar
        ctx.lineWidth = 1;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.stroke();
    },7000);
});