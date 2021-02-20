import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {fetchData} from './actions'
import {connect} from 'react-redux'

class App extends Component {
componentDidMount(){
  fetchData()
}
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default connect(null, {fetchData})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.