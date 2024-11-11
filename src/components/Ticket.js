// src/components/Ticket.js
import React from "react";
import { STATUSES, PRIORITY } from "../constants";
import "./Ticket.css";

const Ticket = ({ ticket, showStatusIcon, showPriorityIcon, showUserIcon }) => {
  return (
    <div className="ticket">
      <div>{ticket.id}</div>
      <div className="title">
        {showStatusIcon && (
          <img src={STATUSES[ticket.status]?.icon} alt={ticket.title} />
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
              alt={ticket.title}
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
