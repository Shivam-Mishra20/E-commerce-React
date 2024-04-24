 import {createSlice} from '@reduxjs/toolkit'

 const darkModeSlice = createSlice({
    name:"dark",
    initialState:false,
    reducers:{
        toggleDarkMode: state =>!state
    }
 })

 export const {toggleDarkMode} =darkModeSlice.actions
 export default darkModeSlice.reducer