import React from "react";
import { MyAge } from "./MyAge";
import { Welcome } from "./Welcome";

// I Just refactored my code I think I might named my components as I wished and it's little differently then you wanted.
// Return it if you want me to fix the naming, Thank you.

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18.

export class App extends React.Component {
  render() {
    return (
      <>
        {/* Instead of checking here, I wanted to try passing entire prop object and check it is it going to rendered or not. */}
        <Welcome renderComp={true} props={this.props} />
        <MyAge renderComp={true} props={this.props} />
      </>
    );
  }
}
