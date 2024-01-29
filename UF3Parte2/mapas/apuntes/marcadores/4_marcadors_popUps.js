
addEventListener('DOMContentLoaded',function ()
{
	  let map = L.map('elMeuMapa').setView([41.585, 1.6227], 5);
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

		let coordenadesPos = [41.581164,10.632229];
		
		let p = new L.Popup()
					.setContent("Perill!!! zona infectada de programadors")
					.setLatLng(coordenadesPos)
          .openOn(map);

		let iconoBase = L.Icon.extend({
				options: {
					iconSize:     [24, 39],
					// iconAnchor:   [16, 87],
					// popupAnchor:  [-3, -76]
				}
			});
		 
		let estiloPopup = {'maxWidth': '700'} 
		let iconoVerde = new iconoBase({iconUrl: 'verde.png'});
		let marker = L.marker([41.58401, 1.60136],{icon: iconoVerde}).bindPopup("Milà i Fontanals.",estiloPopup).addTo(map);
		
		marker.on('mouseover', function (e) {
            this.openPopup();
        });
    marker.on('mouseout', function (e) {
            this.closePopup();
        });
});

	