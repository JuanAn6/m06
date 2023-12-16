document.addEventListener("DOMContentLoaded",f_main);
window.addEventListener('beforeunload',f_tancar);
let temp = null;
function f_main(){

    //mostrar();
    
    temp = setInterval(mostrar  ,10);
    
    
}
function f_tancar(){
    clearInterval(temp);
}

let i = 0;

function mostrar(){
    const CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    
    document.getElementsByTagName("body")[0].style.backgroundColor = CSS_COLOR_NAMES[i];
    document.getElementById("nomC").textContent = CSS_COLOR_NAMES[i];
    console.log(CSS_COLOR_NAMES[i]);
    
    if(i == CSS_COLOR_NAMES.length){
        i = 0;
    }else{
        i++;
    }

    
}
let j = 0;
let x = 0;

function s(){
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+i+","+j+","+x+")";
    document.getElementById("nomC").textContent = "rgb("+i+","+j+","+x+")";
    
    

    if( i < 255){
        i++;
    }else{
        if(j <255){
            j++;
        }else{
            if(x < 255){
                x++;
            }else{
                i = 0;
                j = 0;
                x = 0;
            }
        }
    }
    
}