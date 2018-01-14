import React from 'react';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';

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
        items: state.items
    };
};

export default connect(mapStateToProps)(Show);