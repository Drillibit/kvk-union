const filtersReducerDefaultState = {
    name: '',
    sortBy: 'price'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name: action.name
            };
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: 'price'
            };
        default:
            return state;
    }
};