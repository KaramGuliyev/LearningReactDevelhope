import React from "react";

// Can you use the Hello component more than once in the App component? What happens if you do?
// Nothing, because of we are creating components that we can reuse. 

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
        <Hello />
        <Message />
      </div>
    );
  }
}
