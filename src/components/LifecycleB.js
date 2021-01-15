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

  shouldComponentUpdate() {
    console.log("LSMb shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LSMb getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LSMb componentDidUpdate");
  }

  render() {
    console.log("LSMb render");
    return <div>LifeCycle B</div>;
  }
}

export default LifecycleB;
