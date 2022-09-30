import { createAction } from "@reduxjs/toolkit";
import Model, { attr, fk } from "redux-orm";

export const createTaskGroup = createAction("models/taskGroups/create")

let id = 0
class TaskGroup extends Model {
    static modelName = "TaskGroup"
    static get fields() {
        return {
            id: attr(),
            boardId: fk({
                to: "Board",
                as: "board",
                relatedName: "taskGroups"
            }),
            title: attr(),
            color: attr()
        }
    }

    static reducer({ type, payload }, TaskGroup, session) {
        switch (type) {
            case createTaskGroup.type:
                // Create task group
                this.upsert({
                    ...payload,
                    id: id
                })
                id++
                console.log(payload)
                break;

            default:
                break;
        }
    }
}

export default TaskGroup