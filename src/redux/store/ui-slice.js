import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sidebarShowed: true
    },
    reducers: {
        toggle(state, action){
            state.sidebarShowed = !state.sidebarShowed
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice