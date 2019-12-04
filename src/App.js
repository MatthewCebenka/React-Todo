import React, { Component } from "react";
import TaskList from "./components/TaskList";
import ListForm from "./components/ListForm";
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';


const tasks = [
  {
    task: 'Organize Garage',
    id: 123,
    completed: false
  },

];

class App extends Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }
  // Class methods to update state

  addItem = newItemText => {
    // add new item to the grocery list
    // need to follow immutability rules
    const newItem = {
      name: newItemText,
      id: Date.now()
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  render() {
    // console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <Typography variant="h2">To Do List</Typography>
          <ListForm addItem={this.addItem} />
        </div>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
