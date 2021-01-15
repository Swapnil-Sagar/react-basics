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

  render() {
    console.log("LSMa render");
    return (
      <div>
        <div>LifeCycle A</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
