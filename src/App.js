import React, { Component } from 'react';
import Registration from './Registration';
import Tas5 from './Tas5';
import Task from './Task';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';

class App extends Component {
  render() {
    return (
      <div>
      <Task/><br/>
      <Task2/><br/>
      <Task3/><br/>
      <Task4/><br/>
      <Tas5/><br/>
      <Registration/>  /*complete crud operation*/
     
       
      </div>
    );
  }
}

export default App;
