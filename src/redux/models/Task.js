import { createAction } from "@reduxjs/toolkit";
import Model, { attr, fk } from "redux-orm";


export const createTask = createAction("models/tasks/create")

class Task extends Model {
    static modelName = "Task"
    static get fields() {
        return {
            id: attr(),
            title: attr(),
            taskDescription: attr(),
            completed: attr(),
            groupId: fk({
                to: "TaskGroup",
                as: "taskGroup",
                relatedName: "tasks"
            })
        }
    }

    static reducer({ type, payload }, Task, session) {
        switch (type) {
            case createTask.type:
                this.upsert(payload)
                console.log(payload)
                break;

            default:
                break;
        }
    }
}

export default Task