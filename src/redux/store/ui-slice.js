import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sidebarShowed: true,
        selectedBoard: 0,
        boards: [
            {
                boardName: "Platform launch",
                boardColumns: []
            },
            {
                boardName: "Roadmap",
                boardColumns: []
            }
        ]
    },
    reducers: {
        toggle(state, action) {
            state.sidebarShowed = !state.sidebarShowed
        },
        addBoard(state, action) {
            state.boards.push({
                boardName: "New board here",
                boardColumns: []
            })
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice