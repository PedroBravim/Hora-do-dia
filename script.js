function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
msg.innerHTML = `Agora são ${hora}h ${minutos}m ${segundos}s !`



if (hora >= 0 && hora <12) {
    //bom dia
    img.src='fotomanhã.png'
    document.body.style.background = '#fcd66d'
    

} else if (hora >= 12 && hora < 18 ){
    //boa tarde
     img.src='fototarde.png'
     document.body.style.background = '#ee6f07'
} else {
    //boa noite
     img.src='fotonoite.png'
     document.body.style.background = '#00234c'
}
    

}
setInterval(carregar, 1000);