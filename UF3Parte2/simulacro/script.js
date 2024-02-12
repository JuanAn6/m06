document.addEventListener('DOMContentLoaded', f_main);

function f_main()
{
    f_generar_input_text();
    f_generar_taula();
    f_generar_buttons();
    f_mostrar_cookie();
}

function f_generar_input_text()
{
    let input = document.createElement('input');
    input.type = 'password';
    input.disabled = true;
    document.body.appendChild(input);
}
function f_generar_taula()
{
    let taula = document.createElement('table');
    let tr = document.createElement('tr');
    for(let i = 0; i < 6; i++){
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    let tr2 = document.createElement('tr');
    for(let i = 0; i < 4; i++){
        let td = document.createElement('td');
        tr2.appendChild(td);
    }
    let td = document.createElement('td');
    td.colspan = 2;
    tr2.appendChild(td);

    taula.appendChild(tr);
    taula.appendChild(tr2);

    document.body.appendChild(taula);

}

function f_generar_buttons()
{
    
}