import TasksController from "./Controllers/TasksController.js";
import ListsController from "./Controllers/ListsController.js"
import { loadState } from "./Utils/LocalStorage.js";


class App {
  tasksController = new TasksController();
  listsController = new ListsController();
}

window["app"] = new App();
loadState()