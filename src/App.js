import React, { Component } from "react";
import AddItem from "./Component/AddItem/AddItem";
import ListItem from "./Component/ListItem/ListItem";

class App extends Component {
  state = {
    listItems: ["task1", "task2"],
  };
  handleItem = (item) => {
    // this.setState({ listItems: this.state.listItems.concat(item) });
    this.setState({ listItems: [...this.state.listItems, item] });
  };
  handleDelete = (indice) => {
    this.setState({
      listItems: this.state.listItems.filter((el, i) => i != indice),
    });
  };
  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddItem handleItem={this.handleItem} />
        <ListItem
          listItems={this.state.listItems}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
