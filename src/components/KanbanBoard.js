// src/components/KanbanBoard.js
import React from "react";
import TicketColumn from "./TicketColumn";
import "./KanbanBoard.css";

const STATUSES = {
  Backlog: {
    key: 0,
    icon: "icons/Backlog.svg",
  },
  Todo: {
    key: 1,
    icon: "icons/To-do.svg",
  },
  "In progress": {
    key: 2,
    icon: "icons/in-progress.svg",
  },
  Done: {
    key: 3,
    icon: "icons/Done.svg",
  },
  Cancelled: {
    key: 4,
    icon: "icons/Cancelled.svg",
  },
};

const PRIORITY = {
  "No Priority": {
    key: 0,
    icon: "icons/No-priority.svg",
  },
  Urgent: {
    key: 4,
    icon: "icons/SVG - Urgent Priority colour.svg",
    noData: "icons/SVG - Urgent Priority grey.svg",
  },
  High: {
    key: 3,
    icon: "icons/Img - High Priority.svg",
  },
  Medium: {
    key: 2,
    icon: "icons/Img - Medium Priority.svg",
  },
  Low: {
    key: 1,
    icon: "icons/Img - Low Priority.svg",
  },
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
              icon={
                (groupedTickets[status] || []).length === 0
                  ? data.noData || data.icon
                  : data.icon
              }
              tickets={groupedTickets[status] || []}
            />
          ))
        : null}
      {groupingType === "priority"
        ? Object.entries(PRIORITY).map(([priority, data]) => (
            <TicketColumn
              key={priority}
              title={priority}
              icon={
                (groupedTickets[data.key] || []).length === 0
                  ? data.noData || data.icon
                  : data.icon
              }
              tickets={groupedTickets[data.key] || []}
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
