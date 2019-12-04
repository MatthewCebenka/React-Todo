import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ListForm extends React.Component {
  // Constructor with state

  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ newItem: e.target.value });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    document.getElementById("form").reset();
    this.props.addItem(this.state.newItem);
  };

  // lifecycle method - in charge of _Rendering_ JSX to the DOM
  render() {
    // console.log("rendering form");
    return (
      <form id="form">
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <TextField
        id="filled-secondary"
        label="Enter Task"
        variant="filled"
        color="secondary" name="item" onChange={this.handleChanges} />
        <Button onClick={this.handleSubmit} variant="contained" color="secondary">Add Task</Button>
      </form>
    );
  }
}

export default ListForm;