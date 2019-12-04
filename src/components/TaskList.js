// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Button from '@material-ui/core/Button';

import Item from './Item';

const TaskList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.tasks.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <Button  onClick={props.clearPurchased} variant="contained" color="secondary">
        Clear Tasks
      </Button>
    </div>
  );
};

export default TaskList;
