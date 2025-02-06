const pessoa={
    nome:"Bruno",
    canal:"CFB Cursos",
    curso:"JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

const string_pessoa='{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa=JSON.stringify(pessoa)
const o_json_pessoa=JSON.parse(s_json_pessoa)

console.log(pessoa)
console.log('-----------------------------')
console.log(s_json_pessoa)
console.log('-----------------------------')
console.log(o_json_pessoa)