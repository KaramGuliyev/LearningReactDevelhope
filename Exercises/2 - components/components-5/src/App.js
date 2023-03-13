import React from "react";

// Create a new index.js file within the src folder and render the App component using the ReactDOM.render method.

class Hello extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export class RenderApp extends React.Component {
  render() {
    return (
      <div className="potato">
        <Hello />
      </div>
    );
  }
}
