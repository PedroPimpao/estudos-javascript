const coursesContainer=document.querySelector('#coursesContainer')
// const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const cursos=[...document.querySelectorAll('.cursos')]
const selectedCourseButton=document.querySelector('#selectedCourseButton')
const addButton=document.querySelector('#addCourseButton')

let index=0

const createCourse=(item)=>{
    const newCourse=document.createElement('div')
    newCourse.setAttribute('id','curso'+index)
    newCourse.setAttribute('class','cursos c1')
    newCourse.innerHTML=item

    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')

    const radio=document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','radio_curso')
    radio.setAttribute('class','radio')

    comandos.append(radio)
    newCourse.append(comandos)
    coursesContainer.append(newCourse)
    index++
}

cursos.map((curso)=>{
    createCourse(curso)
})




addButton.addEventListener('click',()=>{
    const newCourseInput=document.querySelector('#newCourseInput').value
    if(newCourseInput==''){
        alert('Nenhum curso inserido!')
        console.error('Nenhum curso inserido!')
    }else{
        const newCourse=newCourseInput
        cursos.push(newCourse)
        createCourse(newCourse)
        console.log(cursos)
    }
})



const selectCourse=()=>{
    const allRadios=[...document.querySelectorAll('.radio')]
    try {
        let selectedRadio=allRadios.filter((radio)=>{
            return radio.checked
        })
        selectedRadio=selectedRadio[0]
        const commandsContainer=selectedRadio.parentNode
        const curso=commandsContainer.parentNode
        const courseContent=curso.textContent
        console.log(`Selecionado: ${courseContent}`)
        
        const selectCourseResult=document.querySelector('.selectCourseResult')
        selectCourseResult.innerHTML=`${courseContent}`
        
        

        const removeCourseButton=document.querySelector('#removeCourseButton')
        removeCourseButton.addEventListener('click',()=>{
            
            console.log(`Cursos: ${cursos}`)
            selectCourseResult.innerHTML=``
            curso.remove()
            
            
        })
    } catch (error) {
        alert('Nenhum curso foi selecionado')
        console.error('Nenhum curso foi selecionado')
    }
}
selectedCourseButton.addEventListener('click',selectCourse)