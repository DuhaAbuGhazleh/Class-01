import React, { Component } from 'react'
import UserData from './UserData'
 class Main extends Component {
    render() {
        let HornedBeast=[{title:"Rhino Family",discription:"Mother (or father) rhino with two babies"},
        {title:"Unicorn Head",discription:"Someone wearing a creepy unicorn head mask"}]
        return (
            <>
            
            {
               HornedBeast.map(element=>{
                    return <UserData title={element.title}  discription={element.discription}/>
                })
            }
            
        </>
        )
    }
}

export default Main
