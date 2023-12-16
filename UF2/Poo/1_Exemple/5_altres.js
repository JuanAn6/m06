console.log("5. Altres utilitats --------------------------------------------");  
// Classe Alumne derivada de Persona
  class Alumne extends Persona {
      constructor (_nom, _edat, _curs)
      {
            super(_nom,_edat);
            this._curs = _curs;
      }
      // mètode propi
      repassar()
      {
           console.log(`${this.nom} està repassant pel pròxim exàmen`);
      }
      
      get curs()
      {
          return this._curs;
      }
      
      set curs(_curs)
      {
          this._curs = _curs;
      }
      
  }
  
  
  let alu1 = new Alumne("David",18,"Desenvolupament d'Aplicacions Web");
  let alu2 = new Alumne("Carolina",19,"Desenvolupament d'Aplicacions Multiplataforma");
  a = [undefined,undefined,"Sistemes Microinformàtics i Xarxes"];
  let alu3 = new Alumne(...a);
  console.log(alu1);
  console.log(alu2);
  console.log(alu3);
  console.info(Object.keys(alu1));
  console.info(Object.keys(per1)); // és una persona
  console.info(Object.keys(per4)); // és un programador
  console.info(Object.keys(q1));
  console.info(Object.keys(s1));