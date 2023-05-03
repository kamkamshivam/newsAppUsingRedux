import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteid, showData } from "../actions";

const SaveLists = () => {
    const list = useSelector((state) => state.showData.list)
    return(
        <>
                {list.map((elem) => {
                return (
                    <div className="container">
                        <div className="story-container" key={elem.data.id}>
                            <img src={elem.data.img} className="img" />
                            <p className="author">
                                <b>By </b>
                                {elem.data.auth_name}
                                <div className="story-button-save-div">
                                    <button className="story-button-save">SAVE</button>
                                </div>
                            </p>
                            <p className="title">{elem.data.headline}</p>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default SaveLists;