// src/components/DisplayButton/index.js
import React, { useState } from "react";
import "./DisplayButton.css";

// Event Handlers (Logic)
const handleGroupingChange = (onGroupingChange) => (e) => {
  onGroupingChange(e.target.value);
};

const handleSortingChange = (onSortingChange) => (e) => {
  onSortingChange(e.target.value);
};

const DisplayButton = ({ onGroupingChange, onSortingChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="display-section">
        <div className="display-button" onClick={() => setShowFilters(true)}>
          <img width={16} src="/img/Display.svg" alt="display" />
          <span>Display</span>
          <img width={20} src="/img/down.svg" alt="down" />
        </div>
      </div>
      {showFilters ? (
        <>
          <div
            className="display-backdrop"
            onClick={() => setShowFilters(false)}
          />
          <div className="display-filters">
            <div className="filter">
              <div className="label">Grouping</div>
              <select onChange={handleGroupingChange(onGroupingChange)}>
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="filter">
              <div className="label">Ordering</div>
              <select onChange={handleSortingChange(onSortingChange)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DisplayButton;
