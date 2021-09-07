import React, { Component } from 'react'
 class UserData extends Component {
     constructor(props){
        super(props);
        this.state={
          like:0,  
         }
     }
     riseVote=()=>{
        this.setState({
          like:this.state.like+1
            

        })
     }
    render() {
        return (
            <div>
               <h2>title : {this.props.title}</h2>
               <img onClick={this.riseVote} src={this.props.image_url} alt={this.props.title} title='horned image'/>
              <h2>vote: {this.state.like}</h2> 
                <p>description:{this.props.description} </p> 
                <p>keyword:{this.props.keyword} </p> 
                <p> horns:{this.props.horns} </p> 
              

            </div>
        )
    }
}

export default UserData

