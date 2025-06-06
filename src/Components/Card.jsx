import React from "react";

const Card = (props) => {
  const onOpenModalEdit = () => {
    props.setStatusModalEdit({ status: true, taskId: props.id });
  };
  return (
    <div className="card" key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>MindX School</button>{" "}
      <button onClick={onOpenModalEdit}>Edit</button>
    </div>
  );
};

export default Card;
