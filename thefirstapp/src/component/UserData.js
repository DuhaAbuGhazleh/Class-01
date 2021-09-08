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
                    vote: {this.state.like} 
                    <br/>
                    description: {this.props.description}
                       <br />
                       keyword:{this.props.keyword} 
                       <br />
                       horns:{this.props.horns}
                     </Card.Text>
                     <Button 
                                onClick={this.getHandleOpen}
                                variant="primary"
                        >
                                Show Horned Beast
                        </Button>
                </Card.Body>
            </Card>
        
            </Col>
    </>
      )
    }
}

export default UserData;

