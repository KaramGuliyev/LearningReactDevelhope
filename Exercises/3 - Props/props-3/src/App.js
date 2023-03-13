// Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.

import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        <p>Your age is {this.props.age}!</p>
      </>
    );
  }
}

// Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".

Welcome.defaultProps = {
  name: "Habibi",
};
