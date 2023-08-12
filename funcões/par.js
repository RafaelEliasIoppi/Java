function par_impar(n){
    if (n%2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = par_impar(5)
console.log(res)