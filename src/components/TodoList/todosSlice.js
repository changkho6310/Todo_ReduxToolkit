import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initState = [
  {
    id: uuidv4(),
    name: "Learn React",
    completed: false,
    priority: "High",
  },
  {
    id: uuidv4(),
    name: "Learn Redux",
    completed: false,
    priority: "High",
  },
  {
    id: uuidv4(),
    name: "Learn Java",
    completed: true,
    priority: "Low",
  },
  {
    id: uuidv4(),
    name: "Learn JS",
    completed: false,
    priority: "High",
  },
  {
    id: uuidv4(),
    name: "Learn C++",
    completed: true,
    priority: "Medium",
  },
];

export const todosSlice = createSlice({
  initialState: initState,
  name: "todoList",
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    toggleTodoStatus: (state, action) => {
      // C1:
      const newTodo = state.find((todo) => todo.id === action.payload);
      newTodo.completed = !newTodo.completed;

      // C2:
      // state.forEach((todo) => {
      //   if (todo.id === action.payload) {
      //     todo.completed = !todo.completed;
      //     return
      //   }
      // });
    },
  },
});
