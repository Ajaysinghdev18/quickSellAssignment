// src/components/KanbanBoard.js
import React from "react";
import TicketColumn from "./TicketColumn";
import "./KanbanBoard.css";

const PRIORITY = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const KanbanBoard = ({ groupedTickets, users, groupingType }) => {
  const getGroupTitle = (group) => {
    if (groupingType === "userId") {
      return users.find((user) => user.id === group)?.name || group;
    }
    if (groupingType === "priority") {
      return PRIORITY[group];
    }
    return group;
  };
  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <TicketColumn
          key={group}
          title={getGroupTitle(group)}
          tickets={groupedTickets[group]}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
