import React from "react"
import Todoitem from "./Todoitem"
import Todoinput from "./Todoinput"

class Todolist extends React.Component {
  constructor(){
    super();
    this.state = {
      items: []
    };
  }

  handleAddItem (name){
    console.log("Item " + name + " added");
    let newItem = this.state.items.concat({name: name, done: false});
    this.setState({items: newItem});
  }

  onToggleDone (item){
    console.log("Item " + item);
    const newItems = this.state.items.slice();
    newItems[newItems.indexOf(item)].done = !item.done;
    this.setState({items: newItems});
  }
  render() {
    //const items = [{name:"Item1", done: false}, {name:"Item2", done: false}, {name:"Item3", done: true}];
    let i = 0;
    return (
          <div>
              <ul>
                {this.state.items.map(item => { i++; return ( <Todoitem onToggleDone={this.onToggleDone.bind(this, item)} name={item.name} done={item.done} /> )})}
              </ul>
              <Todoinput onAddItem={this.handleAddItem.bind(this)}/>
          </div>
        );
    }
}

export default Todolist;
