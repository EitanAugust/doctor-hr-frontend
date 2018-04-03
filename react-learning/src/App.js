import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import axios from 'axios';


var style = {
    "Left": {
        "marginLeft": "40px"
    },

    "HR": {
        "marginLeft": "50px"
    },
    "HRs": {
        "marginLeft": "70px"
    },
    "Button": {
        "marginLeft": "20px"
    },
    "Time": {
        "marginLeft": "85px"
    }
}

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
        axios.get("http://vcm-3746.vm.duke.edu:5000/api/heart_rate/" + this.state.user_email).then( (response) => {
            console.log(response);
            console.log(response.status);
            this.setState({"hrs": response.data.hrs});
            this.setState({"times": response.data.times});
        })
    }

    render() {
        var a =[<div><span style={style.HR}> </span> HR (BPM)<span style={style.HR}> </span> Time</div>];

        for (var i = 0; i < this.state.hrs.length; i++) {
            a.push((
                <div>
                    <span style={style.HRs}> </span>
                {this.state.hrs[i]}
                    <span style={style.Time}> </span>
                {this.state.times[i]}
                </div>
            ));
        }

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={style.Left}>
                            Get Heart Rate Data
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField style={style.Left}
                    value={this.state.user_email}
                    onChange={this.onNameTextFieldChange}/>
                <Button variant = "raised" color = "blue" style={style.Button} onClick={this.getHR}>
                    Get Data.
                </Button>
                <div>
                    {a}
                </div>
            </div>
        );
    }
}

export default TextFieldExample;