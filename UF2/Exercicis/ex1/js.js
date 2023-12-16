document.addEventListener("DOMContentLoaded", f_main)

function f_main(){
    let a = [];

    for(let i = 0; i < 50; i++ ){
        a[i] = (Math.random(100)*100).toFixed(0); //0 - 100 incluidos
    }
    

    ((a)=>{
        for(i in a){
            if(a[i]%5 == 0){
                console.log(a[i]);
            }
        }
    })(a);


    (function f_autoMax(a){
        console.log("max: "+Math.max(...a));
    })(a);

    f_datas();
    

}

const f_datas = () => {
    let d = new Date(prompt("introdueix una data"));
    
    setInterval(f_data,1000,d);
    
}

function f_data(dt) {
        
    console.log(dt);

    dt.setDate(dt.getDate() + 1 );

}