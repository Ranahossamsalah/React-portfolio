//action
export const addtodoaction = (payload) => {
  return { type: "ADD_TODO", payload };
};
export const delatetodoaction = (payload) => {
  return { type: "DELATE_TODO", payload };
};
//initial state
const initialState = {
  todos: [],
};
//reducer
export const todoreducer = (state = initialState, action) => {
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

