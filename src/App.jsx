import React from "react";
import "./App.css";
// import Card from "./Components/Card";
import Header from "./Components/Header";
import ListCard from "./Components/ListCard";
import Modal from "./Components/Modal";
import { statusEnums, tasks } from "./utils/constants";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />

        <div className="container">
          <div className="col">
            <ListCard tasks={tasks} targetStatus={statusEnums.TODO} />
          </div>

          <div className="col">
            <ListCard tasks={tasks} targetStatus={statusEnums.IN_PROGRESS} />
          </div>

          <div className="col">
            <ListCard tasks={tasks} targetStatus={statusEnums.IN_REVIEW} />
          </div>

          <div className="col">
            <ListCard tasks={tasks} targetStatus={statusEnums.DONE} />
          </div>
        </div>
      </div>
      {/* Modal */}

      {/* <Modal /> */}
    </React.Fragment>
  );
}

export default App;
