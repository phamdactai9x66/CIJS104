import React, { useState } from "react";
import "../App.css";
// import Card from "../Components/Card";
import Header from "../Components/Header";
import ListCard from "../Components/ListCard";
import Modal from "../Components/Modal";
import { statusEnums } from "../utils/constants";
import ModalEdit from "../Components/ModalEdit";
import Assistant from "../Components/Assistant";

function Task() {
  // console.log(searchParams.get("newModal"));
  const [data, setData] = useState([]);

  const [statusModal, setStatusModal] = useState(false);

  const [statusModalEdit, setStatusModalEdit] = useState({
    status: false,
    taskId: null,
  });

  const [modalAssistant, setModalAssistant] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleApi = () => {
    // side effect
    // starting call API

    setLoading(true);
    fetch("http://localhost:4000/tasks", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    // life cycle
    handleApi();

    return () => {
      console.log("component will unmount");
    };
  }, []);

  return (
    <React.Fragment>
      <div className="Task">
        <Header setData={setData} setStatusModal={setStatusModal} />

        {loading ? (
          "loading..."
        ) : (
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
        )}
      </div>

      <button onClick={() => setModalAssistant(true)}>Assistant AI</button>

      {modalAssistant ? (
        <Assistant setStatusAssistant={setModalAssistant} />
      ) : (
        ""
      )}

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
        <Modal
          handleApi={handleApi}
          setData={setData}
          setStatusModal={setStatusModal}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Task;
