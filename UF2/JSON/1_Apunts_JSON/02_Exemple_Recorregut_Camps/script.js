document.addEventListener('DOMContentLoaded',_=> {
        const items = {
          'first': new Date(),
          'second': 2,
          'third': 'test'
        }

        // items.map(function (v,k) {
                // console.info(v, ' ',k);
        // });

        camps.innerHTML +="RECORREGUT PELS CAMPS DE L'OBJECTE JSON<br>";
        Object.keys(items).map(camp => // map
            {
                    camps.innerHTML += camp+'<br>';
            });
        camps.innerHTML +="RECORREGUT PELS CAMPS DE L'OBJECTE JSON i els seus valors<br>";
        Object.keys(items).forEach(camp => // forEach
            {
                    camps.innerHTML += camp+" -- "+items[camp] +'<br>';
            });
        for (camp of Object.keys(items)) // for of, compte!!!! no fer amb for in! pk no funcionarà
            {
               camps.innerHTML += camp+" -- "+items[camp] +'<br>';
            }
            
        campsIvalors.innerHTML += "RECORREGUT PELS CAMPS DE L'OBJECTE JSON i els seus valors<br>";
        Object.entries(items).forEach(arr => // forEach
            {
                    campsIvalors.innerHTML += arr[0]+" -- "+arr[1]+'<br>';
            });
        campsIvalors.innerHTML += "RECORREGUT PELS CAMPS DE L'OBJECTE JSON i els seus valors<br>";
        for (arr of Object.entries(items)) // for of, 
        //compte!!!! no fer amb for in! pk no funcionarà, for in és per recorrer arrays, alternativament a forEach o for de sempre
            {
               campsIvalors.innerHTML += arr[0]+" -- "+arr[1] +'<br>';
            }
            
        for (arr of Object.values(items))
        {
            valors.innerHTML += arr+"<br>";
        }
            
        // compte si l'objecte JSON és més complex, cal anar al nivell que es desitgi
        let data = { "users":[
                    {
                        "firstName":"Ray",
                        "lastName":"Villalobos",
                        "joined": {
                            "month":"January",
                            "day":12,
                            "year":2012
                        }
                    },
                    {
                        "firstName":"John",
                        "lastName":"Jones",
                        "joined": {
                            "month":"April",
                            "day":28,
                            "year":2010
                        }
                    }
            ]}

        console.info(Object.keys(data.users[0]));
        console.info(Object.entries(data.users));    
});