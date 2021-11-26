import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}


export const toolkitSlice = createSlice({
    name: 'toolkitSlice',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },

    }

})


export const {  decrement } = toolkitSlice.actions

export default toolkitSlice.reducer
