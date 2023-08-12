
let num = [5,3,2,8,1]
console.log('Vetor original')
console.log(num)
num.sort()
console.log
console.log(`Vetor ordenado ${num}`)
num.push(0)
console.log(`Add no fim do vetor o elemento  ${num}`)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do vetor eh: ${num[0]}`)
for(let pos in num){
    console.log(`Na posição ${pos} : ${num[pos]}`)
}
let pesquisa = num.indexOf(5)
console.log(`O valor 5 está na posição ${pesquisa}`)
console.log('Localizando o numero 11...')
let pesquisa2 = num.indexOf(11)
if (pesquisa2 == -1){
    console.log('Numerção não loalizada no vetor')
}