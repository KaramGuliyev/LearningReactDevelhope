import React from "react";

// Extract the "What a beautiful day!" message into a new component called Message and render it within the Hello component.

class Hello extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, World!</h1>
      </>
    );
  }
}
class Message extends React.Component {
  render() {
    return (
      <>
        <p>What a like a flower day!</p>
      </>
    );
  }
}

export class RenderApp extends React.Component {
  render() {
    return (
      <div className="potato">
        <Hello />
        <Message />
      </div>
    );
  }
}
