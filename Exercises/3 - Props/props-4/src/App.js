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


// What happens if the name prop is a JSX expression instead of a string? - It continues to passing JSX Expression as normal prop
// How do you pass a prop that contains a JSX expression? - With curly brackets?
// Modify the value passed to the name prop so that it's contained within a strong tag. - I did. Thank you

Welcome.defaultProps = {
  name: "Habibi",
};
