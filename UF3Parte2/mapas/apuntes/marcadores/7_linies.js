document.addEventListener('DOMContentLoaded',function ()
{
    let latitut = 41.21468; // nord - sud
    let longitut = 1.85877; // est - oest
    let zoom = 8; 
    let mapa = L.map('elMeuMapa').setView([latitut, longitut], zoom);
    

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
    }).addTo(mapa);

    L.control.scale().addTo(mapa); // veure l'escala del mapa a la part inferior esquerra
    
    let tarragona = new L.LatLng(41.11468, 1.25877);
    let barcelona = new L.LatLng(41.4035, 2.17425);
    let pointList = [tarragona, barcelona];

    let linia = new L.Polyline(pointList, {
      color: 'black',
      weight: 5,
      opacity: 1,
      smoothFactor: 1
    });
    linia.addTo(mapa);
	
    pointList = [[41.58417090301483, 1.6002201359890056],[41.73718388996007, 1.8276657394423088]];
    linia = new L.Polyline(pointList).addTo(mapa);
});