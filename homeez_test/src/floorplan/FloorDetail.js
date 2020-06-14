import React, { Component } from 'react';


class FloorDetail extends Component {

    render() {
        const {post} = this.props
        
        return (
            <polygon id={post.id} points={post.points} style={{stroke:"black",fill:"grey"}}></polygon>
    )
  }
}

export default FloorDetail