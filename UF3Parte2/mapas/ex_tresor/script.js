document.addEventListener('DOMContentLoaded', main);
const coordenades = [];
let map;
let linies;
const intets_default = 15;
const unkm = 0.009;
let intents = intets_default;
let tresor = [41.57588626404586, 1.658914089202881];

function main()
{
    navigator.geolocation.getCurrentPosition(funcioOk, funcioError);   
}

function funcioOk(p)
{
    coordenades[0] = p.coords.latitude;
    coordenades[1] = p.coords.longitude;

    //coordenades = [41.5840313, 1.6012984];//mila i fontanals;
    
    f_dibuxarMapaControls();
}

function funcioError(error){console.log(error);}

function f_dibuxarMapaControls()
{
    let div = document.createElement('div');
    div.id = 'map';

    document.body.appendChild(div);

    let zoom = 16;
    map = L.map('map').setView(coordenades, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 16,
        minZoom: 16,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    f_marcador(map, tresor)

    let form = document.createElement('form');
    form.addEventListener('submit',f_accio);

    let button_nord = document.createElement('button');
    button_nord.textContent = 'nord';
    button_nord.id = 'nord';
    let button_sud = document.createElement('button');
    button_sud.id = 'sud';
    button_sud.textContent = 'sud';
    let button_oest = document.createElement('button');
    button_oest.id = 'oest';
    button_oest.textContent = 'oest';
    let button_est = document.createElement('button');
    button_est.id = 'est';
    button_est.textContent = 'est';

    form.appendChild(button_nord);
    form.appendChild(button_sud);
    form.appendChild(button_oest);
    form.appendChild(button_est);

    let span_intents = document.createElement('span');
    span_intents.id = 'intents';
    span_intents.textContent = 'Intents: '+intents;
    form.appendChild(span_intents);

    form.appendChild(document.createElement('br'));

    let radio1km = document.createElement('input');
    radio1km.type = 'radio';
    radio1km.name = 'distancia';
    radio1km.value = 1;
    radio1km.id = 'radio1km';
    let label_radio1 = document.createElement('label');
    label_radio1.textContent = '1 km';
    label_radio1.for='radio1km';
    form.appendChild(radio1km);
    form.appendChild(label_radio1);

    form.appendChild(document.createElement('br'));

    let radio2km = document.createElement('input');
    radio2km.type = 'radio';
    radio2km.name = 'distancia';
    radio2km.value = 2;
    radio2km.id = 'radio2km';
    let label_radio2 = document.createElement('label');
    label_radio2.textContent = '2 km';
    label_radio2.for='radio2km';
    form.appendChild(radio2km);
    form.appendChild(label_radio2);
    

    document.body.appendChild(form);
    
}

function f_accio(evt)
{
    evt.preventDefault();
    console.info(evt.submitter.id);
    let moviment = f_get_moviment();
    moviment =  moviment * unkm;
    console.log(moviment)

    //moviement del mapa
    switch(evt.submitter.id){
        case 'nord':
            f_moure_mapa(moviment ,0);
            break;
        case 'sud':
            f_moure_mapa(-1*moviment,0);
            break;
        case 'est':
            f_moure_mapa(0, moviment);
            break;
        case 'oest':
            f_moure_mapa(0, -1*moviment);
            break;
        default:
            break;
    }

    setTimeout(f_comprovar_tresor, 500);

    //marcador de intents
    f_comprovar_intents();
    
}

function f_get_moviment()
{
    let radio = document.querySelector('input[type=radio]:checked');
    if(radio){
        return radio.value;
    }else{
        return 0.5;
    }
}

function f_comprovar_tresor()
{
    
    let bounds = map.getBounds();
    
    // f_marcador(map, [bounds._northEast.lat, bounds._northEast.lng])
    // f_marcador(map, [bounds._southWest.lat, bounds._southWest.lng])
    //let coords = map.getCenter();
    // f_marcador(map, coords);

    b1 = [bounds._northEast.lat, bounds._northEast.lng];
    b2 = [bounds._southWest.lat, bounds._southWest.lng];
    
    if(tresor[0] < b1[0] && tresor[1] < b1[1] && tresor[0] > b2[0] && tresor[1] > b2[1]){
        console.log('has ganado');
    }else{
        console.log('sigue intentandolo');
    }
}

function f_comprovar_intents()
{
    intents = intents - 1;
    document.getElementById('intents').textContent = 'Intents: '+ intents;

    if(intents == 0){
        //REINICIAR PARTIDA
    }
}

function f_moure_mapa(x,y)
{
    let coords = map.getCenter();
    let c2 = [];
    c2[0] = coords['lat']+x;
    c2[1] = coords['lng']+y;
    map.setView(c2,16);
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
function f_marcador(map, coord)
{  
    console.info(coord);
    L.marker(coord).addTo(map);
}

