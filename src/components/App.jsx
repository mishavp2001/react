import React from "react"
import Header from "./Header"
import Todolist from "./Todolist"

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Todolist />
    </div>
  }

}

export default App;
