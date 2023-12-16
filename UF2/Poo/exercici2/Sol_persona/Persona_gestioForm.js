document.addEventListener('DOMContentLoaded',f_main);

function f_main()
{
    document.getElementById('botoPer').addEventListener("click",f_crearpersona);
}

function f_crearpersona()
{
    let fnom=document.getElementById('nomP').value;
    let fcognom1=document.getElementById('cognom1P').value;
    let fcognom2=document.getElementById('cognom2P').value;
    let fedat=document.getElementById('dataP').value;
    let festatcivil=document.getElementById('estatCivilP').value;

    const radioButtons = document.querySelectorAll('input[name="sexeP"]');
    const sexeSeleccionat = document.querySelector('input[name="sexeP"]:checked');
    const fsexe = sexeSeleccionat==undefined?'':sexeSeleccionat.value;
    /*
    let fsexe;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            fsexe = radioButton.value;
            break;
        }
    }
	*/
	
	let p;
	try {
		let p = new Persona(fnom,fcognom1,(fcognom2==''?undefined:fcongom2),fedat,fsexe,festatcivil);
	    console.info(p);
		console.info(p.toString());
		document.getElementById('dadesPer').textContent = p.toString();
		document.getElementById('dadesPer').style.backgroundColor = 'white';
	} catch (e)
	{
		document.getElementById('dadesPer').textContent = e;
		document.getElementById('dadesPer').style.backgroundColor = 'bisque';
	}
  

	/** proves **/
		// p = new Persona("Ramon","Garcia",undefined,11,'H','solter');
	    // console.info(p);
		// console.info(p.toString());
		// try {
		// 	p.edat = -1;
		// } catch (error)
		// {
		// 	console.log(error);
		// }
		// try {
		// 	p.cognom2 = "nou";
		// } catch (error)
		// {
		// 	console.log(error);
		// }
		// try {
		// 	p.sexe = "x";
		// }catch (error)
		// {
		// 	console.log(error);
		// }	
		// console.info(p.toString());
}