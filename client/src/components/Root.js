import React from 'react'; 
import Show from './Show';
import Filter from './Filter';

const Root = (props) => {
  return (
    <div>
      <Filter />
      <Show />
    </div> 
  );
}

export default Root;