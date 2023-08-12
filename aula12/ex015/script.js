function verificar() {
        var fano = window.document.getElementById( 'txtano')
        var res = window.document.querySelector('div#res')
        var data = new Date()
        var ano = data.getFullYear()
              
        if (fano.value.lenght == 0 || fano.value> ano){
            window.alert('ERRO DIGITE NOVAMENTE')
        } else {
          var fsex = window.document.getElementsByName('radsex')  
          var idade = ano - Number(fano.value)
          var genero =''
          var img = window.document.createElement('img')
          img.setAttribute('id', 'foto')
          if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 1 && idade <=10){
                img.setAttribute('src', 'imagens/menino.jpg')
                genero = 'Menino'
            }else if (idade < 25){
                genero = 'Jovem'
                img.setAttribute('src', 'imagens/jovem.jpg')

            } else if (idade < 50 ) {
                img.setAttribute('src', 'imagens/homem.jpg')

            } else {
                genero = 'Senhor'
                img.setAttribute('src', 'imagens/velho.jpg')

            }
          } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 1 && idade <=10){
                img.setAttribute('src', 'imagens/menina.jpg')
                genero = 'Menina'

            }else if (idade < 25){
                genero =   'Moça'
                img.setAttribute('src', 'imagens/moça.jpg')

            } else if (idade < 50 ) {
                img.setAttribute('src', 'imagens/mulher.jpg')

            } else {
                genero = 'Senhora'
                img.setAttribute('src', 'imagens/velha.jpg')
                
            }
          }
          res.style.textAlign = 'center'
          res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
          res.appendChild(img)
          img.style.maxwidht = '100px'
          img.style.borderRadius = '50%'

}
}