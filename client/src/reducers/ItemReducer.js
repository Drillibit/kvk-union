const itemReducerDefaultState = [];

export default (state = itemReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return [
                ...state,
                action.item
            ];
        case 'REMOVE_ITEM':
            return state.filter(({ _id }) => _id !== action._id );
        case 'EDIT_ITEM':
            return state.map((item) => {
                console.log(item._id);
                if(item._id === action._id){
                    return {
                        ...item,
                        ...action.updates
                    };
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
};