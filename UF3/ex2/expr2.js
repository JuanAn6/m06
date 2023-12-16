document.addEventListener('DOMContentLoaded', f_main);

function f_main() {
    //EX1
    document.getElementById("b1").addEventListener("click", f_ex1);

    //EX2
    let textBox = document.getElementById("c");
    textBox.value = "Valor per defecte";
    document.getElementById("b2").addEventListener("click", f_ex2);

    //EX3
    document.getElementById("tel").addEventListener("input", f_ex3);

    //EX4
    document.getElementById("dni").addEventListener("blur", dni);
    document.getElementById("nif").addEventListener("blur", nif);
    document.getElementById("cif").addEventListener("blur", cif);
}

function f_ex1(evt) {
    evt.preventDefault();

    let er1 = new RegExp("^\\d{3}-\\d{3}-\\d{3}$");
    let er2 = new RegExp("^\\d{3}\\s\\d{6}$");
    let er3 = new RegExp("^\\+\\d{2,3}\\s\\d{9}$");

    let cad1 = document.getElementById("c1").value;
    let cad2 = document.getElementById("c2").value;
    let cad3 = document.getElementById("c3").value;

    document.getElementById("a1").textContent = er1.test(cad1) ? "Entrada valida" : "Entrada no valida";
    document.getElementById("a2").textContent = er2.test(cad2) ? "Entrada valida" : "Entrada no valida";
    document.getElementById("a3").textContent = er3.test(cad3) ? "Entrada valida" : "Entrada no valida";

}

function f_ex2(evt) {
    evt.preventDefault();

    let textBox = document.getElementById("c");

    let er = new RegExp("NV", "gi");
    let array1 = textBox.value.match(er);

    let n = 0;
    if (array1 != null) {
        n = array1.length;
    }

    if (n > 3) {
        document.getElementById("aa").textContent = "Numero de aparicions: " + n;
    } else {
        document.getElementById("aa").textContent = "Hi ha menys de 3 coincidencies";
    }
    textBox.value = "Valor per defecte";
    console.log("numero de vegades: " + n);

}

function f_ex3() {

    let er1 = new RegExp("\\d{3}\\s\\d{3}\\s\\d{3}");
    let cad1 = document.getElementById("tel").value;
    if (er1.test(cad1)) {
        document.getElementById("tel").style.backgroundColor = "#23FF00";
    } else {
        document.getElementById("tel").style.backgroundColor = "#FF2900";
    }

    if (cad1.trim().length == 0) {
        document.getElementById("tel").style.backgroundColor = "#FFFFFF";
    }
}