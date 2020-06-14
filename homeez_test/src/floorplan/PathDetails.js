import React, { Component } from 'react';


class PathDetail extends Component {

    render() {
        const {post} = this.props
        return (
            <path id={post.id} d={post.d} style={{stroke:"black",fill:"grey"}}></path>
    )
  }
}

export default PathDetail