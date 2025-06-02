import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import { statusEnums, tasks } from "./utils/constants";

function App() {
  // statusEnums
  const filterTasksTodo = tasks.filter(
    (task) => task.statusId === statusEnums.TODO
  );

  const filterTasksInProgress = tasks.filter(
    (task) => task.statusId === statusEnums.IN_PROGRESS
  );

  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="col">
          {filterTasksTodo.map((e) => {
            return (
              <Card id={e.taskId} title={e.title} description={e.description} />
            );
          })}
        </div>

        <div className="col">
          {filterTasksInProgress.map((e) => {
            return (
              <Card id={e.taskId} title={e.title} description={e.description} />
            );
          })}
        </div>

        <div className="col">3</div>

        <div className="col">4</div>
      </div>
    </div>
  );
}

export default App;
