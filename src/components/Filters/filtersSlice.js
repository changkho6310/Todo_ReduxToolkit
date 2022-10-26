export const allFilterStatus = ["All", "To do", "Completed"];
export const allFilterPriority = ["High", "Medium", "Low"];

const initState = {
  search: "",
  status: "All",
  priority: allFilterPriority,
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter/search": {
      return {
        ...state,
        search: action.payload,
      };
    }
    case "filter/status": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "filter/priority": {
      return {
        ...state,
        priority: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filtersReducer;
