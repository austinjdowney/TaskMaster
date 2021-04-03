import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../Appstate.js"



export default class Task {
    constructor(title, listId, id = generateId(), completed) {
        this.title = title
        this.listId = listId
        this.id = id
        this.completed = completed
    }

    //TODO

    get Template() {

        return /*html*/`
    <li><input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1"
                        aria-label="..." min="3" max="50">${this.title} <i class="fas fa-times ml-2 text-danger"
                        onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        `
    }
}