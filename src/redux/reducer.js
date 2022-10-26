import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";


// C1:
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

// C2: Using combineReducers from redux, like this:
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
