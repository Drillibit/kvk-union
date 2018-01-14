import React from 'react';
import {connect} from 'react-redux';
import ItemForm from './ItemForm';
import startAddItem from '../../actions/items';

const ItemNew = (props) => {
    return (
        <div>
            <h1>Item New</h1>
            <ItemForm 
                onSubmit={(item) => {
                    props.dispatch(startAddItem(item));
                }}
            />
        </div>
    );
};

export default connect()(ItemNew);