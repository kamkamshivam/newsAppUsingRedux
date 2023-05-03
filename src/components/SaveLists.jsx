import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { deleteStory } from "../actions";
import "../css/SaveLists.css"
function SaveLists() {
  const savedStories = useSelector((state) => state.storiesReducer.savedStories);
  const dispatch = useDispatch();

  const handleDelete = (storyId) => {
    dispatch(deleteStory(storyId));
  };

  if (!savedStories) {
    return <div>No saved stories found.</div>;
  }

  return (
    <div className="save-lists-container">
      <h2>Saved Stories</h2>
      <div className="story-list">
        {savedStories.map((story) => (
          <div key={story.id} className="story-item">
            <div className="story-img">
            <img src={story.imgUrl} alt="Story Image" />
            </div>
            <h3>{story.headline}</h3>
            <p>By {story.authorName}</p>
            <button onClick={() => handleDelete(story.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaveLists;
