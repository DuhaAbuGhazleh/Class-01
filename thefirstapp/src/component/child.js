import React, { Component } from 'react'

 class child extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.childVote}</h1> 
            </div>
        )
    }
}

export default child
