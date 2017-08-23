import React from "react"

class Todoitem extends React.Component {
  render() {
    return (
      <li style={{
          textDecoration: this.props.done ? 'line-through' : 'none'
        }}>{this.props.name}</li>
    )

}
}

export default Todoitem;
