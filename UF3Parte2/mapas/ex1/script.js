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
    let zoom = 17;
    let map = L.map('map').setView(coordenades, zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    cords = [
        [41.582663043847056, 1.6007590170382304],
        [41.585981439232334, 1.5855938436100738],
        [41.59344545351862, 1.5773390504544287],
        [41.60390261789174, 1.6293949877237128],
        [41.58787269598235, 1.6625168536511765],
        [41.52079091079597, 1.6936600458016484],
        [41.585981439232334, 1.5855938436100738],
        [41.52376223027445, 1.7067631424213496],
        [41.53122614931941, 1.7200386939330263],
        [41.52627001560978, 1.7497332544516928],
        [41.51957469205828, 1.760089412753471],
    ];
    

    for(i = 0; i < cords.length; i++){
        setTimeout(()=>{
            i++
            console.log(cords);
            f_marcador(map,cords[i]);
        },1000);
    }
}
function f_marcador(map, coord)
{  
    console.info(coord);
    L.marker(coord).addTo(map);
}

