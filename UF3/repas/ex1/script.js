document.addEventListener('DOMContentLoaded', f_main);


function f_main(){
    //let form = document.querySelectorAll('form')[0];
    let form = document.forms[0];
    
    document.getElementById('owner').addEventListener('keyup',validar_owner);
    
    document.getElementById('cvv').addEventListener('input',function (e){
        e.target.value = e.target.value.replace(/\D/g, '');
        e.target.value = e.target.value.slice(0, 3);
    });
    document.getElementById('cvv').addEventListener('input',validar_cvv);

    //document.getElementById('cardNumber').addEventListener('keypress',control_num_card);
    //document.getElementById('cardNumber').addEventListener('keypress',control_card);
    document.getElementById('cardNumber').addEventListener('input',function (e){
        e.target.value = e.target.value.replace(/\D/g, '');
        e.target.value = e.target.value.replace(/(\d{4})/g, '$1 ');
    });
    document.getElementById('cardNumber').addEventListener('keyup',validar_card);

    //document.getElementById('expireDate').addEventListener('keypress',posar_barra);
    document.getElementById('expireDate').addEventListener('input',function (e){
        e.target.value = e.target.value.replace(/\D/g, '');
        e.target.value = e.target.value.replace(/(\d{2})/g, '$1/');
        e.target.value = e.target.value.slice(0, 5);
    });
    document.getElementById('expireDate').addEventListener('keyup',validar_cad);

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if(document.getElementById('veure').checked) validar_form(form);
    });
    
    form.addEventListener('reset', (evt) => {
        reset_form(evt, form);
    });

    document.getElementById('veure').addEventListener('change', (evt) => {
        habilitarForm(evt, form);
    });
    

    console.log(inputs);
    document.getElementById('visa').addEventListener('mouseover', mostrarInfo);
    document.getElementById('rupay').addEventListener('mouseover', mostrarInfo);
    document.getElementById('mastercard').addEventListener('mouseover', mostrarInfo);
    document.getElementById('amex').addEventListener('mouseover', mostrarInfo);      
}

function mostrarInfo(evt)
{
    let tarjeta = inputs.find((input)=>{
        return input.id == evt.target.id;
    });
    document.getElementById('info').textContent = 'first number: '+tarjeta.first+ ' length: '+tarjeta.length;
}

function reset_form(evt, form){
    evt.preventDefault();
    if(document.getElementById('veure').checked){
        let result = window.confirm('Estàs segur que vols netejar el formulari?');
        if(result){
            form.reset();
        }   
    }
}

function habilitarForm(evt, form){
    // Array.from(form.elements).forEach((input) => {
    //     if(input.disabled == true && input.type != 'submit' && input.type != 'reset'){
    //         input.disabled = false;
    //         habilitado = true;
    //     }else if(input.type != 'submit' && input.type != 'reset'){
    //         input.disabled = true;
    //         habilitado = false;  
    //         //form.reset();
    //     }
    // });  
    Array.from(form.elements).forEach((input) => {
        if(evt.target.checked){
            input.disabled = false;
        }else{
            input.disabled = true;
        }
    });
}

function validar_form(form){
    //dubtes per classe
    validar_cvv()
    validar_card()
    //validar_cad()
    //validar_owner()
    //final dubtes

    if(validar_cad() && validar_card() && validar_cvv() && validar_owner()){
        guardarSession(form); 
    }else if (!validar_owner()){
        document.getElementById('owner').focus();
    }else if (!validar_cvv()){
        document.getElementById('cvv').focus();
    }else if (!validar_card()){
        document.getElementById('cardNumber').focus();
    }else if (!validar_cad()){
        document.getElementById('expireDate').focus();
    }
}

let habilitado = false;
let modelJson = {
    'titular' : '',
    'cvv' : '',
    'numero' : '',
    'caduca' : '',
}
function guardarSession(form){
    let objetoJson = modelJson;

    let keys = Object.keys(objetoJson);
    for(let i = 0; i < keys.length; i++){
        objetoJson[keys[i]] = form.elements[i].value;
    }
    if(localStorage.getItem('objetos')){
        let arrObjeto = JSON.parse(localStorage.getItem('objetos'));
        arrObjeto['objetos'].push(objetoJson);
        localStorage.setItem('objetos', JSON.stringify(arrObjeto));
    }else{
        let arr = {'objetos' : []};
        arr['objetos'].push(objetoJson);
        localStorage.setItem('objetos', JSON.stringify(arr));
    }
}

function validar_owner()
{
    let exp = /^([A-Z]{2,}\s){1}([A-Z]{2,}\s?){1}([A-Z]{2,})?$/
    let owner = document.getElementById('owner').value;
    if(!exp.test(owner)){
        document.getElementById('owner').style.backgroundColor = 'red';
        return false;
    }else{
        document.getElementById('owner').style.backgroundColor ='white';
        return true;
    }
}

function validar_cvv()
{
    let exp = /^[0-9]{3}$/
    let cvv = document.getElementById('cvv').value;
    if(!exp.test(cvv)){
        document.getElementById('cvv').style.backgroundColor = 'red';
        return false;
    }else{
        document.getElementById('cvv').style.backgroundColor ='white';
        return true;
    }
}

function validar_card()
{
    let number = document.getElementById('cardNumber').value;
    number = number.split(' ');
    number = number.join('');
    if(number.length != 0 && number.length != 1 && number.length % 4 == 0 ){
        document.getElementById('cardNumber').style.backgroundColor ='white';
        return true;
    }else{
        document.getElementById('cardNumber').style.backgroundColor = 'red';
        return false;
    }
}
function validar_cad()
{
    let cad = document.getElementById('expireDate').value;
    let exp = /^(0[1-9])|(1[0-2])\/2[1-6]$/
    if(exp.test(cad)){
        document.getElementById('expireDate').style.backgroundColor ='white';
        return true;
    }else{
        document.getElementById('expireDate').style.backgroundColor = 'red';
        return false;
    }
}


//controls que no s'utilitzen

function control_num(evt)
{
    let id = evt.srcElement.id;
    let nums = document.getElementById(id).value;
    let exp = /^[0-9]*$/
    if(!exp.test(nums)){
        document.getElementById(id).value = nums.slice(nums.length);
    }
}

function control_num_card(evt)
{
    let id = evt.srcElement.id;
    let nums = document.getElementById(id).value;
    nums = nums.split(' ');
    nums = nums.join('');
    let exp = /^[0-9]*$/
    if(!exp.test(nums)){
        document.getElementById(id).value = nums.slice(nums.length);
    }
}

function control_card()
{
    let number = document.getElementById('cardNumber').value;
    number = number.split(' ');
    number = number.join('');
    if(number.length != 0 && number.length != 1 && number.length % 4 == 0 ){
        document.getElementById('cardNumber').value += ' ';
        document.getElementById('cardNumber').style.backgroundColor ='white';
    }else{
        document.getElementById('cardNumber').style.backgroundColor = 'red';
    }
}

function posar_barra()
{
    let cad = document.getElementById('expireDate').value;
    if(cad.length==2){
        document.getElementById('expireDate').value = cad+'/';
    }
}



