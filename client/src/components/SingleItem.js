import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveItem } from '../actions/items';

const SingleItem = (props) => {
    return (
        <div className="container">
            <div className="card hoverable">
                <div className="card-image">
                    <img className="image"
                        src={`/api/items/${props._id || props.location.state._id}`}
                        alt={props.name || props.location.state._name}
                    />
                        <span className="card-title">{props.name || props.location.state.name}</span>
                    </div>
                    <div className="card-content">
                        <p className="truncate">{props.description || props.location.state.description}</p>
                    </div>
                    <div className="card-action">
                        {/* <Link to="/">This is a link</Link> */}
                        <Link to={`/editform/${props._id || props.location.state._id}`}>Редактировать</Link>
                        <button 
                            onClick={() => {
                                props.dispatch(startRemoveItem({ _id: props._id }));
                            }}
                            className="waves-effect waves-light btn red darken-2" >Удалить</button>
                    </div>
                </div>
            </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        item: state.item
    };
};

export default connect(mapStateToProps)(SingleItem);