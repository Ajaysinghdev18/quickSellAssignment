// src/components/KanbanBoard.js
import React from "react";
import TicketColumn from "./TicketColumn";
import "./KanbanBoard.css";

const STATUSES = {
  Backlog: {
    icon: "icons/Backlog.svg",
  },
  Todo: {
    icon: "icons/To-do.svg",
  },
  "In progress": {
    icon: "icons/in-progress.svg",
  },
  Done: {
    icon: "icons/Done.svg",
  },
  Cancelled: {
    icon: "icons/Cancelled.svg",
  },
};

const PRIORITY = {
  "No Priority": 0,
  Urgent: 4,
  High: 3,
  Medium: 2,
  Low: 1,
};

const KanbanBoard = ({ groupedTickets, users, groupingType }) => {
  const getUser = (group) => {
    return users.find((user) => user.id === group);
  };

  return (
    <div className="kanban-board">
      {groupingType === "status"
        ? Object.entries(STATUSES).map(([status, data]) => (
            <TicketColumn
              key={status}
              title={status}
              icon={data.icon}
              tickets={groupedTickets[status] || []}
            />
          ))
        : null}
      {groupingType === "priority"
        ? Object.entries(PRIORITY).map(([priority, index]) => (
            <TicketColumn
              key={priority}
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
