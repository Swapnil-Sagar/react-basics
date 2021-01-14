import React, { Component } from "react";

export class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Bye",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "Bye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* OR */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* OR bind in the constructor */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
