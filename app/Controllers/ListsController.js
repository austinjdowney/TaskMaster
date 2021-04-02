import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from "../Utils/LocalStorage.js"

//TODO finish template and draw function

//Private
function _draw() {
    let lists = ProxyState.lists;
    let template = ''
    if (lists.length == 0) {
        template += '<div class="col text-center"><p><em>No Tasks? What are you doing?</em><p></div>'
    }
    lists.forEach(l => template += l.Template)
    document.getElementById("lists").innerHTML = template
}


//Public
export default class ListsController {
    constructor() {
        ProxyState.on("lists", _draw);
        ProxyState.on("tasks", _draw);
        loadState()
        _draw()
    }

    addList() {
        window.event.preventDefault()
        let form = window.event.target
        let rawList = {
            title: form.title.value,
            color: form.color.value
        }
        listsService.addList(rawList)
        //@ts-ignore
        form.reset()
    }
    deleteList(id) {
        listsService.deleteList(id)
    }
}