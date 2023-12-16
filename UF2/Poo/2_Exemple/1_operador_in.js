console.log("Operador in --------------------------------------------");  
/**
*   l'operador in permet saber si un objecte té una propietat
    L'operació retorna true si la propietat indicada a la dreta pertany a l'objecte indicat a l'esquerra
    o false en altre cas. 
    També retornarà cert si la propietat pertany a un dels seus pares si hi ha herència en la classe de l'objecte
**/
class Car {
  constructor(wheels,model = 'sense model') {
      if (wheels <=0)
            this._wheels = 4; // valor x defecte
      else
            this._wheels = wheels;
	  this._model = model;
  }
  
  get model()
  {
      return this._model;
  }
  
  set model(model)
  {
      this._model = model.toUpperCase();
  }
  
  get wheels()
  {
      return this._wheels;
  }
  
  set wheels(wheels)
  {
      this._wheels = wheels;
  }
  
  
  
  toString()
  {
      return 'Rodes: '+this._wheels+'Model: '+this._model;
  }
}

// Classe "Fiesta" Derivada de "Car"
class Fiesta extends Car {
  constructor(rodes,model) {
    super(rodes,model)
    this._brand = 'Ford'
  }
}

const myCar = new Fiesta(4,"Fiesta");
const cotxe = new Car(6,"el meu model");
console.info("Propietats de la classe Car: ",Object.keys(Car).toString());
console.info("Propietats de la classe Fiesta: ",Object.keys(Fiesta).toString());
console.info("Propietats de l'objecte cotxe: ",Object.keys(cotxe).toString());
console.info("Propietats de l'objecte myCar: ",Object.keys(myCar).toString());
console.info("Té _brand myCar? ",'_brand' in myCar);
console.info("Té color myCar? ",'color' in myCar);
console.info("Té model myCar? ",'model' in myCar,' i és: ',myCar.model); 
console.info("Té _model myCar? ",'_model' in myCar,' i és: ',myCar._model,' Però per ús intern'); 
console.log(JSON.stringify(myCar));
console.log("El mètode hasOwnProperty --------------------------------------------");  
console.log(myCar.hasOwnProperty('_wheels'));
console.log(myCar.hasOwnProperty('model'));

