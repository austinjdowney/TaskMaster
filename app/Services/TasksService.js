import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";


class TasksService {
    addTask(newTask) {
        ProxyState.tasks.push(new Task(newTask.title, newTask.listId, newTask.completed))
        ProxyState.tasks = ProxyState.tasks
        saveState()
        swal('KEEP IT GOING!!')
    }
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        saveState()
    }
    //updateTask(completed) {
    //    let completedTasks = JSONparse.parse(localStorage.getItem('tasks')) || {};
    //    let $checkboxes = $("#checkbox-container : checkbox");

    //    $checkboxes.on("change", function () {
    //        $checkboxes.each(function () {
    //            tasks.id = completed;
    //        });
    //        localStorage.setItem('tasks', JSON.stringify(tasks));
    //    })

    //    ProxyState.tasks = ProxyState.tasks.filter(t => t.completed = completed)

    //        saveState()
    //    }
}
export const tasksService = new TasksService();