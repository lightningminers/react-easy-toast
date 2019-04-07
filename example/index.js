import React from "react";
import ReactDOM from "react-dom";
import * as toast from "../lib";

console.log(toast);

class App extends React.Component{
  render(){
    return (
      <div>1234</div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
);