import { taskManager } from "../manager/tasks.js"
import { isCancel, log, text } from "@clack/prompts"
import { mainMenu } from "./main.js"

export async function createTaskMesu() {
    let name
    do{
        name=await text({
            message:"Digite o nome da tarefa"
        })

        if(taskManager.tasks.has(name)){
            log.error("Já existe uma tarefa com esse nome!")
        }


    }while(taskManager.tasks.has(name))
        // console.log(name)

    if(isCancel(name)){
        mainMenu()
        return 
    }

    const task={
        name,
        status:"em andamento",
        createdAt: new Date().toISOString()
    }
    taskManager.create(task)

    log.success("Tarefa criada com sucesso!")

    setTimeout(()=>{
        return mainMenu()
    },1000)
}