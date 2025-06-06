import React, { useState } from "react";
import "./App.css";
// import Card from "./Components/Card";
import Header from "./Components/Header";
import ListCard from "./Components/ListCard";
import Modal from "./Components/Modal";
import { statusEnums, tasks } from "./utils/constants";

function App() {
  const [data, setData] = useState([...tasks]);

  const [statusModal, setStatusModal] = useState(false);

  return (
    <React.Fragment>
      <div className="App">
        <Header setData={setData} setStatusModal={setStatusModal} />

        <div className="container">
          <div className="col">
            <h1>To Do</h1>
            <ListCard tasks={data} targetStatus={statusEnums.TODO} />
          </div>

          <div className="col">
            <h1>In Process</h1>
            <ListCard tasks={data} targetStatus={statusEnums.IN_PROGRESS} />
          </div>

          <div className="col">
            <h1>In Preview</h1>
            <ListCard tasks={data} targetStatus={statusEnums.IN_REVIEW} />
          </div>

          <div className="col">
            <h1>Done</h1>
            <ListCard tasks={data} targetStatus={statusEnums.DONE} />
          </div>
        </div>
      </div>
      {/* Modal */}

      {statusModal ? (
        <Modal setData={setData} setStatusModal={setStatusModal} />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default App;
