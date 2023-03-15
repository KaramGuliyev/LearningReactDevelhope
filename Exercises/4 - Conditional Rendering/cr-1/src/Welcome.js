import React from "react";

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18.

export class Welcome extends React.Component {
  render() {
    return (
      <>
        {this.props.props.age > 18 ? (
          <h1>Welcome {this.props.props.name}!</h1>
        ) : (
          <h1>{this.props.props.name}... you are not allowed here...</h1>
        )}

        {this.props.props.age > 18 && <h1>Welcome {this.props.props.name}!</h1>}
        {this.props.props.age < 18 && <h1>{this.props.props.name}... you are not allowed here...</h1>}
      </>
      // I have more ways to do it but that's enough I think.
    );
  }
}

Welcome.defaultProps = {
  name: "Habibi",
};
