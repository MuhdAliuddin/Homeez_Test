import React, { Component } from 'react';
import FloorPlan from './floorplan/FloorPlan'

import './App.css';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="content-div">
          <FloorPlan />

        </div>

      </div>
    )
  }
}

export default App;
