

const f_main = () => {
    let op1 = new RegExp("^[a-z]{1}[a-z_]+@gmail.com$"); // constructor
    // depèn de variables o de l'usuari
    let escriuLusuari = "[a-z]{1}[a-z_]+";
    op1 = new RegExp('^'+escriuLusuari+'@gmail.com$'); // constructor
    let op2 = /^[a-z]{1}[a-z_]+@gmail.com$/; // literal

    let cadena =" prova ";
    console.info(cadena+" "+op1.test(cadena));
    cadena = " fguardia@gmail.com";
    console.info(cadena+" "+op1.test(cadena));
    cadena = "fguardia@gmail.com ";
    console.info(cadena+" "+op1.test(cadena));
    cadena = "El correu: fguardia@gmail.com";
    console.info(cadena+" "+op1.test(cadena));
    cadena = "fguardia@gmail.com";
    console.info(cadena+" "+op1.test(cadena));
    console.info("----------- op 2 literal ---------");
    cadena =" prova ";
    console.info(cadena+" "+op2.test(cadena));
    cadena = " fguardia@gmail.com";
    console.info(cadena+" "+op2.test(cadena));
    cadena = "fguardia@gmail.com ";
    console.info(cadena+" "+op2.test(cadena));
    cadena = "El correu: fguardia@gmail.com";
    console.info(cadena+" "+op2.test(cadena));
    cadena = "fguardia@gmail.com";
    console.info(cadena+" "+op2.test(cadena));
    
}

document.addEventListener('DOMContentLoaded',f_main);