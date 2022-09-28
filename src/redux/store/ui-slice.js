import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sidebarShowed: true,
        createBoardModalVisible: false,
        createTaskModalVisible: false,
        selectedBoard: 0,
        selectedTask: null,
        boards: [
            {
                id: 0,
                boardName: "Platform launch",
                boardColumns: [
                    {
                        id: 0,
                        type: "todo",
                        tasks: [
                            {
                                id: 0,
                                title: "Build UI for onboarding flow",
                                subtasks: [
                                    {
                                        id: 0,
                                        title: "Sub1",
                                        completed: false
                                    }
                                ]
                            }
                        ],
                        color: "#e0adad",
                    },
                    {
                        id: 1,
                        type: "progress",
                        tasks: [
                            {
                                id: 0,
                                title: "Build UI for search",
                                subtasks: [

                                ]
                            }
                        ],
                        color: "#e0adad",
                    }
                ]
            },
            {
                id: 1,
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

        showCreateTaskModal(state, action) {
            state.createTaskModalVisible = true
        },
        hideTaskModal(state, action) {
            state.createTaskModalVisible = false
        },
        addBoard(state, action) {
            state.boards.push({
                boardName: action.payload.name,
                boardColumns: []
            })
        },
        addTask(state, action) {
            const boardId = action.payload.boardId
            const columnId = action.payload.columnId
            const board = state.boards.filter(b => {
                return b.id === boardId
            })
            if (board.length > 0) {

                // find col
                const column = board[0].boardColumns.filter(col => {
                    return col.id === columnId
                })

                if (column.length > 0) {

                    const taskId = column[0].tasks.length
                    const newTask = {
                        id: taskId,
                        title: action.payload.title,
                        subtasks: action.payload.subtasks
                    }
                    state.boards[boardId].boardColumns[columnId].tasks.push(newTask)
                }
            }
        },

        setSelectedTask(state, action) {
            // const boardId = action.payload.boardId
            // const columnId = action.payload.columnId
            // const taskId = action.payload.taskId
            // const board = state.boards.filter(b => {
            //     return b.id === boardId
            // })
            // if (board.length > 0) {

            //     // find col
            //     const column = board[0].boardColumns.filter(col => {
            //         return col.id === columnId
            //     })

            //     if (column.length > 0) {

            //         const task = column[0].tasks.filter(t => {
            //             return t.id === taskId
            //         })
            //         if (task.length > 0) {
            //             state.selectedTask = task[0]
            //         }
            //     }
            // }
            state.selectedTask = action.payload.task
        },
        hideTask(state, action) {
            state.selectedTask = null
        },
        toggleTaskCompleted(state, action) {
            const columnId = action.payload.columnId
            const taskId = action.payload.taskId
            const subtaskId = action.payload.subtaskId
            const board = state.boards.filter(b => {
                return b.id === state.selectedBoard
            })
            if (board.length > 0) {

                // find col
                const column = board[0].boardColumns.filter(col => {
                    return col.id === columnId
                })

                if (column.length > 0) {

                    const task = column[0].tasks.filter(t => {
                        return t.id === taskId
                    })
                    if (task.length > 0) {
                        const subtask = state.selectedTask.subtasks.filter(st => {
                            return st.id === subtaskId
                        })

                        if (subtask.length > 0) {
                            state
                                .boards[state.selectedBoard]
                                .boardColumns[columnId]
                                .tasks[taskId]
                                .subtasks[subtaskId] = {
                                ...state
                                    .boards[state.selectedBoard]
                                    .boardColumns[columnId]
                                    .tasks[taskId]
                                    .subtasks[subtaskId],
                                completed: !state
                                    .boards[state.selectedBoard]
                                    .boardColumns[columnId]
                                    .tasks[taskId]
                                    .subtasks[subtaskId].completed
                            }
                            state.selectedTask.completed = !state
                                .boards[state.selectedBoard]
                                .boardColumns[columnId]
                                .tasks[taskId]
                                .subtasks[subtaskId].completed
                        }
                    }
                }
            }
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice