import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div className="row block container">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">KVK Union</span>
                        <p>В данный момент сайт находится в разработке и не является конечной версией продукта.</p>
                    </div>
                    <div className="card-action">
                        <Link to="/main">Перейти на главную</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;