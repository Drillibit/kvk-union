import React from 'react'; 
import Show from './Show';
import Footer from './Footer';

import '../styles/card.scss';

const Root = (props) => {
  return (
    <div className="landing">
      <h1>Добро пожаловать</h1>
      <Show />
      <Footer />
    </div> 
  );
}

export default Root;