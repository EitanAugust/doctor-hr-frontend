import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';

class TextFieldExample extends React.Component {
    constructor() {
        super();
        this.state = {
            "user_email": "", // This is where the content for the TextField used below is stored
            "hrs": "",
            "times": "",
        };
    }

    onNameTextFieldChange = (event) => {
        // Update the nameTextField state whenever the text field is changed or perturbed in any way:
        this.setState({"user_email": event.target.value});
    }

    onButtonClick = (event) => {
        console.log(this.state.user_email); // log the current nameTextField content
    }

    getHR = () => {
        axios.get("http://vcm-3746.vm.duke.edu/api/heart_rate/" + this.state.user_email).then( (response) => {
            console.log(response);
            console.log(response.status);
            //data.hrs????????
            this.setState({"hrs": JSON.stringify(response.data.hrs)});
            this.setState({"times": JSON.stringify(response.data.times)});
        })
    }

    render() {
        return (
            <div>
                <AppBar position="static" style={styles.appBarStyle}>
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Get Heart Rate Data
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    value={this.state.user_email}
                    onChange={this.onNameTextFieldChange}/>
                <Button variant = "raised" color = "blue" onClick={this.getHR}>
                    Get Data.
                </Button>
                {this.state.hrs /*show the current nameTextField state here in the browser */}
                {this.state.times }
            </div>
        );
    }
}

export default TextFieldExample;