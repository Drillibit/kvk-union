import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer stick  brown lighten-1">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Контактная информация</h5>
                        <p className="grey-text text-lighten-4">Различные ссылки адреса соц сети телефоны</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Филиалы</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Город</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Астана</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Кокшетау</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Щучинск</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright brown">
                <div className="container">
                    © 2017 KVK Union.
            <a className="grey-text text-lighten-4 right" href="#!">Узнать больше</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;