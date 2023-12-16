console.info(llibres.book[0].edition);

llibres.book.forEach(
function (v,i,array)
{
    if (v.id == "07")
    {
        console.info("El book amb id 07 exiteix a la posició "+i);
    } else
    {
        console.info("posició: "+i);
    }
   
}
);

let obj = {
	"daw2": [{
			"curs": "1516",
			"alumnes": [{
				"nom": "Maria",
				"cognom1": "De les Trenes",
				"cognom2": "Llargues"
			}, {
				"nom": "Pica",
				"cognom1": "Tecles",
				"cognom2": "Ràpid"
			}, {
				"nom": "Pere",
				"cognom1": "Rato",
				"cognom2": "Llarg"
			}]
		}, {
			"curs": "1617",
			"alumnes": [{
				"nom": "David",
				"cognom1": "Marcos",
				"cognom2": "Sabi"
			}, {
				"nom": "Sergio",
				"cognom1": "Gonzalez",
				"cognom2": "Ariza"
			}, {
				"nom": "Anna",
				"cognom1": "Alsina",
				"cognom2": "Tutusaus"
			}]
		
	}]
}