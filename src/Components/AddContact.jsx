import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    redirect: false,
  };

  add = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" replace />;
    }

    return (
      <div className="ui main" style={{ marginTop: "80px" }}>
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
