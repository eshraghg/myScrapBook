import React, { useState } from "react";
import { addLink, deleteLink } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const [formInf, setFormInf] = useState({ linkInput: "" });
  const [isEditMode, setEditMode] = useState(false);

  const onInputChange = e => {
    setFormInf({ ...formInf, [e.target.name]: e.target.value });
  };

  const linkList = useSelector(state => state.linkList);
  const dispatch = useDispatch();

  const onButtonClick = formInf => {
    if (!linkList.indexOf(formInf.linkInput)) {
      alert("image already exists");
      setFormInf({ linkInput: "" });
    } else if (formInf.linkInput.trim() === "") {
    } else {
      dispatch(addLink(formInf.linkInput));
      setFormInf({ linkInput: "" });
    }
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      if (!linkList.indexOf(formInf.linkInput)) {
        alert("image already exists");
        setFormInf({ linkInput: "" });
      } else if (formInf.linkInput.trim() === "") {
      } else {
        dispatch(addLink(formInf.linkInput));
        setFormInf({ linkInput: "" });
      }
    }
  };

  const onDelete = index => {
    dispatch(deleteLink(index));
  };

  const handleToggleButton = () => {
    setEditMode(!isEditMode);
  };

  const renderImages = () => {
    if (isEditMode) {
      return (
        <div className="flex-container">
          {linkList.map((link, index) => (
            <React.Fragment key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={link}
                  alt="listOfPics"
                  className="list center margin"
                ></img>
              </a>
              <button className="btn" onClick={() => onDelete(index)}>
                Delete
              </button>
            </React.Fragment>
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex-container">
          {linkList.map((link, index) => (
            <React.Fragment key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={link}
                  alt="listOfPics"
                  className="list center margin"
                ></img>
              </a>
            </React.Fragment>
          ))}
        </div>
      );
    }
  };

  const renderEditButton = () => {
    if (isEditMode) {
      return "Back to View Mode";
    } else {
      return "Switch to Edit Mode";
    }
  };

  return (
    <div>
      <div className="center marginTop">
        <div className="ui input displayInline">
          <input
            name="linkInput"
            value={formInf.linkInput || ""}
            onChange={onInputChange}
            onKeyPress={onKeyPress}
            placeholder="Paste Image Link Here!"
            // size='100';
          />
          <button
            className="ui button primary"
            onClick={() => onButtonClick(formInf)}
          >
            Add to MyScrapBook
          </button>
          <button className="margin" onClick={handleToggleButton}>
            {renderEditButton()}
          </button>
        </div>
        {renderImages()}
      </div>
    </div>
  );
};

export default App;
