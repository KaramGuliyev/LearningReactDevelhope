// Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.

import React from "react";
import { MyAge } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        <MyAge age={this.props.age}/>
      </>
    );
  }
}

// Extract the "Your age is " message into a new component called Age and render it within the Welcome component.
// Pass to the Age component the age prop that Welcome is receiving from the App component.

Welcome.defaultProps = {
  name: "Habibi",
};
