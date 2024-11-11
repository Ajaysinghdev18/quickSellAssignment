// src/components/KanbanBoard.js
import React from "react";
import TicketColumn from "./TicketColumn";
import { STATUSES, PRIORITY } from "../constants";
import "./KanbanBoard.css";

const KanbanBoard = ({ groupedTickets, users, groupingType }) => {
  const getUser = (group) => {
    return users.find((user) => user.id === group);
  };

  return (
    <div className="kanban-board">
      {groupingType === "status"
        ? Object.entries(STATUSES).map(([status, data]) => (
            <TicketColumn
              showPriorityIcon={true}
              showUserIcon={true}
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
              showStatusIcon={true}
              showUserIcon={true}
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
              showStatusIcon={true}
              showPriorityIcon={true}
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
