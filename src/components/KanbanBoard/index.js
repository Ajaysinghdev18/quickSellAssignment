// src/components/KanbanBoard/index.js
import React from "react";
import TicketColumn from "../TicketColumn";
import { STATUSES, PRIORITY } from "../../constants";
import { getUser } from "../../utils";
import "./KanbanBoard.css";

const KanbanBoard = ({ groupedTickets, users, groupingType }) => {
  return (
    <div className="kanban-board">
      {groupingType === "status"
        ? Object.entries(STATUSES).map(([status, data]) => (
            <TicketColumn
              showPriorityIcon={true}
              showUserIcon={true}
              key={status}
              title={status}
              users={users}
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
              users={users}
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
              title={getUser(users, group)?.name || group}
              users={users}
              user={getUser(users, group)}
              tickets={groupedTickets[group]}
            />
          ))
        : null}
    </div>
  );
};

export default KanbanBoard;
