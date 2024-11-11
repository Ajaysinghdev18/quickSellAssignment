// src/components/Ticket.js
import React from "react";
import { STATUSES, PRIORITY } from "../constants";
import { getUser } from "../utils/utils";
import "./Ticket.css";

const COLORS = ["#557feb", "#2a953c", "#878d04", "#bf7227"];

const Ticket = ({
  ticket,
  users,
  showStatusIcon,
  showPriorityIcon,
  showUserIcon,
}) => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n)
      .map((n) => n[0]);
  };

  return (
    <div className="ticket">
      <div className="id">
        {ticket.id}
        {showUserIcon && (
          <span
            className="user-initials"
            style={{
              backgroundColor: COLORS[Math.floor(Math.random() * 3) + 1],
            }}
          >
            {getInitials(getUser(users, ticket.userId)?.name)}
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
