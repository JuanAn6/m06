document.addEventListener('DOMContentLoaded', main);

const coordenades = [];
let map;
let linies;
const intents_default = 15;
const unkm = 0.009;
let intents = intents_default;
let tresor = [41.57588626404586, 1.658914089202881];
let moviments = [];
let distancia = 0;

let tresor_limits = [[41.599671659295936, 1.58431210150081],[41.56613037577966, 1.6712250048397785]]

function main()
{
    if (navigator.geolocation) // cortesia, x navegador antics
    {
        // permís per geolocalització
        navigator.geolocation.getCurrentPosition(funcioOk, funcioError);
    }else{
        alert("El navegador no que té instal·lada la API Geolocation");
    }
       
}

function funcioOk(p)
{
    //coordenades = [41.5840313, 1.6012984];//mila i fontanals;
    coordenades[0] = p.coords.latitude;
    coordenades[1] = p.coords.longitude;

    //guarda la primera pocosio per despres printar
    moviments.push(coordenades);

    f_dibuxarMapaControls();

    //calcualar distancia del punt on ens trobem al tresor
    f_calcular_distancia();
}

function funcioError(error)
{
    alert("Si no permets la localtizació no pots gaudir del joc ");
    console.log(error);
}

function f_dibuxarMapaControls()
{
    let div = document.createElement('div');
    div.id = 'map';

    document.body.appendChild(div);

    let zoom = 16;
    map = L.map('map').setView(coordenades, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        minZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    map.setMinZoom(16);
    map.setMaxZoom(16);

    tresor = f_generarTresor();

    f_marcador(map, tresor)

    f_controls();
    
}

function f_accio(evt)
{
    evt.preventDefault();
    
    // agafo el moviment que vol fer el usuari
    let moviment = f_get_moviment();
    moviment =  moviment * unkm;

     //evt.submitter.id / retorna el boto que a enviat el formulari
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
    if(evt.submitter.id != 'reiniciar'){
        //guardar el punt per despres dibuxar les linies
        setTimeout(()=>{moviments.push([map.getCenter().lat,map.getCenter().lng])},500);
        
        
        setTimeout(f_comprovar_tresor, 500);
        setTimeout(f_calcular_distancia, 500);

        //marcador de intents
        f_comprovar_intents();
    }
    
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
    //agafa els extrems nord-est i sud-oest de la pantalla y els retona
    let bounds = map.getBounds();
    
    // f_marcador(map, [bounds._northEast.lat, bounds._northEast.lng])
    // f_marcador(map, [bounds._southWest.lat, bounds._southWest.lng])
    //let coords = map.getCenter();
    // f_marcador(map, coords);

    b1 = [bounds._northEast.lat, bounds._northEast.lng];
    b2 = [bounds._southWest.lat, bounds._southWest.lng];
    
    //comprovacio per saber si el tresor es troba dins de la pantalla
    if(tresor[0] < b1[0] && tresor[1] < b1[1] && tresor[0] > b2[0] && tresor[1] > b2[1]){
        moviments.push(tresor);

        f_linia(map, moviments);
        
        map.setMinZoom(10);
        map.setMaxZoom(20);

        map.setView(moviments[Math.trunc(moviments.length / 2)],12);
        
        let span_win = document.createElement('span');
        span_win.id = 'win';
        span_win.classList.add('win');
        span_win.textContent = 'Has guanyat!!';
        document.forms[0].appendChild(span_win);

        f_desablitar_form();

    }
}

function f_calcular_distancia()
{
    let p1 = map.getCenter();
    let p2 = L.latLng(tresor[0], tresor[1]); 

    let distancia = p1.distanceTo(p2);

    document.getElementById('distancia').textContent= 'Distancia fins al tresor: '+distancia.toFixed(2)+' m';
}

function f_comprovar_intents()
{
    if(intents == 0){
        alert('Has gastat tots els intents');
        f_reiniciar();
    }else{
        intents = intents - 1;
    }
    document.getElementById('intents').textContent = 'Intents: '+ intents;
}

function f_moure_mapa(x,y)
{
    //agafa les coordenades y li suma la distancia que li pasem (també en coordenades)
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
        weight: 1,
        opacity: 1,
        smoothFactor: 1
    }).addTo(map);
}
function f_marcador(map,coord)
{  
    L.marker(coord).addTo(map);
}

function f_desablitar_form()
{
    Array.from(document.forms[0]).forEach((e)=>{
        if(e.id != 'reiniciar'){
            e.disabled = true;
        }
    });
}
function f_habilitar_from()
{
    Array.from(document.forms[0]).forEach((e)=>{
        if(e.id != 'reiniciar'){
            e.disabled = false;
        }
    });
}

function f_reiniciar()
{
    f_netejarMap();

    intents = intents_default;
    document.getElementById('intents').textContent = 'Intents: '+ intents;

    moviments = [];

    map.setView(coordenades,16);
    map.setMinZoom(16);
    map.setMaxZoom(16);

    tresor = f_generarTresor();
    f_marcador(map, tresor);

    f_habilitar_from();

    setTimeout(f_calcular_distancia, 500);

}

function f_generarTresor()
{
    //[[41.599671659295936, 1.58431210150081],[41.56613037577966, 1.6712250048397785]]
    let lat = f_aleatori(tresor_limits[1][0],tresor_limits[0][0] ,14);
    let lng = f_aleatori(tresor_limits[0][1],tresor_limits[1][1] ,14);
    //console.log(lat, lng);
    return [lat, lng];
}

function f_controls()
{
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

    let span_distancia = document.createElement('span');
    span_distancia.id = 'distancia';
    span_distancia.textContent = 'Distancia fins al tresor: '+distancia;
    form.appendChild(span_distancia);

    form.appendChild(document.createElement('br'));

    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'distancia';
    radio.value = 0.5;
    radio.id = 'radio05km';
    radio.checked = true;   
    let label_radio = document.createElement('label');
    label_radio.textContent = '0.5 km';
    label_radio.for='radio05km';
    form.appendChild(radio);
    form.appendChild(label_radio);

    form.appendChild(document.createElement('br'));
    
    for(let i = 1; i <= 5; i++){
        
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'distancia';
        radio.value = i;
        radio.id = 'radio'+i+'km';
        let label_radio = document.createElement('label');
        label_radio.textContent = i+' km';
        label_radio.for='radio'+i+'km';
        form.appendChild(radio);
        form.appendChild(label_radio);

        form.appendChild(document.createElement('br'));
    }
    
    let button_reiniciar = document.createElement('button');
    button_reiniciar.textContent = 'Reiniciar';
    button_reiniciar.id = 'reiniciar';
    button_reiniciar.addEventListener('click', f_reiniciar);
    form.appendChild(button_reiniciar);


    document.body.appendChild(form);
}


function f_netejarMap() {
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });
}

//funcion para generar aleatorio con decimales
//https://es.stackoverflow.com/questions/131332/c%C3%B3mo-obtener-un-n%C3%BAmero-aleatorio-con-decimales-y-enteros-en-javascript
function f_aleatori(minimo, maximo, decimales) {
    var precision = Math.pow(10, decimales);
    minimo = minimo*precision;
    maximo = maximo*precision;
    return Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
}

