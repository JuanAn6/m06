document.addEventListener('DOMContentLoaded', main);
const coordenades = [];
function main()
{
    navigator.geolocation.getCurrentPosition(funcioOk, funcioError);   
}

function funcioOk(p)
{
    coordenades[0] = p.coords.latitude;
    coordenades[1] = p.coords.longitude;
    f_dibuxarMapa();
}
function funcioError(error){console.log(error);}

function f_dibuxarMapa()
{
    let zoom = 12;
    let map = L.map('map').setView(coordenades, zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    f_marcador(map);
}

function f_marcador(map)
{
    let m = L.marker(coordenades).addTo(map);
    let new_corrdenades = coordenades;
    new_corrdenades[0] = new_corrdenades[0]- 0.07621;
    new_corrdenades[1] = new_corrdenades[1]+ 0.1711;
    let x = L.marker(new_corrdenades).addTo(map);
    // m.bindPopup("<b>Aqui estas tu payo</b>").openPopup();
    m.bindPopup("<b>Aqui estas tu payo</b>");
}