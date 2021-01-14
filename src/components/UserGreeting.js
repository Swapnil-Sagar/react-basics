import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Sagar</div>; //Short Circuit Operator
    // return this.state.isLoggedIn ? <div>Sagar</div> : <div>Hurrrr</div>; Ternary

    // ----------------------------------

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Sagar</div>;
    // } else {
    //   message = <div>Bhakk sala</div>;
    // }

    //return <div>{message}</div>;
    //   ------------------------------------
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Sagar</div>;
    // } else {
    //   return <div>Bhakk sala</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Sagar</div>
    //     <div>Imposterrrr</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
