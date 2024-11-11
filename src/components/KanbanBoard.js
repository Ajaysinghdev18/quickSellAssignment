// src/components/KanbanBoard.js
import React from "react";
import TicketColumn from "./TicketColumn";
import "./KanbanBoard.css";

const KanbanBoard = ({ groupedTickets }) => {
  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <TicketColumn
          key={group}
          title={group}
          tickets={groupedTickets[group]}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
