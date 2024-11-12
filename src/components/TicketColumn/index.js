// src/components/TicketColumn/index.js
import React from "react";
import Ticket from "../Ticket";
import "./TicketColumn.css";

const TicketColumn = ({
  title,
  users,
  user,
  icon,
  tickets,
  showStatusIcon,
  showPriorityIcon,
  showUserIcon,
}) => {
  return (
    <div className="ticket-column">
      <div className="column-title">
        {icon && <img src={icon} alt={title} />}
        {user && (
          <span
            className="user-initials"
            style={{
              backgroundColor: user.color,
            }}
          >
            {user.initials}
          </span>
        )}
        <h2>{title}</h2>
        <span className="ticket-count">{tickets.length}</span>
        <div className="actions">
          <img src="/img/add.svg" alt="add" />
          <img src="/img/3 dot menu.svg" alt="menu" />
        </div>
      </div>
      <div className="column-tickets">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            users={users}
            showStatusIcon={showStatusIcon}
            showPriorityIcon={showPriorityIcon}
            showUserIcon={showUserIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketColumn;
