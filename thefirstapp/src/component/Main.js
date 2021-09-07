import React, { Component } from 'react'
import UserData from './UserData'
// import HornedBeast1 from './image/HornedBeast1.jpg'
// import HornedBeast2 from './image/HornedBeast2.jpg'
import Datajson from '../data.json';



class Main extends Component {

    render() {

        return (
            
                <div className="row">
                    {Datajson.map(elementjson => {
                        return <UserData
                            image_url={elementjson.image_url}
                            title={elementjson.title}
                            description={elementjson.description}
                            keyword={elementjson.keyword}
                            horns={elementjson.horns}
                            vote={elementjson.stateVote} 
                            handelopen={this.props.handelopen}
                            />;
                    })}
                </div>
        )
    }
}



export default Main



 // let HornedBeast=[{title:"Rhino Family",image:HornedBeast1,discription:"Mother (or father) rhino with two babies"},
        // {title:"Unicorn Head",image:HornedBeast2,discription:"Someone wearing a creepy unicorn head mask"}]
        // return (
        //     <>

        //     {
        //        HornedBeast.map(element=>{
        //             return <UserData title={element.title}  discription={element.discription} imagesrc={element.image}/>
        //         })
        //     }

        // </>
        // )