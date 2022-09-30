import Model, { attr, fk } from "redux-orm";



class Subtask extends Model {
    static modelName = "Subtask"
    static get fields() {
        return {
            id: attr(),
            title: attr(),
            completed: attr(),
            taskId: fk({
                to: "Task",
                as: "task",
                relatedName: "subtasks"
            })
        }
    }
}

export default Subtask