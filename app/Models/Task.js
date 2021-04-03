import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../Appstate.js"


//add completed.. this.completed

export default class Task {
    constructor(title, listId, id = generateId(), completed) {
        this.title = title
        this.listId = listId
        this.id = id
        this.completed = completed
    }

    //TODO

    get Template() {

        let tasks = ProxyState.tasks.filter(t => t.listId === this.id)
        let total = tasks.length
        let completed = tasks.filter(t => t.completed).length

        return /*html*/`
    <li class="d-flex justify-content-start"><input class="form-check-input position-static" type="checkbox" id="checkedboxes" value="option1"
                        aria-label="...">${this.title} <i class="fas fa-times ml-2 text-danger"
                        onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        `
    }
}