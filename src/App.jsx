import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NoFound from "./pages/NoFound";
import TaskDetail from "./pages/TaskDetail";
import NewTask from "./pages/NewTask";
import ProtectRoute from "./Components/ProtectRoute";

const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <div>
      <ul>
        <li>
          <Link to="/task/1">task Detail</Link>
        </li>
        <li>
          <Link to="/task">Task</Link>
        </li>
      </ul>

      <button
        onClick={() => {
          setIsLogin(true);
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          setIsLogin(false);
        }}
      >
        Logout
      </button>

      {isLogin && "user logged in"}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/task">
          <Route
            index
            element={
              <ProtectRoute userLogin={isLogin}>
                <Task />
              </ProtectRoute>
            }
          />
          <Route
            path=":id"
            element={
              <ProtectRoute userLogin={isLogin}>
                <TaskDetail />
              </ProtectRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectRoute userLogin={isLogin}>
                <NewTask />
              </ProtectRoute>
            }
          />
        </Route>

        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
};

export default App;
