function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
    if(hora >=0 && hora < 12){
        //BOM DIA
        img.src = './img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora < 18){
        //BOA TARDE
        img.src = './img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        img.src = './img/noite.jpg'
        document.body.style.background = '#515154'
    }
}
