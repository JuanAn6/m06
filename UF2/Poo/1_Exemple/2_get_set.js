	console.log("2. --------------------------------------------");  
	class Quadrat {
		constructor (width)
		{
			if (arguments.length!=1)
			{
				document.getElementById('avis').textContent = "Eps! Falta 1 paràmetre per construir un objecte de la classe Quadrat";
			} else{
				this._width = width;
				this._height = width;
				this._cridesGet = 0;
			}
		}
		// Exemple de com han de ser els getter's i setter's
		get superficie()
		{
				if (this._cridesGet==undefined)
					this._cridesGet=0;
				this._cridesGet++;
				return this._width * this._width;
		}
		set superficie(_sup)
		{
			this._width = Math.sqrt(_sup);
			this._height = this._width;
		}
		// Exemple d'un mètode estàndard, no és un setter "autèntic"
		setwidth(midaCostat)
		{
				if (midaCostat <= 0)
					console.log("El valor ha de ser més gran que 0");
				else{
					this._width = midaCostat;
					this._height = midaCostat;
				}
			}
	}

	let q1 = new Quadrat(25);
	let q2 = new Quadrat(4);
	// us del get
	console.log(JSON.stringify(q2));
	console.log(q1.superficie);
	console.log(q2.superficie);
	// us del set
	q2.superficie = 81;
	console.log(q2.superficie);
	console.log(JSON.stringify(q2));
	console.log(q2);
	console.log(typeof(q2.superficie));
	console.log("Quantitat d'invocacions del mètode 'get superficie' ->"+q1.cridesGet);
	console.log("Quantitat d'invocacions del mètode 'get superficie' ->",q2.cridesGet);

	let q3 = new Quadrat();
	console.info(q3.width);
	q3.setwidth(-4);
	q3.setwidth(10);
	console.log(q3.superficie);
	console.log("Quantitat d'invocacions del mètode 'get superficie' ->",q3.cridesGet);
	q3.width = 7; 
	/** En la línia anterior es pot veure com es té accés directe a les propietats
			cosa no desitjable, 
			però la solució és que totes les propietats de la classe tinguin getter's i setter's
			per tant, la recomanació és:
			posar el nom de les propietats seguin el criteri: _nomPropietat
			i fer els getters i setters amb el nomPropietat.
			Així s'evitarà l'ús directe de les propietats
		Veure l'exemple amb la classe següent QuadratDAW2
	*/
	console.info(q3);

		class QuadratDAW2 {
		constructor ()
		{
			this._width = 0;
		}
		get width()
		{
			return Math.sqrt(this._width);
		}
		set width(midaCostat)
		{
			if (midaCostat<=0)
				console.log("El valor pel camp 'width' d'objectes QuadratDAW2 no pot ser negatiu o 0");
			else
				this._width = Math.pow(midaCostat,2);
		}
		// si es defineix el "get" per un atribut tb cal definir el "set"
	}

	let q = new QuadratDAW2();
	q.width = -4;
	q.width = 9;
	console.info("contingut de q objecte de la classe QuadratDAW2: ",q,' i la seva superficie és: ',q.width);
	/**
	 LA CLASSE QuadratDAW2 és un exemple de Bones pràctiques i de com s'han de definir les dades membre i els getters i setters en JS
	Les dades membre / propietats de la classe QuadratDAW2 són les que es defineixen en el constructor amb el this.
	Per tant, en la classe QuadratDAW2:
		
		_width

	Els gets i sets són per gestionar dades membre, per tant, tot i el nom que s'ha donat:

		width

	no és una dada membre, sinó que permet gestionar les dades membre, en aquest cas: _width
	*/