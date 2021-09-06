import { React, Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";


class  App extends Component{
  render(){
    return(
    <>
      <Header/>
      <Main/>
      <Footer/>
      
    </>
    
    )
  }
}

export default App