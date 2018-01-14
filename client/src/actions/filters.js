export const setNameFilter = (name = '') => ({
    type: 'SET_NAME_FILTER',
    name
});

export const setPriceFilter = () => ({
    type: 'SORT_BY_PRICE'
});