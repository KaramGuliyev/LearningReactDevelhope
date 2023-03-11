import React from "react";

// Modify the Hello component so that it shows a p tag below the h1 tag with the message "What a beautiful day!".

class Hello extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, World!</h1>
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
      </div>
    );
  }
}
