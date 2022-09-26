import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sidebarShowed: true,
        createBoardModalVisible: false,
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
        showCreateBoardModal(state, action) {
            state.createBoardModalVisible = true
        },
        hideBoardModal(state, action) {
            state.createBoardModalVisible = false
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