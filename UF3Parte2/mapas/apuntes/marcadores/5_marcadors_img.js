
addEventListener('DOMContentLoaded',function ()
{

  let capa = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});
    const map = L.map('elMeuMapa', 
                                {layers: [capa], // afegir el tipus de mapa
                                  minZoom: 9, // manera per evitar
                                  maxZoom: 9 // no deixar fer zoom
                                }).setView([42.2, -8.7], 9);
					
	L.marker([42.219577180236797,-8.733678516914864]).addTo(map);					
	
	L.marker([42.21, -8.73], {
            icon: L.icon({
                iconUrl: './town-11.svg', 
                iconSize: [45, 45],
                className: 'town-icon'
            })
        }).addTo(map);
	  
});
