import React from "react";
import Ticket from "./Ticket";
import "./TicketColumn.css";
import "./Column.css";

const TicketColumn = ({
  title,
  users,
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
        <h2>{title}</h2>
        <span className="ticket-count">{tickets.length}</span>
        <div className="actions">
          <img src="/icons/add.svg" alt="add" />
          <img src="/icons/3 dot menu.svg" alt="menu" />
        </div>
      </div>
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
  );
};

export default TicketColumn;
