// src/App.js
import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import DisplayButton from "./components/DisplayButton";
import { fetchData } from "./services/apiService";
import { groupTickets, sortTickets } from "./utils/utils";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingType, setGroupingType] = useState("status");
  const [sortingType, setSortingType] = useState("priority");

  useEffect(() => {
    fetchData()
      .then((data) => setTickets(data.tickets))
      .catch(console.error);
  }, []);

  const groupedTickets = groupTickets(tickets, groupingType);
  const sortedGroupedTickets = sortTickets(groupedTickets, sortingType);

  return (
    <div className="app">
      <DisplayButton
        onGroupingChange={setGroupingType}
        onSortingChange={setSortingType}
      />
      <KanbanBoard groupedTickets={sortedGroupedTickets} />
    </div>
  );
};

export default App;