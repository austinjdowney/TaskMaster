import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
    addTask(newTask) {
        ProxyState.tasks.push(new Task(newTask.title, newTask.listId))
        ProxyState.tasks = ProxyState.tasks
        saveState()
    }
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        saveState()
    }
}
export const tasksService = new TasksService();