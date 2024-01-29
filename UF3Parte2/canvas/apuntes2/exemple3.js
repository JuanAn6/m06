alert("Situat amb el ratolí sobre del quadrat rosa");

let canvas = document.getElementById("lienzo");
canvas.style.background="pink";  

if (canvas && canvas.getContext) {
	let ctx = canvas.getContext("2d");
	if (ctx) {
	let output = document.getElementById("output");

	canvas.addEventListener("mousemove", function(evt) {
	  let mousePos = oMousePos(canvas, evt);
	  marcarCoords(output, mousePos.x, mousePos.y)
	}, false);

	canvas.addEventListener("mouseout", function(evt) {
	  limpiarCoords(output);
	}, false);
  }
}
	// functió que retorna posició del ratolí
	function oMousePos(canvas, evt) {
	  let ClientRect = canvas.getBoundingClientRect(); // https://developer.mozilla.org/es/docs/Web/API/Element/getBoundingClientRect
	  return { //objeto
		x: Math.round(evt.clientX - ClientRect.left),
		y: Math.round(evt.clientY - ClientRect.top)
	  }
		/*
		clientX i clientY són la posició del ratolí respecte la finestra del navegador
		left i top són la posició del canvas a dins la finestra
		*/  
	}
	
	function marcarCoords(output, x, y) {
	  output.innerHTML = ("x: " + x + ", y: " + y);
	  output.style.top = (y + 10) + "px";
	  output.style.left = (x + 10) + "px";
	  output.style.backgroundColor = "#FFF";
	  output.style.border = "1px solid #d9d9d9"
	  canvas.style.cursor = "pointer";
	}

	function limpiarCoords(output) {
	  output.innerHTML = "";
	  output.style.top = 0 + "px";
	  output.style.left = 0 + "px";
	  output.style.backgroundColor = "transparent"
	  output.style.border = "none";
	  canvas.style.cursor = "default";
	}

