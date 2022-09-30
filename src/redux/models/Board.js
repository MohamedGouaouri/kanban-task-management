import { createAction } from "@reduxjs/toolkit";
import Model, { attr } from "redux-orm";

// Actions
export const createBoard = createAction("models/boards/create")


let id = 0;
// Model

export class Board extends Model {
    static modelName = "Board"


    static get fields() {
        return {
            id: attr(),
            boardName: attr(),
            boardDescription: attr()
        }
    }

    static reducer({ type, payload }, Board, session) {
        switch (type) {
            case createBoard.type: {
                // TODO: Check data
                this.upsert({
                    ...payload,
                    id: id
                })
                id += 1;
                console.log(id)
                break;
            }
            default:
                break;
        }
    }
    // static get options() {
    //     return {
    //         idAttribute: 'boardName'
    //     }
    // }
}
