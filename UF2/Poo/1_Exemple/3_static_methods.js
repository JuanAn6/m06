console.log("3. --------------------------------------------");  
  class Square {
      constructor (_width)
      {
            this._width = _width;
      }
      
      get width()
      {
          return this._width;
      }
      set width(p)
      {
          this._width = p;
      }
      
      /*
      OBJECTIU: decidir si dos objectes de la classe Square són idèntics
      */
      static equals ( q1, q2)
      {
          // dins un mètode static no es pot fer ús de la paraula clau this, no existeixen instàncies
          if (typeof(q1) == typeof(q2)) // és vàlid, però una versió millorada podria ser: if (q1 instanceof Square && q2 instanceof Square)
            return q1.width === q2.width;
          else
            return false;
      }
      /*
      OBJECTIU: decidir si 1 valor pot ser vàlid com a possibles propietat d'un objecte de la classe Square
      */
      static dimensionsValides(d1)
      {
          console.info(typeof(d1));
          if (typeof(d1)=="number")
              if (d1>0)
                return true;
              else
                return false;
          else
              return false
		  /**
		  TODO: Enlloc d'usar typeof, fer us de la Biblioteca i el validarReal
		  */
      }
  }
  let s1 = new Square(25);
  let s2 = new Square(4);
  let s3 = new Square(25);
  // us del mètode Static:
  console.info('Tipus: ',typeof(s1),'Tipus: ',typeof(s3));
  console.log("s1 és igual a s3? "+Square.equals(s1,s3));  
  console.log("s1 igual a s2? "+Square.equals(s1,s2));
  
  console.log("Són vàlides les dimensions 4? "+Square.dimensionsValides(4));
  console.log("Són vàlides les dimensions 12? "+Square.dimensionsValides(12));
  console.log("Són vàlides les dimensions '40'? "+Square.dimensionsValides("40"));
  console.log("Són vàlides les dimensions parseFloat('40')? "+Square.dimensionsValides(parseFloat("40")));