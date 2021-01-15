import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sagar",
    };
    console.log("LSMb construct");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LSMb getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LSMb DidMount");
  }

  render() {
    console.log("LSMbrender");
    return <div>LifeCycle B</div>;
  }
}

export default LifecycleB;
