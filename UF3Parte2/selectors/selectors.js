function f_main()
{
        // 1
        let h21 = document.getElementsByTagName('h2')[0];
        let h2_1r = document.querySelector('h2');
        console.info(h2_1r.textContent);
        console.info(h21.textContent);
        // 2
        let lis = document.querySelectorAll('li');
        console.info(lis);
        // 3 >
        let labelFillesP = document.querySelectorAll('p > label');
        console.info(labelFillesP.length);
        // 4
        let h3_2 = document.getElementsByTagName('h3')[1];
        console.info(h3_2);
        // 5 ,
        let etisP_input = document.querySelectorAll('p , input');
        Array.from(etisP_input).forEach(
            function (v,i,a) {
                console.info(v);
            }
        );
      	/*  let phello = document.querySelector('p .hello')[0];
        phello.append(h21);*/

    	//6
		let containers = document.getElementsByClassName('container');
		console.info(containers);

		//7
		let desconeguts = document.getElementsByClassName('desconeguda');
		console.info(desconeguts);

		//8
		let id_nou = document.getElementById('nou');
		console.info(id_nou);

		//9
		let id_ok = document.getElementById('ok');
		console.info(id_ok);

		//10
		let ele_sensacio = document.getElementsByName('sensació');
		console.info(ele_sensacio);

		//11
		let gossos = document.getElementsByName('gos');
		console.info(gossos);

		//12
		let etiquetes_dins_li = document.querySelectorAll('li>*');
		console.info(etiquetes_dins_li);

		//13
		let inputs = document.getElementsByTagName('input');
		let pass = [];
		for(let i = 0; i < inputs.length; i++){
			if(inputs[i].type.toLowerCase() == 'password'){
				pass.push(inputs[i]);
			}
		}
		console.info(pass);
		let info_pass = document.querySelectorAll('input[type="password"]');
		console.info(info_pass);
		//14
		let tex = document.querySelector('input[type=text]');
		console.info(tex);

		//15
		let rad = document.querySelector('input[type=radio]');
		console.info(rad);

		//16
		let abbr = document.querySelectorAll('abbr[title]')[1];
		console.info(abbr);

		//17
		let lis_ul = document.querySelectorAll('ul>li');
		console.info(lis_ul[2].textContent);

		//18
		let mark2 = document.getElementsByTagName('mark')[1];
		console.info(mark2);
}

/*<!-- 1. Seleccionar la primera etiqueta h2. Mostrar el seu contingut per consola -->
   <!-- 2. Seleccionar totes les etiquetes li i mostrar la col·lecció per consola -->
   <!-- 3. Seleccionar les etiquetes label filles d'etiquetes p, mostrar la quantitat per consola -->
   <!-- 4. Seleccionar la segona etiqueta h3, mostrar-la per consola -->
   <!-- 5. Seleccionar totes les etiquetes p i input. Fer un recorregut i mostrar cada element de la col·lecció per consola -->
   <!-- 6. Seleccionar els elements amb la classe container. Mostrar el resultat per consola -->
   <!-- 7. Seleccionar els elements amb la classe desconeguda. Mostrar el resultat per consola -->
   <!-- 8. Seleccionar element amb id nou. Mostrar el resultat per consola -->
   <!-- 9. Seleccionar element amb id ok. Mostrar el resultat per consola -->
   <!-- 10. Seleccionar elements amb name sensació. Mostrar el resultat per consola -->
   <!-- 11. Seleccionar elements amb name gos. Mostrar el resultat per consola -->
   <!-- 12. Seleccionar totes les etiquetes a que hi ha dins d'etiquetes li. Mostrar el resultat per consola -->
   <!-- 13. Seleccionar totes les etiquetes input amb l'atribut type igual a password. Mostrar el resultat per consola -->
   <!-- 14. Seleccionar la primera etiqueta input amb l'atribut type igual a text. Mostrar el resultat per consola -->
   <!-- 15. Seleccionar la primera etiqueta input amb l'atribut type igual a radio. Mostrar el resultat per consola -->
   <!-- 16. Seleccionar la segona etiqueta abbr amb l'atribut title. Mostrar el resultat per consola -->
   <!-- 17. Seleccionar la tercera etiqueta li dins d'un ul. Mostrar el seu contingut per consola -->
   <!-- 18. Seleccionar la segona etiqueta mark. Mostrar el resultat per consola -->
   */
   document.addEventListener('DOMContentLoaded',f_main);
