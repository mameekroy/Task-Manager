import { Task } from "../model/model.js"

export const taskService = {
    task : [],

    addTask(taskObject) {
        const id = Math.floor(Math.random()*1000)
        const task = new Task(
            id,
            taskObject.title,
            taskObject.description,
            taskObject.date,
            taskObject.priority
        )

        const isExist = this.task.find((task) => task.id === id)

        if(!isExist){
            this.task.push(task)
        }
        else{
            alert('Task already exists with this id, please press add again')
        }
    },

    deleteTask() {},

    updateTask() {},

    getTasks() {},

    getTaskbyID() {}
}
