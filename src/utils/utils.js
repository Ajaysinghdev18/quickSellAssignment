// src/utils/utils.js
export const groupTickets = (tickets, groupingType) => {
    return tickets.reduce((groups, ticket) => {
        const groupKey = ticket[groupingType] || 'Other';
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
