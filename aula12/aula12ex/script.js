function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora < 12 && hora < 18 ){
   // Bom dia
   img.src = "imagens/manha2.png"
   document.body.style.background = '#FADF44'
} else if (hora >= 12 && hora <18){
    //boa tarde
    img.src = "imagens/xx.jpg"
    document.body.style.background = '#FAAB58'
} else {
    //boa noite
    img.src = "imagens/noite2.png"
    document.body.style.background = '#1D15FA'
}
}