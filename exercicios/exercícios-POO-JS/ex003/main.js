// Crie uma classe chamada “Retângulo” que possua atributos para armazenar a largura e a altura. Implemente métodos para calcular a área e o perímetro do retângulo.
class Retangulo{
    constructor(input_largura,input_altura){
        this.largura=input_largura
        this.altura=input_altura
    }
    calc_area(){
        this.area=this.largura*this.altura
        console.log(`Área: ${this.area}cm²`) 
    }
    calc_perimetro(){
        this.perimetro=(this.largura*2)+(this.altura*2)
        console.log(`Perímetro: ${this.perimetro}cm`) 
    }
}
const retangulo=new Retangulo(10,5)
retangulo.calc_area()
retangulo.calc_perimetro()

