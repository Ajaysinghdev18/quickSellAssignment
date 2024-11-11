// src/components/Ticket.js
import React from "react";
import "./Ticket.css";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <p>{ticket.id}</p>
      <h3>{ticket.title}</h3>
      <p>Priority: {ticket.priority}</p>
      <p>{ticket.tag}</p>
    </div>
  );
};

export default Ticket;
