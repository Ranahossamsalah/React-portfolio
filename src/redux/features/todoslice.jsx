import { createSlice } from "@reduxjs/toolkit";
//initial state
const initialstate = {
  todos: [],
};
export const todoslice = createSlice({
  name: "todo",
  initialstate : initialstate,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push(action.payload);
    },
    delatetodo: (state, action) => {
      state.todos=  state.todos.filter((item, index) => { return index !== action.payload});
    },
  },
});

export const { addtodo, delatetodo } = todoslice.actions;
export default todoslice.reducer;
