import React from "react"
import Todoitem from "./Todoitem"

class Todolist extends React.Component {
  render() {
    const items = [{name:"Item1", done: false}, {name:"Item2", done: false}, {name:"Item3", done: true}];
    let i = 0;
    return ( <ul>
              {items.map(item => { i++; return ( <Todoitem name={item.name} done={item.done} /> )})}
            </ul>
          );
    }
}

export default Todolist;
