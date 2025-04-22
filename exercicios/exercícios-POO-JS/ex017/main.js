// Crie uma classe chamada “RedeSocial” que represente uma rede social online. Essa classe deve ter funcionalidades para adicionar amigos, publicar mensagens, comentar em posts e buscar por usuários.

class Usuario{
    constructor(input_nome){
        this.nome=input_nome
        this.id=0
        this.lista_postagens=[]
        this.post_id=0
    }
    publicar(mensagem){
        const post={
            autor: this.nome,
            mensagem: mensagem,
            id:this.post_id,
            comentarios: []
        }
        this.lista_postagens.push(post)
        this.post_id++
        return post
    }
    comentarPost(usuario, postId, comentario){
        if(usuario.lista_postagens[postId]){
            usuario.lista_postagens[postId].comentarios.push({
                autor: this.nome,
                comentario: comentario
            })
        }else{
            console.log("Postagem não encontrada!")
        }
    }
    buscarPostagem(postId){
        return this.lista_postagens.find(postagem => postagem.id === postId)
    }
    exibirPostagem(postId){
        const post=this.buscarPostagem(postId)

        if(!post){
            console.log("Postagem não encontrada!")
            return
        }

        const { autor, mensagem, id, comentarios } = post
        console.log("===============")
        console.log(`Autor: ${autor}`)
        console.log(`Mensagem: ${mensagem}`)
        console.log(`ID: ${id}`)
        if(comentarios.length > 0){
            console.log(`Comentarios: `)
            comentarios.map((comentario, indice)=>{
                console.log('-------------------------')
                console.log(`Comentario ${indice+1}: `)
                console.log(`Autor: ${comentario.autor}`)
                console.log(`Comentario: ${comentario.comentario}`)
                console.log('-------------------------')
            })
            
        }else{
            console.log("Sem comentários ainda")
        }
        console.log("===============")
    }
    exibirListaPostagens(){
        this.lista_postagens.map((postagem)=>{
            this.exibirPostagem(postagem.id)
        })
    }
}

class RedeSocial{
    constructor(){
        this.lista_usuarios=[]
        this.user_id=0
    }
    cadastrar_usuario(nome){
        const novoUsuario = new Usuario(nome)
        this.user_id++
        novoUsuario.id=this.user_id
        this.lista_usuarios.push(novoUsuario)
        return novoUsuario
    }
    remover_usuario(ID){
        this.lista_usuarios=this.lista_usuarios.filter(usuario => usuario.id !== ID)
    }
    buscar_usuario(ID){
        return this.lista_usuarios.find(usuario => usuario.id === ID)
    }
    exibirUsuario(ID){
        const usuario=this.buscar_usuario(ID)
        const { nome, id }=usuario
        console.log("=============")
        console.log(`Nome: ${nome}`)
        console.log(`ID: ${id}`)
        console.log("=============")
    }
    exibirListaUsuarios(){
        console.log("====================")
        this.lista_usuarios.map((usuario)=>{
            this.exibirUsuario(usuario.id)
        })
        console.log("====================")
    }
}


const instagram = new RedeSocial()
const user1 = instagram.cadastrar_usuario("Pedro")
const user2 = instagram.cadastrar_usuario("Raphael")
const user3 = instagram.cadastrar_usuario("Felipe")

instagram.exibirListaUsuarios()

user1.publicar("Comprei um carro novo!!!")

user1.publicar("Viagem marcada pra Bahia!")

user2.comentarPost(user1, 0, "Parabéns!")

user3.comentarPost(user1, 1, "Uau, que massa!")

user1.exibirListaPostagens()