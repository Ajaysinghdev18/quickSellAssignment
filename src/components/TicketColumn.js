import React from "react";
import Ticket from "./Ticket";
import "./TicketColumn.css";
import "./Column.css";

const TicketColumn = ({ title, icon, tickets }) => {
  return (
    <div className="ticket-column">
      <div className="title">
        {icon && <img className="title-img" src={icon} alt={title} />}
        <h2>{title}</h2>
        <span className="ticket-count">{tickets.length}</span>
      </div>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketColumn;
