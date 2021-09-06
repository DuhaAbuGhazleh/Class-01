import React, { Component } from 'react'

 class UserData extends Component {
    render() {
        return (
            <div>
               <h2>title : {this.props.title}</h2>
               <img src={this.props.imagesrc} alt={this.props.title} title='horned image'/>
                <p>discription:{this.props.discription} </p> 
            </div>
        )
    }
}

export default UserData
