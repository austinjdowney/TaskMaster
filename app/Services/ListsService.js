import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"

class ListsService {
    addList(newList) {
        ProxyState.lists = [...ProxyState.lists, new List(newList.title, newList.color)]
        saveState()
        swal("MAKING MOVES!")
    }

    deleteList(id) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        saveState()
    }
}

export const listsService = new ListsService();