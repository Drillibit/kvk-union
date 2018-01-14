export default (items, { name, sortBy }) => {
    return items.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(name.toLowerCase());
        return nameMatch;
    }).sort((a, b) => {
        return a.price < b.price ? 1 : -1;
    });
};