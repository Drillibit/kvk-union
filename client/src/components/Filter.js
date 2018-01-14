import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, setPriceFilter } from '../actions/filters';

const Filter = (props) => {
    return (
        <div className="input-field">
            <input
                id="search"
                type="search"
                required
                type="text"
                value={this.props.filters.name}
                onChange={(e) => {
                    this.props.dispatch(setNameFilter(e.target.value));
                }}
            />
            <label className="label-icon" for="search">
                <i className="material-icons">search</i>
            </label>
                <i className="material-icons">close</i>
        </div>
    );
};


const mapStateToProps = (props) => {
    return {
        filters: props.filters
    };
};

export default connect(mapStateToProps)(Filter);
