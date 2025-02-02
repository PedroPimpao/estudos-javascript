const coursesContainer=document.querySelector('#coursesContainer')
const courses=[...document.querySelectorAll('.cursos')]
const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const selectedCourseButton=document.querySelector('#selectedCourseButton')
const addButton=document.querySelector('#addCourseButton')

let index=0

const createCourse=(item)=>{
    const newElement=document.createElement('div')
    newElement.setAttribute('id','curso'+index)
    newElement.setAttribute('class','cursos c1')
    newElement.innerHTML=item
    
    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')
    
    const radio=document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','radio_curso')
    radio.setAttribute('class','radio')
    
    comandos.append(radio)
    newElement.append(comandos)
    coursesContainer.append(newElement)
    console.log(index)
    index++
    
}

cursos.map((item,indice)=>{
    createCourse(item,indice)
})

addButton.addEventListener('click',()=>{
    const newCourseInput=document.getElementById('newCourseInput')
    const newCourseName=newCourseInput.value
    if(newCourseName==''){
        alert('Nenhum valor inserido')
        console.error('Nenhum valor inserido')
    }else{
        const newCourse=newCourseName
        cursos.push(newCourse)
        createCourse(newCourse)
        // console.log(newCourseName)
        // console.log(cursos)
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
        console.log(allRadios)
        console.log(selectedRadio)
        console.log(curso.textContent)
        const selectCourseResult=document.querySelector('.selectCourseResult')
        selectCourseResult.innerHTML=`${curso.textContent}`
        
        const removeCourseButton=document.querySelector('#removeCourseButton')
        removeCourseButton.addEventListener('click',()=>{
            curso.remove()
            selectCourseResult.innerHTML=``
            console.log(cursos)
        })
    } catch (error) {
        alert('Selecione um curso')
        console.error('Houve um erro =(! Nenhum curso foi selecionado')
    }
}
selectedCourseButton.addEventListener('click',selectCourse)
