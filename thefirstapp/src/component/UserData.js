import React, { Component } from 'react'

import {
  Card,
  Button,
  Col,
} from 'react-bootstrap';

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


  /*  render() {
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
    */


      getHandleOpen=()=>{
          let image_url=this.props.image_url;
          let title=this.props.title;
          this.props.handleOpen(image_url,title);
      }

    render(){
      return(
        <>
          <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image_url} onClick={this.riseVote} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                       {this.props.description}
                       <br />
                       keyword:{this.props.keyword} 
                       <br />
                       horns:{this.props.horns}
                     </Card.Text>
                     <Button 
                                onClick={this.getHandleOpen}
                                variant="primary"
                        >
                                Go somewhere
                        </Button>
                </Card.Body>
            </Card>
        
            </Col>
    </>
      )
    }
}

export default UserData

