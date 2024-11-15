// src/utils/index.js
export const groupTickets = (tickets, groupingType) => {
    return tickets.reduce((groups, ticket) => {
        const groupKey = ticket[groupingType];
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(ticket);
        return groups;
    }, {});
};

export const sortTickets = (groupedTickets, sortingType) => {
    const sortedGroups = {};
    Object.keys(groupedTickets).forEach(group => {
        sortedGroups[group] = [...groupedTickets[group]].sort((a, b) => {
            if (sortingType === 'priority') {
                return b.priority - a.priority;
            }
            return a.title.localeCompare(b.title);
        });
    });
    return sortedGroups;
};

export const getUser = (users, group) => {
    return users.find((user) => user.id === group);
};

export const getInitials = (name) => {
    return name
        .split(" ")
        .map((n) => n)
        .map((n) => n[0]);
};
