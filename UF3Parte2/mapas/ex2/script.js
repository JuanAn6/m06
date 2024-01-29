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
    let zoom = 10;
    let map = L.map('map').setView(coordenades, zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    coords = [
        [[41.381054614252804, 2.122814711442258],[41.961006703478844, 2.8277444677240595]],
        [[41.381054614252804, 2.122814711442258],[41.122568062318244, 1.2120808533510048]],
        [[41.381054614252804, 2.122814711442258],[41.621289133083884, 0.6142303213552327]],
    ];
    
    coords.forEach(e => {
        f_linia(map,e);    
    });
    
}
function f_linia(map, coord)
{  
    new L.Polyline(coord, {
        color: 'black',
        weight: 2,
        opacity: 1,
        smoothFactor: 1
    }).addTo(map);
}

