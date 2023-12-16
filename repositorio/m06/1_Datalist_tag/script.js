// VARIABLES GLOBALS

// ESCOLTADORS D'ESDEVENIMENTS
document.addEventListener('DOMContentLoaded',funcioPrincipal);
      function funcioPrincipal()
      {
        document.getElementById('rang').innerHTML = document.getElementById('power').value;
          document.getElementById('power').addEventListener('change',canviarValor)
          if (localStorage.getItem('ultimRang'))
          {
            console.info(localStorage.getItem('ultimRang'));
          }
      }
 
function canviarValor()
{
  
  document.getElementById('rang').innerHTML = document.getElementById('power').value;
  localStorage.setItem('ultimRang',document.getElementById('power').value);

}