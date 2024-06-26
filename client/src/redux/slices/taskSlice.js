import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
      todo: [],
      inProgress: [],
      done: [],
    },
  };

const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state,action) => {
            state.tasks.todo.push(action.payload)
        },
        moveTask: (state, action) => {
          const { source, destination, task } = action.payload;
          state[source].splice(state[source].indexOf(task), 1);
          state[destination].push(task);
        }
    }
})
export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;