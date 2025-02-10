// Crie uma classe chamada “Triângulo” com atributos para armazenar os três lados do triângulo. Implemente métodos para verificar se é um triângulo válido e calcular sua área.

class Triangulo{
    constructor(input_a,input_b,input_c){
        this.segmento_A=input_a
        this.segmento_B=input_b
        this.segmento_C=input_c
    }
    calc_area(){
        let s=(this.segmento_A+this.segmento_B+this.segmento_C)/2
        let Area=Math.sqrt(s*(s-this.segmento_A)*(s-this.segmento_B)*(s-this.segmento_C))
        return Area.toFixed(2)
    }
    primeira_condicao(){
        return this.segmento_A+this.segmento_B>this.segmento_C
    }
    segunda_condicao(){
        return this.segmento_A+this.segmento_C>this.segmento_B
    }
    terceira_condicao(){
        return this.segmento_B+this.segmento_C>this.segmento_A
    }
    validar_triangulo(){
        if(this.primeira_condicao() && this.segunda_condicao() && this.terceira_condicao()){
            console.log(`Triângulo válido`)
            console.log(`Área: ${this.calc_area()}`)
        }else{
            console.log(`Triângulo inválido`)
        }
    }
}
const novoTriangulo=new Triangulo(7,1,9)
novoTriangulo.validar_triangulo()