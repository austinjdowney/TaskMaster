import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class List {
    constructor(title, color, id = generateId()) {
        this.title = title
        this.color = color
        this.id = id
    }

    //TODO

    get Template() {

        return /*html*/`
        
<div class="col-md-4 mx-2">
    <div class="list-card shadow bg-white rounded border">
        <div div class= "text-center p-2 d-flex justify-content-between">
            <h3> ${this.title}</h3>
            <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
        </div>
        <div class="p-3">
            <ul>
                ${this.Tasks}
            </ul>
        </div>
        <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
              <input type="text" name="title" id="tasks" class="form-control" placeholder="New Task"
                  aria-describedby="helpId">
              <button type="submit" class="btn btn-success" title='Add Task'><i
                      class="fas fa-plus"></i></button>
        </form>
    </div>
</div>
`
    }
    get Tasks() {
        let Tsks = ProxyState.tasks.filter(t => t.listId === this.id)
        let template = ''
        Tsks.forEach(t => template += t.Template)
        return template
    }
}