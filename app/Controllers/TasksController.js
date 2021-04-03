import { tasksService } from "../Services/TasksService.js";

//TODO finish template and draw function?

//Private

//TODO

//Public
export default class TasksController {

    addTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        let rawTask = {
            title: form.title.value,
            listId: listId,
        }

        console.log(rawTask)
        tasksService.addTask(rawTask)
        //@ts-ignore
        form.reset()
    }

    deleteTask(id) {
        let confirmed = window.confirm("Are you sure you want to delete this task?")
        if (confirmed) {
            tasksService.deleteTask(id)
            swal('OH NO!!')
        }

    }
}

