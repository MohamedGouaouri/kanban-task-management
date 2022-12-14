import { configureStore } from "@reduxjs/toolkit";
import { createBoard } from "./models/Board";
import { createTaskGroup } from "./models/TaskGroup";
import { reducer as ormReducer } from "./orm";
import uiSlice from "./store/ui-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        orm: ormReducer
    },
    devTools: true
})

store.dispatch(createBoard({
    id: 0,
    boardName: "Test Board",
    boardDescription: "test",
}))



export default store