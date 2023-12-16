console.log("4. Herència i Polimorfisme--------------------------------------------");  
// Classe Persona
  class Persona {
      constructor (_nom = "Nom Desconegut", _edat = "?") // alternatives si l'usuari no indica valors al construir un objecte
      {
            this._nom = _nom;
            this._edat = _edat;
      }
      descripcio()
      {
           console.log(`Sóc una Persona de ${this.edat} anys i em dic ${this.nom}`);
      }
      
      get nom()
      {
          return this._nom;
      }
      set nom(_nom)
      {
          this._nom = _nom;
      }
      get edat()
      {
          return this._edat;
      }
      set edat(_edat)
      {
          this._edat = _edat;
      }
      
	  // recomanable programa el mètode toString() per poder visualitzar un objecte pel navegador
	  // sinó es visualitzarà [object Object]
      toString()
      {
          return "Persona: nom-> "+this.nom+" edat-> "+this.edat;
      }
  }
  
  let per1 = new Persona("Marina",25);
  let per2 = new Persona("Daniel",14);
  console.log(per2);
  per2.descripcio();

  let pX = new Persona();
  let pY = new Persona(undefined,34);
  let pZ = new Persona("Pepita");
  let pW = new Persona(null,42); // assigna null!
  console.info(pX,' ',pY,' ',pZ,' ',pW);
  
// Classe derivada de Persona  
  class Programador extends Persona {
      constructor (_nom, _edat, _anysExpe)
      {
            super(_nom,_edat);
            this._anysExperiencia = _anysExpe;
      }
      // mètode propi, no existeix a la classe pare
      programar()
      {
           console.log(`${this.nom} està programant`);
      }
      // mètode sobreescrit, Polimorfisme
      descripcio()
      {
          super.descripcio()+console.log(" i sóc programador/a");
      }
      
      get anysExperiencia()
      {
          return this._anysExperiencia;
      }
      set anysExperiencia(_anysExpe)
      {
          this._anysExperiencia = _anysExpe;
      }
      
      // toString()
      // {
          // return "Programador: nom-> "+this.nom+" edat-> "+this.edat+" anys d'experiència-> "+this.anysExperiencia;
      // }
      toString()
      {
          return "Programador i per sobre de tot: "+super.toString()+" anys d'experiència-> "+this.anysExperiencia;
      }
  }
  
  
  let per3 = new Programador("David",45,12);
  let per4 = new Programador("Carolina",39,7);
  
  console.log(per3);
  per3.programar();
  per3.descripcio();
  
  document.getElementById('sobrecarrega').textContent = per2; // equivalent a per2.toString()
  sobrecarrega.innerHTML += "<br>"+per3; // equivalent a per3.toString()
  document.getElementById('sobrecarrega').textContent = JSON.stringify(per2); 
  sobrecarrega.innerHTML += "<br>"+JSON.stringify(per3); 
  
  /** TODO: millorar la classe Persona i Programador. Afegir una nova propietat genere i depenen del genere, 
		en la descripció del programador mostrir el missatge adequat
  */
  
  const programadors = [
                        per3,
                        new Programador("Miguel",37,15),
                        new Programador("Laura",29,6),
                        per4
                        ];
// definició d'una funció independent                        
    function desenvoluparProgramari(p)
    {
        p.forEach((v,i) =>
        {
            //p[i].programar(); equivalent a:
			v.programar();
        });
    }
// crida a la funció independent    
    desenvoluparProgramari(programadors);
        