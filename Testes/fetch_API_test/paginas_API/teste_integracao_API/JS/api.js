const buscar_usuarios=document.querySelector('#buscar-usuarios')
buscar_usuarios.addEventListener('click',fetchUsers)

function fetchUsers(){
    const userList=document.querySelector('.user-list')
    userList.innerHTML=`Carregando...`
    const URL='https://jsonplaceholder.typicode.com/users'
    fetch(URL)
        .then(response => response.json())
        .then(data =>{
            userList.innerHTML=''
            data.forEach((user,index)=>{
                console.log(`Usuário: ${index+1}`)
                console.log(`Nome: ${user.name}`)
                console.log(`Email: ${user.email}`)
                console.log(`Telefone: ${user.phone}`)
                console.log('-------------------')

                const nome=document.createElement('div')
                const email=document.createElement('div')
                const telefone=document.createElement('div')
                const usuario=document.createElement('li')
                usuario.classList.add('user')

                const dados=[nome,email,telefone]
                dados.forEach((dado)=>{
                    dado.classList.add('dados')
                })

                nome.innerHTML=`Nome: ${user.name}`
                email.innerHTML=`Email: ${user.email}`
                telefone.innerHTML=`Telefone: ${user.phone}`

                usuario.append(nome)
                usuario.append(email)
                usuario.append(telefone)
                userList.append(usuario)
            })
        })
}