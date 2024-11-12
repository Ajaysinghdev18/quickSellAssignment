// src/constants/index.js
export const STATUSES = {
  Backlog: {
    key: 0,
    icon: "img/Backlog.svg",
  },
  Todo: {
    key: 1,
    icon: "img/To-do.svg",
  },
  "In progress": {
    key: 2,
    icon: "img/in-progress.svg",
  },
  Done: {
    key: 3,
    icon: "img/Done.svg",
  },
  Cancelled: {
    key: 4,
    icon: "img/Cancelled.svg",
  },
};

export const PRIORITY = {
  "No Priority": {
    key: 0,
    icon: "img/No-priority.svg",
  },
  Urgent: {
    key: 4,
    icon: "img/SVG - Urgent Priority colour.svg",
    noData: "img/SVG - Urgent Priority grey.svg",
  },
  High: {
    key: 3,
    icon: "img/Img - High Priority.svg",
  },
  Medium: {
    key: 2,
    icon: "img/Img - Medium Priority.svg",
  },
  Low: {
    key: 1,
    icon: "img/Img - Low Priority.svg",
  },
};

export const COLORS = ["#557feb", "#2a953c", "#878d04", "#bf7227"];
