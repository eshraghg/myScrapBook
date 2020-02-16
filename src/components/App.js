import React, { useState } from "react";
import { addLink } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const [formInf, setFormInf] = useState({});

  const onInputChange = e => {
    setFormInf({ ...formInf, [e.target.name]: e.target.value });
  };

  const linkList = useSelector(state => state.linkList);
  const dispatch = useDispatch();

  const onButtonClick = formInf => {
    dispatch(addLink(formInf.linkInput));
    setFormInf({ linkInput: "" });
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      dispatch(addLink(formInf.linkInput));
      setFormInf({ linkInput: "" });
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
            size="100"
          />
          <button
            className="ui button primary"
            onClick={() => onButtonClick(formInf)}
          >
            Add to MyScrapBook
          </button>
        </div>
        <div className="flex-container">
          <ul>
            {linkList.map(link => (
              <a href={link} target="_blank">
                <img
                  src={link}
                  alt="listOfPics"
                  className="list center margin"
                ></img>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
