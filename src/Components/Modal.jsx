import React from "react";
import { taskStatus } from "../utils/constants";

const Modal = () => {
  return (
    <div className="modal">
      <div className="containerModal">
        <div className="header">
          <h2>Save Task</h2>

          <span className="iconClose">X</span>
        </div>

        <div>
          <form action="" className="formModal">
            {/* field Title */}
            <input type="text" id="title" placeholder="Title" />

            {/* field Description */}
            <input type="text" id="description" placeholder="Description" />

            {/* field Deadline */}
            <select name="status">
              {taskStatus.map((e) => {
                return <option value={e.statusId}>{e.name}</option>;
              })}
            </select>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
