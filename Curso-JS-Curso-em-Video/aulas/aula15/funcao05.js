function fatorial(numero){
    if(numero==1){
        resultado=1
    }
    else{
        resultado=numero*fatorial(numero-1)
    }
    return resultado
}
console.log(fatorial(5))