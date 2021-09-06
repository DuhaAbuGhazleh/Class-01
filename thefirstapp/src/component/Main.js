import React, { Component } from 'react'
import UserData from './UserData'
import HornedBeast1 from './image/HornedBeast1.jpg'
import HornedBeast2 from './image/HornedBeast2.jpg'

 class Main extends Component {
    render() {
        let HornedBeast=[{title:"Rhino Family",image:HornedBeast1,discription:"Mother (or father) rhino with two babies"},
        {title:"Unicorn Head",image:HornedBeast2,discription:"Someone wearing a creepy unicorn head mask"}]
        return (
            <>
            
            {
               HornedBeast.map(element=>{
                    return <UserData title={element.title}  discription={element.discription} imagesrc={element.image}/>
                })
            }
            
        </>
        )
    }
}

export default Main
