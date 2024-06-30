import { createSlice } from "@reduxjs/toolkit";

let nextTaskId = 1000; 
const initialState = {
  tasks: {
    "todo": [],
    "inProgress": [],
    "done": [],
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      let dragId = nextTaskId++
      const newTask = {
        id: dragId.toString(), 
        value: action.payload.value,
      };
      state.tasks.todo.push(newTask);
    },
    moveTask: (state, action) => {
      const { source, destination, taskId } = action.payload;
      const taskToMove = state.tasks[source].find((task) => task.id === taskId);
      if (taskToMove) {
        state.tasks[source] = state.tasks[source].filter((task) => task.id !== taskId);
        state.tasks[destination].push(taskToMove);
      }
    },
    deleteTask: (state, action) => {
      const { source, taskId } = action.payload;
      state.tasks[source] = state.tasks[source].filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, moveTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
