import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>
        Hello <div id="my">{this.props.name}</div>
    </div>;
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="World" />, mountNode);
