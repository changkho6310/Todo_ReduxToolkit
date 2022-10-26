import { v4 as uuidv4 } from "uuid";
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

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo": {
      return [...state, action.payload];
    }

    case "todoList/toggleTodoStatus": {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    }

    default: {
      return state;
    }
  }
};

export default todoListReducer;
