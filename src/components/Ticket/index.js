// src/components/Ticket/index.js
import React from "react";
import { STATUSES, PRIORITY } from "../../constants";
import { getUser } from "../../utils";
import "./Ticket.css";

const Ticket = ({
  ticket,
  users,
  showStatusIcon,
  showPriorityIcon,
  showUserIcon,
}) => {
  const user = getUser(users, ticket.userId);

  return (
    <div className="ticket">
      <div className="id">
        {ticket.id}
        {showUserIcon && user && (
          <span
            className="user-initials"
            style={{
              backgroundColor: user.color,
            }}
          >
            {user.initials}
          </span>
        )}
      </div>
      <div className="title">
        {showStatusIcon && (
          <img src={STATUSES[ticket.status]?.icon} alt={ticket.status} />
        )}
        <h3>{ticket.title}</h3>
      </div>
      <div className="tags">
        {showPriorityIcon && (
          <div className="tag">
            <img
              src={
                Object.values(PRIORITY).find((p) => p.key === ticket.priority)
                  ?.icon
              }
              alt={ticket.priority}
            />
          </div>
        )}
        <div className="tag">
          <span className="color" />
          {ticket.tag}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
