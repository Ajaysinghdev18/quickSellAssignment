// src/components/Ticket.js
import React from "react";
import "./Ticket.css";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <div>{ticket.id}</div>
      <div>
        <h3>{ticket.title}</h3>
      </div>
      <div>
        <div className="tag">
          <span className="color" />
          {ticket.tag}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
