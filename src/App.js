// src/App.js
import React, { useState, useEffect, useRef } from "react";
import KanbanBoard from "./components/KanbanBoard";
import DisplayButton from "./components/DisplayButton";
import { fetchData } from "./services/apiService";
import { COLORS } from "./constants";
import { groupTickets, sortTickets, getInitials } from "./utils";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingType, setGroupingType] = useState("status");
  const [sortingType, setSortingType] = useState("priority");

  const isDataFetchedRef = useRef(false);

  useEffect(() => {
    if (!isDataFetchedRef.current) {
      isDataFetchedRef.current = true;
      fetchData()
        .then((data) => {
          setTickets(data.tickets);
          setUsers(
            data.users.map((user) => ({
              ...user,
              initials: getInitials(user.name),
              color: COLORS[Math.floor(Math.random() * 3) + 1],
            }))
          );
        })
        .catch(console.error);
    }
  }, []);

  const groupedTickets = groupTickets(tickets, groupingType);
  const sortedGroupedTickets = sortTickets(groupedTickets, sortingType);

  return (
    <div className="app">
      <DisplayButton
        onGroupingChange={setGroupingType}
        onSortingChange={setSortingType}
      />
      <KanbanBoard
        groupedTickets={sortedGroupedTickets}
        users={users}
        groupingType={groupingType}
      />
    </div>
  );
};

export default App;
