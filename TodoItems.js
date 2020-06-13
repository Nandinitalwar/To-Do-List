import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    /*return (
      <ul className="theList">
          {listItems}
      </ul>
    );*/

    return (
        <form>
            <input 
                name="todo" 
                value={this.props.value} 
                type="text" 
                onChange={this.props.inputChangeHandler} 
                placeholder="Enter new task" />
            <button onClick={this.props.addTask}>Add Todo</button>
         <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>
    )
}
  };
 
export default TodoItems;

