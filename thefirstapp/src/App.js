import { React, Component } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import SelectedBeast from "./component/SelectedBeast"
import 'bootstrap/dist/css/bootstrap.min.css';

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

    render() {
        return (
            <>
                <Header />
                <Main handleOpen={this.handleOpen} />

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