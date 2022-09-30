import { createReducer, ORM, createSelector } from "redux-orm";
import { Board } from "./models/Board";
import Subtask from "./models/Subtask";
import Task from "./models/Task";
import TaskGroup from "./models/TaskGroup";



export const orm = new ORM({
    stateSelector: (state) => state.orm
});

orm.register(Board, TaskGroup, Task, Subtask)

export const boardsSelector = createSelector(orm.Board)
export const taskGroupsSelector = createSelector(orm.TaskGroup)
export const tasksSelector = createSelector(orm.Task)
export const subtasksSelector = createSelector(orm.Subtask)



export const reducer = createReducer(orm)
