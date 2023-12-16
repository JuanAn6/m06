	document.addEventListener('DOMContentLoaded',f_main);
	function f_main() {
		let fruits = [
				{colA: 'apple', colB: 'red delicious'},
				{colA: 'pear', colB: 'red anjou'},
				{colA: 'orange', colB: 'navel'},
				{colA: 'orange', colB: 'blood'},
				{colA: 'pear', colB: 'green anjou'},
				{colA: 'apple', colB: 'granny smith'},
				{colA: 'orange', colB: 'clementine'}
				];
		let f = fruits.slice();
		let keys = Object.keys(fruits[0]);
		f_ord(f,keys[1]);
		f_mostrar(f,'fase1');
		f_ord(f,keys[0]);
		f_mostrar(f,'fase2');
	}
	// ------------------------------------------------
	function f_ord(a,key)
	{
		a.sort(function (i,j)
		{
			if (i[key] < j[key]) return -1;
			else if (i[key] < j[key]) return 1;
			return 0;
		});
	}
	// ------------------------------------------------
	function f_mostrar(a,desti) {
		let txt = '';
		a.forEach(function (e) {
			txt += JSON.stringify(e)+'<br>';
			txt += e+'<br>';
		});
		document.getElementById(desti).innerHTML = txt;	
	}