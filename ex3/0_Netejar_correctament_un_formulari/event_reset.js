   document.addEventListener('DOMContentLoaded',function ()
    {
		    //document.getElementsByName("clear")[0].addEventListener("click",clearForm);
        // com que el input és de type reset, no cal programar l'event següent:
        // document.getElementsByName("reset_form")[0].addEventListener("click",function (ev) {
            // /*
            // OBSERVACIÓ: 
                // el 1r paràmetre de la funció i this són equivalents
                // en aquelles funcions executades via un escoltador a un esdeveniment
            // */
            // console.info(ev.target);
            // console.info(this);
          //  document.forms.data_entry.reset(); // és equivalent a l'instrucció següent. Accés via name
           //  document.forms.data_entry_frm.reset(); // és equivalent a l'anterior instrucció. Accés via id
            // });
            // 
            
            
          // si l'esdeveniment reset retorna fals, no es neteja el formulari
         document.forms.data_entry.addEventListener("reset",function (ev) {
             ev.preventDefault();
            
         });
    
		
		// i ara què passa amb el submit? 
		
		//addEventListener('submit',f_submit1,true); // capturing de fora cap dins
		addEventListener('submit',f_submit1,false); //Default: bubbling de dins cap node més extern
		document.forms[0].addEventListener('submit',f_submit2);
		document.getElementById('botoS').addEventListener('submit',f_submit3);
		document.getElementById('botoS').addEventListener('click',f_click);
  } );
        
function clearForm(esdeveniment) {
  
  console.info(esdeveniment.target); // s'ha fet click sobre el botó
  console.info(this); // this i target són el botó on s'ha fet click
  console.info(this.form); // accés al formulari via el botó
  var elements = document.forms.data_entry.elements; // accés via name
  document.forms.data_entry_frm.reset(); // accés via id

  for(i=0; i<elements.length; i++) {
     
	field_type = elements[i].type.toLowerCase();
    console.info(elements[i].type);
	switch(field_type) {
		case "text": 
		case "password": 
		case "textarea":
	    case "hidden":	
			elements[i].value = ""; 
			break;
		case "radio":
		case "checkbox":
  			if (elements[i].checked) {
   				elements[i].checked = false; 
			}
			break;
		case "select-one":
		case "select-multi":
            		elements[i].selectedIndex = -1;
			break;
		default: 
			break;
	}
    }
}

// funció que s'executarà en qualsevol node HTML que admeti l'esdeveniment submit
function f_submit1()
{
	//event.preventDefault(); // si no es posa nom al 1r paràmetre, x defecte és event
	console.info('f 1, la que pot fer un preventDefault x evitar la recarrega de la pag');
}

// funció que s'executarà quan es premi el botó submit del 1r formulari
function f_submit2(ev)
{
	ev.preventDefault();
	console.info('f 2, la que pot fer un preventDefault x evitar la recarrega de la pag');
}

// funció que s'hauria d'executar quan es premi el botó amb id botoS
function f_submit3()
{
	console.info('f 3, la que NO pot evitar la recarrega de la pag, doncs, el botóS no pot recollir esdeveniments submit, només pot recollir: click, bé, i alguns altres, ja es veuran');
}

function f_click()
{
	console.info('f click');
}