import React, { useState } from "react";
import { addLink, deleteLink } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Button from "@material-ui/core/Button";
import { TextField, Container } from "@material-ui/core";

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
              <div className="flex-container block center">
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
              </div>
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
      {/* <div className="center marginTop"> */}
      {/* <div className="ui input displayInline"> */}
      <h1>Welcome to Your ScrapBook</h1>
      <Container fluid="true" textAlign="center" className="center marginTop">
        <TextField
          name="linkInput"
          value={formInf.linkInput || ""}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
          placeholder="Paste Image Link Here!"
          id="outlined-basic"
          label="Insert Image Link Here"
          variant="outlined"
          size="small"
          fluid="true"
        />
        <Button
          // className="ui button primary"
          color="primary"
          variant="contained"
          onClick={() => onButtonClick(formInf)}
        >
          Add to MyScrapBook
        </Button>
        <Button
          onClick={handleToggleButton}
          color="secondary"
          variant="contained"
          className="margin"
        >
          {renderEditButton()}
        </Button>
      </Container>

      {/* </div> */}
      {renderImages()}
      {/* </div> */}
    </div>
  );
};

export default App;
