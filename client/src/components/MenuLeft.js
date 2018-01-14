import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const MenuLeft = (props) => {
    return (
        <div>
            <Filter />
            <ul id="dropdown1" className="dropdown-content">
                {props.items.map((item) => {
                    return (<li key={item._id}><Link to={{
                        pathname: `/itemscollection/${item._id}`,
                        state: { ...item }
                    }}>{item.name}</Link></li>);
                })}
            </ul>
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">KVK-UNION</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/itemform">Добавить товар</Link></li>
      <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Товары<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>  
    );
};



const mapStateToProps = (state) => {
    return {
      items: state.items  
    };
};

export default connect(mapStateToProps)(MenuLeft);