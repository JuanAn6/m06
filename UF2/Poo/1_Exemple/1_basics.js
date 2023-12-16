console.log("1.--------------------------------------------------");
  // Exemple 1:
  class Rectangle {
  // nom de la classe amb la inicial majúscula
  // definició de la classe dins del bloc {}
      constructor() {
          console.log("El Rectangle ha estat creat!");
      }
  }
  let r1 = new Rectangle();
  let r2 = new Rectangle();

  // Exemple 2:
  class Rectangle2 {
      constructor(width,height,color) {
          console.log("El Rectangle2 ha estat creat!");
          this.width = width;
          this.height = height;
          this.color = color;
      }
  }
  r1 = new Rectangle2(5,3,"blue");
  r2 = new Rectangle2(10,5,"red");
  console.log(r1);
  console.log(r2);



  // Exemple 3:
  class Rectangle3 {
      // constructor() {
          // console.log("El Rectangle ha estat creat!");
      // }
      //Uncaught SyntaxError: A class may only have one constructor
      // Una classe en JS només pot tenir un únic CONSTRUCTOR
	  // Com es pot resoldre? Amb l'ús d'arguments!!!!
      constructor(_width,_height,_color) {
          console.log("El Rectangle ha estat creat!");
		  if (arguments.length==0)
		  {
		  this.width = 1;
          this.height = 1;
          this.color = 1;
		  } else
		  {
          this.width = _width;
          this.height = _height;
          this.color = _color;
		  }
      }
      getArea()
      {
            return this.width * this.height;
      }
  }
  
  let r3_a = new Rectangle3(5,3,"blue");
  let r3_b = new Rectangle3(10,5,"red");
  let r3_c = new Rectangle3();
  console.log(r3_a);
  console.log(r3_a.getArea());
  console.log(r3_b);
  console.log(r3_b.getArea());
  console.log(r3_c); 
  console.log(r3_c.getArea());
  // Exemple 4:
  class Rectangle4 {
      constructor(_width,_height,_color) {
          console.log("El Rectangle ha estat creat!");
          this.width = _width;
          this.height = _height;
          this.color = _color;
      }
      getArea()
      {
            return this.width * this.height;
      }
      // visualitzar()
      // {
      // }
      // JS NO permet la sobrecarrega de mètodes, es queda amb l'últim i no dóna cap ERROR!
	  // Com es pot resoldre? Amb l'ús d'arguments!!!!
      visualitzar(longitud)
      {
		  if (arguments.length==0)
		  {
			console.log(`Sóc un rectangle de ${this.width} x ${this.height} i sóc de color ${this.color}`);
		  } else
		  {
			  let str = new String("Rectangle de ");
			  str += this.width+" x "+this.height;
			  str += " i sóc de color "+this.color;
			  console.log(longitud);
			  console.log(str.substring(0,longitud));
		  }
      }
  }
  
  let r4_a = new Rectangle4(5,3,"blue");
  let r4_b = new Rectangle4(10,5,"red");
  r4_a.visualitzar();
  r4_b.visualitzar();
  r4_a.visualitzar(35);