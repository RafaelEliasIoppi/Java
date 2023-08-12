function contar() {
      let inicio = window.document.getElementById('txti')
      let passo = window.document.getElementById('txtp')
      let fim = window.document.getElementById('txtf')
      let res = window.document.getElementById('res')

      if(inicio.value == 0 || fim.value == 0){
        
        res.innerHTML = 'Contagem Impossível'
        window.alert(`[ERRO] DADOS INCORRETOS`)
        

      } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let c
        if (p == 0){
            window.alert('Passo Inválido, considerando passo 1')
            p = 1
        }
       if (f > i ){
          for (c = i; c <= f; c+= p){
            res.innerHTML += ` ${c} \u{1f449}`
            }
                
      } else {
        for (c = i; c >= f; c-= p){
            res.innerHTML += ` ${c} \u{1f449}`
        }
        }
        res.innerHTML += `\u{1f3c1} \u{1f973} \u{1f3c1} `
      }
    }