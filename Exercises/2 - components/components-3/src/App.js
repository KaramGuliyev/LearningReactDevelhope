import React from "react";

// Write a class component called App that renders the Hello component within a div tag.

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
