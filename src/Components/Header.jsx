import React from "react";
import { tasks } from "../utils/constants";

const Header = (props) => {
  // console.log(props);
  const onSearch = (event) => {
    const searchTask = tasks.filter((task) => {
      const searchTitle = task.title.toLowerCase();
      const searchDescription = task.description.toLowerCase();

      // input value
      const searchValue = event.target.value.toLowerCase();

      const isTitleMatch = searchTitle.indexOf(searchValue) !== -1;

      const isDescriptionMatch = searchDescription.indexOf(searchValue) !== -1;

      return isTitleMatch || isDescriptionMatch;
    });

    props.setData(searchTask);
  };

  const onOpenModal = () => {
    props.setStatusModal(true);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input
        type="text"
        name=""
        id=""
        onChange={onSearch}
        placeholder="Searching..."
      />

      <button onClick={onOpenModal}>New Items</button>
    </div>
  );
};

export default Header;
