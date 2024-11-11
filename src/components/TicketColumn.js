import React from "react";
import Ticket from "./Ticket";
import "./TicketColumn.css";
import "./Column.css";

const TicketColumn = ({ title, tickets }) => {
  return (
    <div className="ticket-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketColumn;
