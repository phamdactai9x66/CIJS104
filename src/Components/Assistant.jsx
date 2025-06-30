import React, { useState } from "react";
import { handleAI } from "../config/genmini";

const Assistant = (props) => {
  const inputRef = React.useRef("");

  const [dataConversation, setDataConversation] = useState([]);

  const onCloseAssistant = () => {
    props.setStatusAssistant(false);
  };

  const onSubmit = async () => {
    const inputValue = inputRef.current.value;

    const response = await handleAI(inputValue);

    setDataConversation((pre) => {
      return [
        ...pre,
        {
          type: "user",
          message: inputValue,
        },
        {
          type: "bot",
          message: response,
        },
      ];
    });
  };

  return (
    <div className="modal">
      <div className="containerModal">
        {/* header */}
        <div className="header">
          <h2>Assistant AI</h2>

          <span className="iconClose" onClick={onCloseAssistant}>
            X
          </span>
        </div>

        {/* body */}
        <div className="body">
          {/* <p>{props.message}</p> */}
          <div className="conversation">
            {dataConversation.map((item) => {
              if (item.type == "user") {
                return <p style={{ textAlign: "right" }}>{item.message}</p>;
              }

              return <p>{item.message}</p>;
            })}
          </div>

          <div className="input">
            <input
              type="text"
              name=""
              id=""
              ref={inputRef}
              placeholder="typing..."
            />
            <button onClick={onSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
