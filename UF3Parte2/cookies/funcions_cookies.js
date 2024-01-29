//més info a : https://es.javascript.info/cookie
/*----------------------------------------------------------------------------*/
// Variable global "cookies" és necessaria per la funció f_extreuCookies cookies[nom] = valor
//let cookies = {};
/*----------------------------------------------------------------------------*/
function f_getCookie(nom)
{
  if (document.cookie)
  // si existeix alguna cookie
  {
   inici = document.cookie.indexOf(nom); // +1
   if (inici != -1)
   // si existeix la cookie amb el nom indicat
   {
      inici = inici + nom.length + 1; // +2
      // inici --> index d'on comença el valor de la cookie
      fi = document.cookie.indexOf(";",inici);
      // fi --> index d'on acaba el valor de la cookie
      if (fi == -1)
        {
        fi = document.cookie.length;
        }
      return decodeURIComponent(document.cookie.substring(inici,fi));
    }  
  }
  return ""; 
}
/*----------------------------------------------------------------------------*/
function f_setCookie(nom,valor,dies){
    if (typeof(dies) == "undefined"){
        //Si no es passa del paràmetre dies, la cookie és de sessió
        document.cookie = nom + "=" + encodeURIComponent(valor)+";secure;SameSite=Strict;"
    } else {
        //Es crea un objecte Date al qual s'assigna la data actual
        //i s'hi afegeixen els dies de caducitat transformats en
        //mil·lisegons
        let caduca = new Date();
        caduca.setTime(caduca.getTime() + dies*24*3600000);
        document.cookie = nom + "=" + encodeURIComponent(valor) +";secure;SameSite=Strict;expires=" + caduca.toUTCString();
    }
}
/*----------------------------------------------------------------------------*/
function f_extreuCookies(){
        let cookies = {};
        //Variables que emmagatzemaran les cadenes nom i valor
        let nom, valor;
        //Variables que controlaran els límits que marquen la posició de les
        //diverses cookies a la cadena
        let inici, mig, final;
        //El bucle següent comprova si hi ha alguna entrada en l'objecte "cookies"
        // si es així, s'esborra per tenir la informació actual
        for (name in cookies){
            cookies = {};
            break;
        }
        inici = 0;
        //Bucle que en cada iteració recupera el nom i valor de
        //cada cookie de la cadena i es desa en l'objecte "cookies"
        while (inici < document.cookie.length){
                //la variable mig desa la posició del próxim carácter "="
            mig = document.cookie.indexOf('=', inici);
                //la variable final emmagatzema la posició del pròxim caràcter ";"
            final = document.cookie.indexOf(';',inici);
                //El següent if comprova si final adquireix el valor -1 que indica
                //que no s'ha trobat cap caràcter ";", cosa que indica que
                //s'ha arribat a la darrera cookie i, per tant, s'assigna a la
                //variable final la longitud de la cadena
            if (final == -1) {
                final = document.cookie.length;
            }
                //El següent if fa dues comprovacions; en primer lloc, si
                //mig és més gran que final o mig és -1 (que indica que no
                //s'ha trobat cap caràcter "="), la cookie té nom però
                //no valor assignat
                //En l'altre cas el nom de la cookie és entre els
                //caràcters que hi ha entre inici i mig i el valor de la cookie
                //entre els caràcters que hi ha entre mig+1 i final
            if ( (mig > final) || (mig == -1) ) {
                nom = document.cookie.substring(inici, final);
                valor = "";
            } else {
                nom = document.cookie.substring(inici,mig);
                valor= document.cookie.substring(mig+1,final);
            }
            // es desa el valor recuperat
            cookies[nom] = decodeURIComponent(valor);
            // situar variable inici en la posició on comença el nom de la següent cookie, si n'hi ha
            inici = final + 2;
        } // end while
        return cookies;
        //return "S''han desat totes les cookies en la variable global cookies";
    } 	
/*----------------------------------------------------------------------------*/
 function f_eliminaCookie(nom){
        //S'actualitza la cookie indicant una data de caducitat del passat
        document.cookie = nom+"=;secure;SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}                            
/*----------------------------------------------------------------------------*/
// comprovar que hi ha cookies
function f_hihaCookies ()
{
    //return (document.cookie?true:false);
    return document.cookie.length>0?true:false;
}