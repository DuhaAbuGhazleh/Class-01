import { React, Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import SelectedBeast from "./component/SelectedBeast"
import 'bootstrap/dist/css/bootstrap.min.css';
import Datajson from "../src/data.json"
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            image_url: "",
            title: ""
        }
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }
    handleOpen = (image_url, title) => {
        this.setState({
            showModal: true,
            image_url: image_url,
            title: title

        })
    }


    renderModel = (newBeastPropTitle) => {
        let newBeastProp = this.state.Datajson.filter((beast) => beast.title === newBeastPropTitle)[0];
        newBeastProp.value++;
        this.setState({
          newSelectedBeast: newBeastProp,
          show: true,
          value: this.state.value + 1,
        });
      };
    

    render() {
        return (
            <>
                <Header />
                {/* <Main handleOpen={this.handleOpen} /> */}
<Main Datajson={Datajson}
        renderModel={this.renderModel} />
                <SelectedBeast handleClose={this.handleClose}
                    showModal={this.state.showModal}
                    image_url={this.state.image_url}
                    title={this.state.title}

                />

                <Footer />
            </>
        )
    }
}




export default App