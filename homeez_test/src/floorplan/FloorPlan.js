import React, { Component } from 'react';
import FloorData from '../resources/floorplan-sample.json'
import FloorDetail from './FloorDetail'

class FloorPlan extends Component {

    render() {
        return (
        <div>
            {FloorData.layout.map((item, index)=>{
                return <FloorDetail post={item} key={'post-list-key ${index}'}/>
            })}
        </div>
    )
  }
}

export default FloorPlan