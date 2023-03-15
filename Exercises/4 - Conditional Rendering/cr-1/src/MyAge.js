import React from "react";

export class MyAge extends React.Component {
  render() {
    return <>{this.props.renderComp ? <p>Your age is {this.props.props.age}!</p> : "It's not going to render"}</>;
  }
}
