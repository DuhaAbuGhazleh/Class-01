import React, { Component } from 'react'
import UserData from './UserData'
import Datajson from '../data.json';
import HorneForm from './HorneForm';


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
        Renderhorns: Datajson,
    }
}

sorting = (event) => {
    let inter = event.target.value;

    let filterArray = [];

    filterArray = Datajson.filter(element => {
        if (element.horns == inter) { return true }
    }
    )
    this.setState({
        Renderhorns: filterArray
    })

    if (filterArray.length == 0) {
        this.setState({
            Renderhorns: Datajson
        })
    }
}

    render() {

        return (

            <>
           <HorneForm filterResult={this.sorting} />
            
            <div className="row">
                {this.state.Renderhorns.map((elementjson,index) => {
                    return <UserData
                    key={index}
                        image_url={elementjson.image_url}
                        title={elementjson.title}
                        description={elementjson.description}
                        keyword={elementjson.keyword}
                        horns={elementjson.horns}
                        vote={elementjson.stateVote}
                        handleOpen={this.props.handleOpen} />;
                })}
            </div>
            </>
        )
    }
}



export default Main


