// Crie uma classe chamada “Retângulo” que possua atributos para armazenar a largura e a altura. Implemente métodos para calcular a área e o perímetro do retângulo.
class Retangulo{
    constructor(input_largura,input_altura){
        this.largura=input_largura
        this.altura=input_altura
    }
    calc_area(){
        this.area=this.largura*this.altura
        return `Área: ${this.area}cm²`
    }
    calc_perimetro(){
        this.perimetro=(this.largura*2)+(this.altura*2)
        return `Perímetro: ${this.perimetro}cm`
    }
    info(){
        console.log('-------------')
        console.log(`Largura: ${this.largura}cm`)
        console.log(`Altura: ${this.altura}cm`)
        console.log(this.calc_area())
        console.log(this.calc_perimetro())
        console.log('-------------')
    }
}
const retangulo=new Retangulo(10,5)
retangulo.info()
