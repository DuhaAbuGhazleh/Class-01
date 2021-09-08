import React, { Component } from 'react'
import UserData from './UserData'
import Datajson from '../data.json';
import HorneForm from './HorneForm';
import CardColumns from "react-bootstrap/CardColumns";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          filteredData: this.props.Datajson,
        };
      }
    
      filterResult = (value) => {
        if (value === "All") {
          this.setState({
            filteredData: this.props.Datajson,
          });
        } else {
          let newFilteredData = this.props.Datajson.filter((beast) => beast.horns === Number(value));
          this.setState({
            filteredData: newFilteredData,
          });
        }
      };

    render() {

        return (

            <>
           <HorneForm filterResult={this.filterResult} />
            
            <div className="row">
                {this.state.filteredData.map((elementjson,i) => {
                    return <UserData
                    key={i}
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


