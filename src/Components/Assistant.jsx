import React, { useState } from "react";
import { handleAI } from "../config/genmini";

const Assistant = (props) => {
  const inputRef = React.useRef("");

  const [loading, setLoading] = useState(false);

  const [dataConversation, setDataConversation] = useState([]);

  const [dataAi, setDataAi] = useState([]);

  const onCloseAssistant = () => {
    props.setStatusAssistant(false);
  };

  const onSubmit = async () => {
    const inputValue = inputRef.current.value;

    if (!inputValue) {
      return alert("you should fill input");
    }

    const id = Date.now();

    setLoading(true);

    setDataConversation((pre) => {
      return [
        ...pre,
        {
          id: id + "_user",
          type: "user",
          message: inputValue,
          created: id,
        },
      ];
    });

    const response = await handleAI(inputValue);

    setDataAi((pre) => {
      return [
        ...pre,
        {
          id: id + "_bot",
          type: "bot",
          message: response,
          created: id,
        },
      ];
    });

    setLoading(false);
  };

  const handleSortData = React.useMemo(() => {
    return [...dataConversation, ...dataAi].sort((a, b) => {
      return a.created - b.created;
    });
  }, [dataConversation, dataAi]);
  //   console.log([...dataConversation, ...dataAi]);

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
            {handleSortData.map((item) => {
              if (item.type == "user") {
                return <p style={{ textAlign: "right" }}>{item.message}</p>;
              }

              return <p>{item.message}</p>;
            })}
          </div>

          {loading && <p>Loading...</p>}

          <div className="input">
            <input
              type="text"
              name=""
              id=""
              ref={inputRef}
              placeholder="typing..."
            />
            <button onClick={onSubmit} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
