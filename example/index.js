import React from "react";
import ReactDOM from "react-dom";
import * as toast from "../lib";

console.log(toast);

class App extends React.Component{
  onToast(key){
    toast[key]("你好");
  }
  render(){
    return (
      <div className="container">
        <button onClick={this.onToast.bind(this, "message")}>message</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
);