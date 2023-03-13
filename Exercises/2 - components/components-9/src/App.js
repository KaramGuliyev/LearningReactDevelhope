import React from "react";

// Can you render the Message component directly within the App component? What happens if you do?

// I was already calling Hello and Message seperately, if we want to use our components inside of component or otherwise ouside of that component - we just need to import it.

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
