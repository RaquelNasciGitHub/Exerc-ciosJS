function TurnOnOff() {
    var Image = document.getElementById('image');

    if(Image.src.match('OFFLampada')) {
        Image.src = 'Imagens/ONLampada.jpg';
    } else{
        Image.src = 'Imagens/OFFLampada.jpg';
    }
}