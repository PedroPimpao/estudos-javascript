// Implemente uma classe chamada “Aluno” que possua atributos para armazenar o nome, a matrícula e as notas de um aluno. Adicione métodos para calcular a média das notas e verificar a situação do aluno (aprovado ou reprovado).

class Aluno{
    constructor(input_nome,input_matricula,input_trimestre_1,input_trimestre_2,input_trimestre_3){
        this.nome=input_nome
        this.matricula=input_matricula
        this.media_trimestre_1=input_trimestre_1
        this.media_trimestre_2=input_trimestre_2
        this.media_trimestre_3=input_trimestre_3
        this.media_padrao=7
        this.status=``
    }
    calc_media(){
        this.somatorio=this.media_trimestre_1+this.media_trimestre_2+this.media_trimestre_3
        this.media_geral=this.somatorio/3
        if(this.media_geral>=this.media_padrao){
            this.status=`Aprovado`
        }else{
            this.status=`Reprovado` 
        }
        console.log(`Status: ${this.status}`)
        console.log(`Média final: ${this.media_geral}`)
    }
    info(){
        console.log('-----------')
        this.calc_media()
        console.log('-----------')
    }
}
const aluno=new Aluno('Pedro',123,7.3,8.9,6.9)
aluno.info()