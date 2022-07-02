import { createSlice } from "@reduxjs/toolkit";
//initial state
const initialState = {
  todos: [],
};
export const todoslice = createSlice({
  name: "todo",
  initialState : initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push(action.payload);
      console.log(action);
    },
   
    DeleteTodo: (state, action) => {
      state.todos=  state.todos.filter((item, index) => { return index !== action.payload});
    },
  },
});

export const { addtodo, DeleteTodo } = todoslice.actions;
export default todoslice.reducer;
