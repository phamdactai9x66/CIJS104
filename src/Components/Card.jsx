import React from "react";

const Card = (props) => {
  const onOpenModalEdit = () => {
    props.setStatusModalEdit({ status: true, taskId: props.id });
  };

  const handleDeleteTask = () => {
    // props.setStatusModalEdit({ status: true, taskId: props.id });

    console.log(props.id);

    // GET < POST < PUT < DELETE
    fetch("http://localhost:4000/tasks/" + props.id, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card" key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>MindX School</button>{" "}
      <button onClick={onOpenModalEdit}>Edit</button>{" "}
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Card;
