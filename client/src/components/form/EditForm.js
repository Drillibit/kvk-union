import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { startRemoveItem, startEditItem } from '../../actions/items';

const EditForm = (props) => {
    return (
        <div>
            <ItemForm
                item={props.item}
                onSubmit={(item) => {
                    props.dispatch(startEditItem(props.item._id, item));
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveItem({ _id: props.item._id }));
            }}>
                Удалить
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        item: state.items.find((item) => item._id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditForm);