import React, { Component } from 'react';
import './App.css';
import Exports from './components/Export'
import Classes from './components/Class'
import Consts from './components/ConstComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Exports />
        <Classes />
        <Consts />
        </div>
  );
  }
}
export default App;
