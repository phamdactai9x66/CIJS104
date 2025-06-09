import React from "react";
import { statusEnums, taskStatus } from "../utils/constants";

const ModalEdit = (props) => {
  console.log(props);
  const [titleValue, setTitleValue] = React.useState("");

  const [desValue, setDesValue] = React.useState("");

  const [status, setStatus] = React.useState(statusEnums.TODO);

  const onChangeTitle = (event) => {
    setTitleValue(event.target.value);
  };

  const onChangeDes = (event) => {
    setDesValue(event.target.value);
  };

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // id props.id
    const body = {
      //   taskId: Date.now(),
      title: titleValue,
      description: desValue,
      statusId: +status,
    };

    const editItems = props.data.map((item) => {
      if (item.taskId == props.id) {
        return {
          ...item,
          ...body,
        };
      }
      return item;
    });

    props.setData(editItems);

    props.setStatusModal(false);
  };

  const onCloseModal = () => {
    props.setStatusModal(false);
  };

  return (
    <div className="modal">
      <div className="containerModal">
        <div className="header">
          <h2>Edit Task</h2>

          <span className="iconClose" onClick={onCloseModal}>
            X
          </span>
        </div>

        <div>
          <form action="" className="formModal">
            {/* field Title */}
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={titleValue}
              onChange={onChangeTitle}
            />

            {/* field Description */}
            <input
              type="text"
              id="description"
              placeholder="Description"
              value={desValue}
              onChange={onChangeDes}
            />

            {/* field Deadline */}
            <select name="status" onChange={onChangeStatus} value={status}>
              {taskStatus.map((e) => {
                return <option value={e.statusId}>{e.name}</option>;
              })}
            </select>

            <button type="submit" onClick={onSubmit}>
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
