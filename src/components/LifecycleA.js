import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sagar",
    };
    console.log("LSMa construct");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LSMa getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LSMa DidMount");
  }

  shouldComponentUpdate() {
    console.log("LSMa shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LSMa getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LSMa componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Ocean",
    });
  };
  render() {
    console.log("LSMa render");
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
