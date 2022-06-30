import { createStore } from "redux";

//action
export const addtodoaction = (payload) => {
  return { type: "ADD_TODO", payload };
};
export const delatetodoaction = (payload) => {
  return { type: "DELATE_TODO", payload };
};

//initial state
const initialstate = {
  todos: [],
};

//reducer
const todoreducer = (state = initialstate, action) => {
  if (action.type === "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (action.type === "DELATE_TODO") {
    return {
      ...state,
      todos: [
        ...state.todos.filter((item, index) => {
          return index !== action.payload;
        }),
      ],
    };
  }
  return state; //important
};

//store
export const store = createStore(todoreducer);
