document.addEventListener('DOMContentLoaded',function ()
{
	// es poden trobar més layers a: https://leaflet-extras.github.io/leaflet-providers/preview/
	let capaOSM = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png');
  let capaTopo =  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
	let capaCatastro = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
			format: 'image/png',
			transparent: false,
			continuousWorld : true,
			attribution: '<a href="https://www.sedecatastro.gob.es/"" target="_blank">Dirección General de Catastro</a>',
			maxZoom: 20
		});
  let capaPNOA = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma?', {
            layers: 'OI.OrthoimageCoverage',
            attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
        });
	let map = L.map('elMeuMapa', {
							center: [39.072040,0.459191],
							zoom: 8,
								});
	 capaOSM.addTo(map); // Indicar opció seleccionada
	 //capaPNOA.addTo(map);
	
	let capasBase = {
		"Capa 1": capaTopo,
		"Capa 2": capaOSM,
    "Capa 3": capaCatastro,
		"Capa 4":capaPNOA
	};
  // definir i ubicar el selector de capes
	let selectorCapas = new L.control.layers(capasBase);
	selectorCapas.addTo(map);
});
