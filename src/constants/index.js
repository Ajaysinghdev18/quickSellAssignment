// src/constants/index.js
export const STATUSES = {
  Backlog: {
    key: 0,
    icon: "icons/Backlog.svg",
  },
  Todo: {
    key: 1,
    icon: "icons/To-do.svg",
  },
  "In progress": {
    key: 2,
    icon: "icons/in-progress.svg",
  },
  Done: {
    key: 3,
    icon: "icons/Done.svg",
  },
  Cancelled: {
    key: 4,
    icon: "icons/Cancelled.svg",
  },
};

export const PRIORITY = {
  "No Priority": {
    key: 0,
    icon: "icons/No-priority.svg",
  },
  Urgent: {
    key: 4,
    icon: "icons/SVG - Urgent Priority colour.svg",
    noData: "icons/SVG - Urgent Priority grey.svg",
  },
  High: {
    key: 3,
    icon: "icons/Img - High Priority.svg",
  },
  Medium: {
    key: 2,
    icon: "icons/Img - Medium Priority.svg",
  },
  Low: {
    key: 1,
    icon: "icons/Img - Low Priority.svg",
  },
};

export const COLORS = ["#557feb", "#2a953c", "#878d04", "#bf7227"];
