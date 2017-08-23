import React from "react"

class TodoInput extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.input.value);
    this.props.onAddItem(this.refs.input.value);
    this.refs.input.value = "";

  }
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="input"></input>
          <button>Add Item</button>
        </form>
    </div>
    )

}
}

export default TodoInput;
