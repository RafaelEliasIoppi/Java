function tabuada() {

   var num = document.getElementById('txtn')
   var tab = document.getElementById('seltab')
   var res = document.getElementById('')

   if (num.value == 0) {
     
       window.alert('[ERRO] DIGITE NOVAMENTE')
  } else {
      var n = Number(num.value)
      var c = 1
      tab.innerHTML = ' '
      while (c <= 10){
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        c++
        tab.append(item)
      }
}
}