
window.onload = function(){

    var imagen = document.getElementById('imgDinamica');
    imagen.addEventListener('mouseover', function (){
    var rnd = Math.floor((Math.random() * 3) + 1);
                        
    switch(rnd){
    case 1:
        this.src='https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif';
    break;
    case 2:
        this.src='http://i.stack.imgur.com/e8nZC.gif';
    break;
    case 3:
        this.src='https://i.pinimg.com/originals/0e/44/7b/0e447bcb092088c8bd09584b2c2dd833.gif';
    break;
    }   
    });
}