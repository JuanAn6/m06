        let a = 100;
        (function(parametre1) {
                  let a = "asdfg5447jmk212bfd";
                  console.log(a); // =>"asdfg5447jmk212bfd";
                  console.log(parametre1); // =>100
        })(a);
        console.log(a); //=> 100
        if (a > 50) {
          a += 30;
        }
        console.log(a); // => 130

      ;!function auto() {
                  let lives = 10;
                  let takeDamage = function(value) { 
                    ///*let*/ lives = 5; // veure que succeix al descomentar lives = 5 i després descomentar el let
                    lives -= value;
                  }
                  console.info(a);
                  a = 40; 
              
                  console.info(a); // 40
                  if (lives > 0) {
                    takeDamage(4);
                    console.log(lives); // 6
                    speak();
                  }
                  function speak() {
                    console.log('Hola, me quedan ' + lives + ' vidas');
                  }
        }();
        //speak(); // speak i takeDamage: són funcions locals a la 2na funció autoexecutable
        //takeDamage();
        (() =>
        {
                console.log(a); // => 40
        }) ();
        //auto();