import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const TaskDetail = () => {
  const data = useParams();
  const [taskInfo, setTaskInfo] = React.useState({});
  //   console.log(data);

  React.useEffect(() => {
    fetch(`http://localhost:4000/tasks/${data.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setTaskInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);

  return (
    <div>
      TaskDetail
      <h1>name task: {taskInfo?.title || ""}</h1>
    </div>
  );
};

export default TaskDetail;
