import React from "react";

const Card = (props) => {
  return (
    <div className="card" key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>MindX School</button>
    </div>
  );
};

export default Card;
