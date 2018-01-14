import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter } from '../actions/filters';

const Filter = (props) => {
    return (
            <form className="container">
            <div className="input-field">
                <input
                    id="search"
                    type="search"
                    required
                    value={props.filters.name}
                    onChange={(e) => {
                        props.dispatch(setNameFilter(e.target.value));
                    }}
                />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
        </div>
      </form>
    );
};




const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(Filter);
