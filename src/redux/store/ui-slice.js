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
        theme: 'light'
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
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice