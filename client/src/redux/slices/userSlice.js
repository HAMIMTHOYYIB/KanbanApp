import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";


// const getTask = createAsyncThunk(async (thunkAPI) => {

// })

const userSlice = createSlice({
    name:'user',
    initialState:{
        tasks:[]
    },
    reducers:{
        addTask:(state,action) => {
            state.tasks.push(action.payload)
        }
    }
})

export default userSlice;