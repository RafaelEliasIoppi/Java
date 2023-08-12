let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `Valor ${num.value} adiconado`
        lista.appendChild(item)
        res.innerHTML =''
    } else {
         window.alert('Valor inválido ou já está na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){

    if (valores.length == 0){
        window.alert('Lista vazia, adicione algum número')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
            soma+= valores[pos]

        }
        media = soma/tot
        res.innerHTML= ''
        res.innerHTML+= `<p>O vetor possui ${tot} elementos</p>`
        res.innerHTML+= `<p>O menor número do vetor eh: ${menor}</p>`
        res.innerHTML+= `<p>O maior número do vetor eh: ${maior}</p>`
        res.innerHTML+= `<p>A soma dos elementos eh: ${soma}</p>`
        res.innerHTML+= `<p>A média dos elementos eh: ${media}</p>`
    }
}