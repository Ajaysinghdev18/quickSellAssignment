// src/components/KanbanBoard.js
import React from "react";
import TicketColumn from "./TicketColumn";
import "./KanbanBoard.css";

const STATUSES = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

const PRIORITY = ["No Priority", "Urgent", "High", "Medium", "Low"];

const KanbanBoard = ({ groupedTickets, users, groupingType }) => {
  const getUser = (group) => {
    return users.find((user) => user.id === group);
  };

  return (
    <div className="kanban-board">
      {groupingType === "status"
        ? STATUSES.map((group) => (
            <TicketColumn
              key={group}
              title={group}
              tickets={groupedTickets[group] || []}
            />
          ))
        : null}
      {groupingType === "priority"
        ? PRIORITY.map((priority, index) => (
            <TicketColumn
              key={index}
              title={priority}
              tickets={groupedTickets[index] || []}
            />
          ))
        : null}
      {groupingType === "userId"
        ? Object.keys(groupedTickets).map((group) => (
            <TicketColumn
              key={group}
              title={getUser(group)?.name || group}
              tickets={groupedTickets[group]}
            />
          ))
        : null}
    </div>
  );
};

export default KanbanBoard;
