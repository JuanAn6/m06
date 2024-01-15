document.addEventListener('DOMContentLoaded', 
()=>{

    let form = document.createElement('form');
    document.body.appendChild(form);

    let caixa = document.createElement('input');
    
    form.appendChild(caixa);

    let label = document.createElement('label');
    //label.textContent = 'numero de matricula: ';
    let text = document.createTextNode('Número matrícula: ');
    label.appendChild(text);
    //poner antes o despues desde un origen;
    //caixa.after(label);    
    caixa.before(label);


    //atributos
    caixa.setAttribute('type','text');
    caixa.setAttribute('id', 'n_mat');
    caixa.setAttribute('class', 'textbox');
    caixa.setAttribute('placeholder', 'ABC-1223 | A-1324-BC');
    //caixa.placeholder = 'ABC-1223 | A-1324-BC';
    //console.log(caixa.getAttribute('id'););
    //f_esborrarAtributs();


    let caixa2 = document.createElement('input');
    caixa2.setAttribute('type','text');
    caixa2.setAttribute('id', 'n_foto');
    caixa2.setAttribute('class', 'textbox');
    caixa2.setAttribute('placeholder', '12345678');

    let label2 = document.createElement('label');
    let text2 = document.createTextNode('Número foto: ');
    label2.appendChild(text2);

    let label_caixa = [label2, caixa2];
    caixa.after(...label_caixa);

    let div = document.createElement('div');
    caixa2.after(div);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id', 'check_pv');
    div.appendChild(checkbox);

    let label_ck = document.createElement('label');
    label_ck.appendChild(document.createTextNode('Acceptar politca de privacitat'));
    checkbox.before(label_ck);

    let btn = document.createElement('input');
    btn.setAttribute('type', 'submit');
    btn.setAttribute('value','Enviar');
    div.after(btn);

});

function f_esborrarAtributs()
{
    document.getElementById('n_mat').removeAttribute('placeholder');
}

function f_colnar_etiqueta()
{
    let salt = document.createElement('br');
    let clon = salt.cloneNode(); //si s'indica parametre a true clona els fills del node
    console.log(clon);
}
