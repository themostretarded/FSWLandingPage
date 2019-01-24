
window.onload = function(){

    var imagen = document.getElementById('imgCajeros');
    imagen.addEventListener('mouseover', function (){
    var rnd = Math.floor((Math.random() * 3) + 1);
                        
    switch(rnd){
    case 1:
        this.src='./img/Portafolio/Cajeros/Cajero_01.gif';
    break;
    case 2:
        this.src='./img/Portafolio/Cajeros/Cajero_02.gif';
    break;
    case 3:
        this.src='./img/Portafolio/Cajeros/Cajero_03.gif';
    break;
    }   
    });

    var imagen = document.getElementById('imgLockers');
    imagen.addEventListener('mouseover', function (){
    var rnd = Math.floor((Math.random() * 3) + 1);
                        
    switch(rnd){
    case 1:
        this.src='./img/Portafolio/Lockers/pasillo_02.jpg';
    break;
    case 2:
        this.src='./img/Portafolio//Lockers/pasillo_03.jpg';
    break;
    case 3:
        this.src='./img/Portafolio/Lockers/registro_01.jpg';
    break;
    }   
    });
}