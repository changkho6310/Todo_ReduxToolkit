const handleFilters = (todoList, filters) => {
  let todosRemaining = [...todoList];

  // C1: Cách này rườm rà, mỗi filter là phải loop lại hết todoList
  // todosRemaining = filterByPriority(todosRemaining, filters.priority);
  // todosRemaining = handleSearch(todosRemaining, filters.search);
  // todosRemaining = filterByStatus(todosRemaining, filters.status);

  // C2: Chỉ loop qua todoList 1 lần, mỗi todo sẽ check hết các ĐK filter
  const reg = new RegExp(filters.search, "i");

  todosRemaining = todosRemaining.filter((todo) => {
    const isSearchMatched = todo.name.search(reg) !== -1;

    const isPriorityMatched =
      filters.priority.length === 0 || filters.priority.includes(todo.priority);
    // filters.priority.some((priority) => todo.priority === priority);
    // K cần phải làm vậy, vì:
    // Array.some(function)   --> Phải tự compare, chỉ dùng khi muốn xử lý logic, nếu chỉ đơn thuần muốn compare thông thường -->
    // Array.includes(value)  --> Nó tự compare dùm mình luôn!

    const isStatusMatched =
      filters.status === "All" ||
      (filters.status === "Completed" && todo.completed) ||
      (filters.status === "To do" && !todo.completed);

    return isSearchMatched && isPriorityMatched && isStatusMatched;
  });

  return todosRemaining;
};

// C1 :
// const handleSearch = (todoList, searchKey) => {
//   const reg = new RegExp(searchKey, "i");
//   return todoList.filter((todo) => {
//     // return todo.name.includes(reg);
//     // Because String.includes doesn't allow regular expression => Using String.search
//     return todo.name.search(reg) !== -1;
//   });
// };

// C1 :
// const filterByPriority = (todoList, priorities) => {
//   if (priorities.length === 0) return todoList;

//   return todoList.filter((todo) => {
//     return priorities.some((priority) => todo.priority === priority);
//   });
// };

// C1 :
// const filterByStatus = (todoList, status) => {
//   switch (status) {
//     case "Completed": {
//       return todoList.filter((todo) => {
//         return todo.completed === true;
//       });
//     }
//     case "To do": {
//       return todoList.filter((todo) => {
//         return todo.completed === false;
//       });
//     }
//     default: {
//       return todoList;
//     }
//   }
// };

export { handleFilters };
