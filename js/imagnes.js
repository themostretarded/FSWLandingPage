
window.onload = function(){

    var imagen = document.getElementById('imgDinamica');
    imagen.addEventListener('mouseover', function (){
    var rnd = Math.floor((Math.random() * 3) + 1);
                        
    switch(rnd){
    case 1:
        this.src='./img/Portafolio/Cajeros/Cajero_01.gif';
    break;
    case 2:
        this.src='./img/Portafolio//Cajeros/Cajero_02.gif';
    break;
    case 3:
        this.src='./img/Portafolio/Cajeros/Cajero_03.gif';
    break;
    }   
    });
}