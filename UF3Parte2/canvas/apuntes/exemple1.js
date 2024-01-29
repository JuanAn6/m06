	let botoNew;
  let tmp = null;
  document.addEventListener('DOMContentLoaded',function ()
	{
        botoNew = document.querySelectorAll('input[type=button]')[0];
        let botoRemove = document.querySelectorAll('input[type=button]')[1];
        
        botoNew.addEventListener('click',f_crearDibuix);
        botoRemove.addEventListener('click',f_esborrarCanvas);
        
  });
/*--------------------------------------------------------------------------*/    
  function f_crearDibuix(ev)
  {
      let w = parseInt(document.getElementById('ample').value);
      let a = parseInt(document.getElementById('llarg').value);
      d = document.createElement("canvas");
      d.setAttribute('style','border:2px solid green'); 
      // sinó s'indica estil el canvas és totalment invisible a l'usuari
      if (w>0 && a>0) {
        d.setAttribute('width',w);
        d.setAttribute('height',a);
      }
      d.setAttribute('id','dibuix');
      document.body.appendChild(d);
      ev.target.removeEventListener('click',f_crearDibuix); 
      // evitar crear més dibuixos amb mateix id
      	  
      let botoP = document.querySelectorAll('input[type=button]')[2];
      botoP.addEventListener('click',f_pintarRectangle);
  }
/*--------------------------------------------------------------------------*/    
  function f_esborrarCanvas()
  {
      let c = document.body.getElementsByTagName('canvas');
      console.info(c.length);
      while (c.length>0)
      {
            document.body.removeChild(c[0]);
      }
      let botoP = document.querySelectorAll('input[type=button]')[2];
      botoNew.addEventListener('click',f_crearDibuix);
  }
/*--------------------------------------------------------------------------*/    
	function f_pintarRectangle()
	{
    // condició per evitar repintar a sobre més vegades
    if (document.getElementById('dibuix')!=null && tmp==null)
    {
      document.removeEventListener('click',f_pintarRectangle);
      let canvas = document.getElementById('dibuix');
      let ctx = canvas.getContext("2d");
      ctx.beginPath();  
      ctx.rect(100, 10, 50, 100); // crea una figura de tipus rectangle, sense dibuixar-la al canvas
      // punt on es dibuixa x,y, amplada, alçada
      ctx.strokeStyle = 'red' // definir el color del contron de la figura: verd clar, sense dibuixar-la al canvas
      ctx.fillStyle  = 'green'; // assignar color de l'interior, per defecte negre
      ctx.stroke(); // dibuixa el contron en el canvas
      ctx.fillRect (100, 10, 50, 100); // pinta el Rectangle
      ctx.closePath();
      
      ctx.beginPath();  
      ctx.rect(0,0,60,50);
      ctx.fillStyle  = 'blue'; // assignar color de l'interior
      ctx.fillRect (0,0,60,50);

      tmp = setTimeout(f_esborrarRectangles,5000);
    }
	}
/*--------------------------------------------------------------------------*/    	
	function f_esborrarRectangles()
	{
    if (document.getElementById('dibuix'))
    {
      let canvas = document.getElementById('dibuix');
      let ctx = canvas.getContext("2d");
    
      ctx.clearRect(100,10,50,100);
      ctx.clearRect(0,0,60,50);
      
      ctx.beginPath();
      ctx.rect(100,10,50,100);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 10;// gruix de la línia, valor x defecte 1
      ctx.stroke();
    }
    tmp = null;
	}