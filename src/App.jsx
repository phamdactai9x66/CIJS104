import React, { useState } from "react";
import "./App.css";
// import Card from "./Components/Card";
import Header from "./Components/Header";
import ListCard from "./Components/ListCard";
import Modal from "./Components/Modal";
import { statusEnums, tasks } from "./utils/constants";
import ModalEdit from "./Components/ModalEdit";

function App() {
  const [data, setData] = useState([...tasks]);

  const [statusModal, setStatusModal] = useState(false);

  const [statusModalEdit, setStatusModalEdit] = useState({
    status: false,
    taskId: null,
  });

  return (
    <React.Fragment>
      <div className="App">
        <Header setData={setData} setStatusModal={setStatusModal} />

        <div className="container">
          <div className="col">
            <h1>To Do</h1>
            <ListCard
              tasks={data}
              targetStatus={statusEnums.TODO}
              setStatusModalEdit={setStatusModalEdit}
            />
          </div>

          <div className="col">
            <h1>In Process</h1>
            <ListCard
              tasks={data}
              targetStatus={statusEnums.IN_PROGRESS}
              setStatusModalEdit={setStatusModalEdit}
            />
          </div>

          <div className="col">
            <h1>In Preview</h1>
            <ListCard
              tasks={data}
              targetStatus={statusEnums.IN_REVIEW}
              setStatusModalEdit={setStatusModalEdit}
            />
          </div>

          <div className="col">
            <h1>Done</h1>
            <ListCard
              tasks={data}
              targetStatus={statusEnums.DONE}
              setStatusModalEdit={setStatusModalEdit}
            />
          </div>
        </div>
      </div>

      {/* Modal Edit */}
      {statusModalEdit.status ? (
        <ModalEdit
          setData={setData}
          data={data}
          id={statusModalEdit.taskId}
          setStatusModal={setStatusModalEdit}
        />
      ) : (
        ""
      )}

      {/* Modal Create */}

      {statusModal ? (
        <Modal setData={setData} setStatusModal={setStatusModal} />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default App;
