// Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.

import React from "react";




export class Welcome extends React.Component {
  render() {
    return ( 
      <h1>Welcome {this.props.name}</h1>
    )
  }
}