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

        //REVIEW
        //let tasks = ProxyState.tasks.filter(t => t.listId === this.id)
        //let total = tasks.length
        //let completed = tasks.filter(t => t.completed).length

        //TODO
        //look at checkedbox-container id. trying to get checked box
        //to stay on refresh

        return /*html*/`

<div class="col-md-4">
    <div class="list-card text-center shadow bg-white rounded-corners border">
        <div class="card-header" style="background-color:${this.color}">
        </div>
    
        <div class= "border p-2 d-flex justify-content-between">
            <h3> ${this.title}</h3>
            <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
        </div>
        
        <div class="p-3 d-flex justify-content-start">
            <ul class="d-flex flex-column" id="checkbox-container">
                ${this.Tasks}
            </ul>
        </div>


        <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
              <input type="text" name="title" id="tasks" class="form-control" placeholder="New Task"
                  aria-describedby="helpId" required minlength="3" maxlength="50" required>
              <button type="submit" class="btn btn-grey" title='Add Task'><i
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