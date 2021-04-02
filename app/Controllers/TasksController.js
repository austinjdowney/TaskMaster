import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/LocalStorage.js";

//TODO finish template and draw function?

//Private

//TODO

//Public
export default class TasksController {

    addTask(listId) {
        window.event.preventDefault()
        console.log("making");
        let form = window.event.target
        let rawTask = {
            title: form.title.value,
            listId: listId
        }
        console.log(rawTask)
        tasksService.addTask(rawTask)
        //@ts-ignore
        form.reset()
    }

    deleteTask(id) {
        tasksService.deleteTask(id)
    }
}