function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`

}