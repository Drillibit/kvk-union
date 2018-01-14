import React from 'react';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';
import selectItems from '../selectors/items';

const Show = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {props.items.map((item, index) => {
                        let props = {...item};
                        return <SingleItem key={index} {...props} />;
                    })}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: selectItems(state.items, state.filters)
    };
};

export default connect(mapStateToProps)(Show);