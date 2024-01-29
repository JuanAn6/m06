document.addEventListener('DOMContentLoaded',function ()
    {
        let canvas = document.getElementById("canvas");
        console.info(canvas.width,' ',canvas.height)
        canvas.width = 400;
        canvas.height = 400;
        let ctx = canvas.getContext("2d");

/**
  beginPath()

  Una vegada invocat el mètode beginPath a continuació es poden combinar els següents mètodes per crear la forma desitjada:
  moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), i arc()

  Cal utilitzar el mètode stroke() o bé el fill() al finalitzar la forma perquè es dibuixi al canvas.
  Aquest mètode és útil per poder tornar a dibuixar de nou una nova figura dins el llenç, 
  sense que tingui res a veure amb les propietats de la figura anteriorment dibuixada.
*/


// FASE 1: Triangle tot negre (color x defecte)
		ctx.beginPath(); // inici d'un dibuix
		ctx.moveTo(75, 50);  // mou el "llàpis" al punt indicat
		ctx.lineTo(100, 75); // defineix una línia desde un punt especificat anteriorment fins el punt indicat.
		ctx.lineTo(100, 25);
		ctx.fill(); // pintar

// FASE 1: POLIGON TANCAT, A PARTIR D'UNIÓ DE LÍNIES        
        ctx.beginPath();
        ctx.strokeStyle='green'; // valor x defecte negre
        ctx.lineWidth = 10;// gruix de la línia, valor x defecte 1
        ctx.moveTo(200,50); // si es comenta aquesta línea es dibuixa un triangle
        ctx.lineTo(250,150);
        ctx.lineTo(300,100);
        ctx.lineTo(250,50);
        ctx.closePath();
        ctx.stroke(); // pintar línia contron
// FASE 2: EMPLENAT DEL POLIGON ANTERIOR
        setTimeout(function ()
        {            
            ctx.fillStyle='palegreen'
            ctx.fill(); // pintar a dins
        }, 1000);

//FASE 3: LÍNEA HORITZONTAL,     
        setTimeout(function()
        {
            ctx.beginPath();
            ctx.strokeStyle="blue";
            ctx.lineWidth=3;
            //ctx.lineTo(50,150);
            ctx.moveTo(50,150);
            ctx.lineTo(100,150);
            ctx.stroke();//  pintar 
            ctx.closePath();
			
        },2000);
//FASE 4: LÍNEA HORITZONTAL, pintada de dreta a esquerra
        setTimeout(function()
        {
            ctx.beginPath();
            ctx.strokeStyle="red";
            ctx.lineWidth=3;
            ctx.moveTo(200,250);
            ctx.lineTo(100,250);
            ctx.closePath();
            ctx.stroke();
        },3000);
//FASE 4: REPINTAR A SOBRE LA LÍNEA ANTERIOR, una línea més estreta
        setTimeout(function()
        {
            ctx.beginPath();
            ctx.strokeStyle="white";
            ctx.lineWidth=2;
            ctx.moveTo(200,250);
            ctx.lineTo(100,250);
            ctx.closePath();
            ctx.stroke();
        },4000);
//FASE 5: línea diagonal        
        setTimeout(function()
        {
            ctx.beginPath();
            ctx.strokeStyle="peru";
            ctx.lineWidth=4;
            ctx.moveTo(50,50);
            ctx.lineTo(300,275);
            ctx.closePath();
            ctx.stroke();
        },5000);
  /**
  *
    lineCap: Assigna o retorna com serà l’estil del final de la línia
    context.lineCap="butt|round|square";
    El valor per defecte és “butt”, que correspon a acabat amb “square”.
    
    Visitar per veure un exemple:
    http://w3.unpocodetodo.info/canvas/lineCap.php
    
    lineJoin: Assigna o retorna el tipus de cantonada que es fa quan s’ajunten dues línies
  	context.lineJoin="bevel|round|miter";
    El valor per defecte és “miter” el qual està afectat per la propietat miterLimit
    
    Visitar per veure un exemple:
    http://w3.unpocodetodo.info/canvas/lineJoin.php
  */
    
  
    });
