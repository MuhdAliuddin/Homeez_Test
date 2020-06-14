import React, { Component } from 'react';
import FloorData from '../resources/floorplan-sample.json'
import FloorDetail from './FloorDetail'
import PathDetail from './PathDetails'
import Furniture from '../resources/furniture-sample.svg';


class FloorPlan extends Component {

    render() {
        return (
            <div>
                <img src={Furniture} alt="test"/>
                <svg width="1000" height="1000" viewBox="0 0 800 800">
                    {FloorData.layout.map((item, index)=>{
                    return <FloorDetail post={item} key={'post-list-key ${index}'}/>
                    })}
                    {FloorData.layout.map((item, index)=>{
                    return <PathDetail post={item} key={'post-list-key ${index}'}/>
                    })}
                </svg>
            </div>

        )
    }
}

export default FloorPlan