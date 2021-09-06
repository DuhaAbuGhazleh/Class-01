import React, { Component } from 'react'
 class UserData extends Component {
     constructor(props){
        super(props);
        this.state={
            
             stateVote:this.props.UserDataVote,
         }
     }
     riseVote=()=>{
        this.setState({
          UserDataVote:this.state.stateVote+1
            

        })
     }
    render() {
        return (
            <div>
               <h2>title : {this.props.title}</h2>
               <img onClick={this.riseVote} src={this.props.image_url} alt={this.props.title} title='horned image'/>
             
               {/* <UserData childVote={this.state.stateVote}/> */}
                <p>description:{this.props.description} </p> 
                <p>keyword:{this.props.keyword} </p> 
                <p> horns:{this.props.horns} </p> 
               <p>vote: {this.state.stateVote}</p> 

            </div>
        )
    }
}

export default UserData

