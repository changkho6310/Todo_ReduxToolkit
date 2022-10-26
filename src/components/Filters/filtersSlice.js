import { createSlice } from "@reduxjs/toolkit";

const allFilterStatus = ["All", "To do", "Completed"];
const allFilterPriority = ["High", "Medium", "Low"];

const initState = {
  search: "",
  status: "All",
  priority: allFilterPriority,
};

const filtersSlice = createSlice({
  initialState: initState,
  name: "filters",
  reducers: {
    // Redux Toolkit help us write mutation code
    // Because Redux Toolkit installed IMMER library (search for more details)
    // => No need to create a state-copy
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});


export { allFilterStatus, allFilterPriority, filtersSlice };
