import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from "../Utils/LocalStorage.js"

//TODO finish template and draw function

//Private
function _draw() {
    let lists = ProxyState.lists;
    let template = ''
    if (lists.length == 0) {
        template += '<h3 class="col text-center mt-4 pt-4"><marquee behavior="alternate" scrollamount="20"><b><em>No Tasks? What are you doing?</em></b></marquee></h3>'
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
        let confirmed = window.confirm('Are you sure you want to delete this List?')
        if (confirmed) {
            swal("DON'T BE A QUITTER")
            listsService.deleteList(id)
        }
    }
}