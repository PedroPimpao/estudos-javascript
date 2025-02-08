// Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.
const valor_pi=3.14
class Circulo{
    constructor(input_raio){
        this.raio=input_raio
    }
    calc_area(){
        this.area=valor_pi*(this.raio**2)
        return this.area.toFixed(2)
    }
    calc_perimetro(){
        this.perimetro=2*valor_pi*this.raio
        return this.perimetro.toFixed(2)
    }
    info(){
        console.log(`Area: ${this.calc_area()}`)
        console.log(`Perímetro: ${this.calc_perimetro()}`)
    }
}

const circulo= new Circulo(5)
circulo.info()

// Feito