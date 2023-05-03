const initialData = { list: [] };

const storiesReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SHOWDATA":
      const { data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          { 
            data: data
          }
        ]
      };
    default:
      return state;
  }
};

export default storiesReducer;
