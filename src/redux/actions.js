export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (searchKey) => {
  return {
    type: "filter/search",
    payload: searchKey,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/status",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filter/priority",
    payload: priorities,
  };
};


export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
