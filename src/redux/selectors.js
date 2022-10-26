import { handleFilters } from "../utils/filters";

export const todoListSelector = (state) => {
  const todosRemaining = handleFilters([...state.todoList], state.filters);
  return todosRemaining;
};
