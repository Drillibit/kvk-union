import axios from 'axios';


const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});


const startAddItem = (itemData = {}) => {
    return async (dispatch) => {
        const {
            name = '',
            price = 0,
            description = '',
            image = ''
        } = itemData;
        const item = { 
            name, 
            price, 
            description, 
            image 
        };
        const dataForm = new FormData();
        dataForm.append('name', item.name);
        dataForm.append('price', item.price);
        dataForm.append('description', item.description);
        dataForm.append('image', item.image);
        let res = await axios.post('/add', dataForm);
        dispatch(addItem({...res.data}));
    };
};

const removeItem = ({ _id } = {}) => ({
    type: 'REMOVE_ITEM',
    _id
});

export const startRemoveItem = ({ _id } = {}) => {
    return async (dispatch) => {
        await axios.delete(`/api/remove/${_id}`, _id);
        dispatch(removeItem({ _id }));
    }
};

export const editItem = (_id, updates) => ({
    type: 'EDIT_ITEM',
    _id,
    updates
});

export const startEditItem = (_id, updates) => {
    return async (dispatch) => {
        const item = {
            name: updates.name,
            price: updates.price,
            description: updates.description,
            image: updates.image
        };
        console.log(item);
        const dataForm = new FormData();
        dataForm.append('name', updates.name);
        dataForm.append('price', updates.price);
        dataForm.append('description', updates.description);
        dataForm.append('image', updates.image);
        let res = await axios.put(`/api/edit/${_id}`, dataForm);
        dispatch(editItem(_id, {...res.data}));
    }
};

export const fetchItems = () => {
    return async (dispatch) => {
        let res = await axios.get('/api/items');
        res.data.items.map((item) => {
            dispatch(addItem({...item}));
            return item;
        });        
    };
};

export default startAddItem;