import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as actions from './actions/items';
//Root Component
import Root from './components/Root';
import ItemNew from './components/form/ItemNew';
import SingleItem from './components/SingleItem';
import MenuLeft from './components/MenuLeft';
import EditForm from './components/form/EditForm';
import Filter from './components/Filter';

import './styles/card.scss';


class App extends React.Component { 
  componentDidMount() {
    this.props.fetchItems()
  }   
  render(){
  return (
      <Router>
        <div>
          <MenuLeft />
          <Switch> 
            <Route exact path="/" component={Root}/>
            <Route path="/filter" component={Filter}/>
            <Route path="/itemform" component={ItemNew}/>
            <Route path="/editform/:id" component={EditForm}/>
            <Route path="/itemscollection/:id" component={SingleItem}/>
          </Switch>
        </div>
      </Router>
    );
  }
};



export default connect(null, actions)(App);
