export const showData = (data) => {
    return{
        type: "SHOWDATA",
        payload: data
    }
};

export const deleteStory = (storyId) => {
    return {
      type: "DELETE_STORY",
      payload: storyId,
    };
  };