import React, { Component } from 'react'
import UserData from './UserData'

import Datajson from '../data.json';



class Main extends Component {

    render() {

        return (
            
                <div className="row">
                    {
                    Datajson.map(elementjson => {
                        return <UserData
                            image_url={elementjson.image_url}
                            title={elementjson.title}
                            description={elementjson.description}
                            keyword={elementjson.keyword}
                            horns={elementjson.horns}
                            vote={elementjson.stateVote} 
                            handleOpen={this.props.handleOpen}
                            />;
                    })}
                </div>
        )
    }
}



export default Main


