import React from "react";
import Card from "./Card";

const ListCard = ({ tasks, targetStatus }) => {
  const filterTasksTodo = tasks.filter(
    (task) => task.statusId === targetStatus
  );

  return filterTasksTodo.map((e) => {
    return (
      <Card
        key={e.taskId}
        id={e.taskId}
        title={e.title}
        description={e.description}
      />
    );
  });
};

export default ListCard;
