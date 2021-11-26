import {configureStore} from '@reduxjs/toolkit'
import toolkitSlice from "./ReduxSlice";

export const store = configureStore({
    reducer: {
        counter: toolkitSlice
    },
})
