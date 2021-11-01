import React from "react";
import Figure from "./components/figure";
import Art from "./components/Art";


class App extends React.Component {

  render () {
    return (
      <div>
        <h1 className="title">Geometrizando</h1>

        <Art>
        <Figure type="square" color="red"></Figure>
        <Figure type="circle" color="lightgrey"></Figure>
        <Figure type="triangle" color="black"></Figure>
        <Figure type="rectangle" color="blue"></Figure>
        </Art>

        
      </div>
    )
  }
}

export default App;