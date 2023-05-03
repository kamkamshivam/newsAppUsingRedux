const initialState = {
    savedStories: []
  };
  
  const storiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SHOWDATA":
        return {
          ...state,
          savedStories: [...state.savedStories, action.payload]
        };
        case "DELETE_STORY":
      return {
        ...state,
        savedStories: state.savedStories.filter(
          (story) => story.id !== action.payload
        ),
      };
      default:
        return state;
    }
  };
  
  export default storiesReducer;
  