
window.addEventListener('load',funcioPrincipal);
      function funcioPrincipal()
      {
          
          let links = document.getElementsByClassName("link");
          // La variable "links" és un array amb tots els elements HTML de la classe "link"
          for (let i = 0; i < links.length; i++) {
              // Per cada element de la classe "link", se li afegeix un escoltador
              // En cas de premer un "link" s'executarà la funció "obrirPestanya"
              links[i].addEventListener('click',obrirPestanya);
              }
          
      }


function obrirPestanya(evt)
{
    // el paràmetre "evt" és l'esdeveniment que ha fet executar la funció
    // encara que no s'indiqui a la funció, el paràmetre evt sempre existeix
    let i, pestanyes, links;
    let id = 'pag'+evt.currentTarget.id.substr(1); 
    // evt.currentTarget.id és l'id de l'element que ha fet executar la funció obrirPestanya (a1,a2 o a3)
    
    //amagar totes les pestanyes
    pestanyes = document.getElementsByClassName("content");
    for (i = 0; i < pestanyes.length; i++) {
        pestanyes[i].style.display = "none";
    }
    //esborrar la pestanya que fins ara era activa
    links = document.getElementsByClassName("link");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace("active", ""); // treure la classe active
    }
    //fer que la pestanya actual sigui l'activa 
    document.getElementById(id).style.display = "block"; // per mostrar el div de la pag sol·licitada
    evt.currentTarget.className += " active"; // donar-li la classe active
}      