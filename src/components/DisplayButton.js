import React from "react";
import "./DisplayButton.css";

// Event Handlers (Logic)
const handleGroupingChange = (onGroupingChange) => (e) => {
  onGroupingChange(e.target.value);
};

const handleSortingChange = (onSortingChange) => (e) => {
  onSortingChange(e.target.value);
};

const DisplayButton = ({ onGroupingChange, onSortingChange }) => {
  return (
    <div className="display-button">
      <select onChange={handleGroupingChange(onGroupingChange)}>
        <option value="status">Group by Status</option>
        <option value="userId">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>

      <select onChange={handleSortingChange(onSortingChange)}>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};

export default DisplayButton;
