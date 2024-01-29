document.addEventListener('DOMContentLoaded',function () {

	let c = document.getElementById('canvas1');
	let ctx= c.getContext("2d");
	
	let gradient = ctx.createRadialGradient(90,90,2,90,90,90);
	gradient.addColorStop(0,'green');
	gradient.addColorStop(1,'white'); 
	ctx.fillStyle = gradient; // estil de color de dins
	
	ctx.rect(0,0,c.width-20,c.height-20);
	ctx.lineWidth = 10;
	ctx.fill(); // fer visible el rectangle amb el cercle degradat
	ctx.strokeStyle = 'green';
  ctx.stroke(); // fer visible el marc
	
  c = document.getElementById("canvas2");
  let ctx2 = c.getContext("2d");
	let degradat2 = ctx2.createRadialGradient(150,150,4,150,150,200); 
	degradat2.addColorStop(0,'magenta'); 
	degradat2.addColorStop(0.5,'blue');
	degradat2.addColorStop(1,'red');

  ctx2.fillStyle = degradat2;
  ctx2.fillRect(0,0,300,300)//pintar el degradat

  let degradat3 = ctx2.createRadialGradient(215,215,2,215,215,70);  
  degradat3.addColorStop(0,'red'); 
  degradat3.addColorStop(0.2,'orange');
  degradat3.addColorStop(0.3,'yellow');
  degradat3.addColorStop(0.5,'green'); 
  degradat3.addColorStop(0.7,'blue');
  degradat3.addColorStop(0.9,'blueViolet');
  degradat3.addColorStop(1,'indigo');
	
	ctx2.fillStyle = degradat3;
	ctx2.fillRect(140,140,190,190);
    
  ctx2.clearRect(0,0,140,140);
  ctx2.arc(60,60,70,0*Math.PI,2*Math.PI);
  ctx2.fillStyle=degradat3; //gradient; //degradat2;
  ctx2.fill();
  
});