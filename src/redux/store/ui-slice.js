import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sidebarShowed: true,
        createBoardModalVisible: false,
        createTaskModalVisible: false,
        createTaskGroupModal: false,
        selectedBoard: 0,
        selectedTask: null,
        theme: 'light',
        // colors: ["#e85133", "#e8c733", "#78e833", "#33e86c", "#336fe8", "#6333e8", '#c433e8', '#e83391', '#000']
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

        showCreateTaskModal(state, action) {
            state.createTaskModalVisible = true
        },
        hideTaskModal(state, action) {
            state.createTaskModalVisible = false
        },
        showCreateTaskGroupModal(state, action) {
            state.createTaskGroupModal = true
        },
        hideTaskGroupeModal(state, action) {
            state.createTaskGroupModal = false
        },
        toggleTheme(state, action) {
            if (state.theme === 'light') {
                state.theme = 'dark'
            } else {
                state.theme = 'light'
            }
        },
        setBoard(state, action) {
            state.selectedBoard = action.payload.id
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice