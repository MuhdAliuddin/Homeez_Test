import React, { Component } from 'react';


class FloorDetail extends Component {

    render() {
        const {post} = this.props
        return (
        <div>
            <h5>{post.id}</h5>
            <svg>
                <polygon points={post.points} />
            </svg>
        </div>
    )
  }
}

export default FloorDetail