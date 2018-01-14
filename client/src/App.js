import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as actions from './actions/items';
//Root Component
import Home from './components/Home';
import Root from './components/Root';
import ItemNew from './components/form/ItemNew';
import SingleItem from './components/SingleItem';
import MenuLeft from './components/MenuLeft';
import EditForm from './components/form/EditForm';
import Filter from './components/Filter';
import Footer from './components/Footer';



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
            <Route exact path="/" component={Home}/>
            <Route path="/main" component={Root}/>
            <Route path="/filter" component={Filter}/>
            <Route path="/itemform" component={ItemNew}/>
            <Route path="/editform/:id" component={EditForm}/>
            <Route path="/itemscollection/:id" component={SingleItem}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
};



export default connect(null, actions)(App);
