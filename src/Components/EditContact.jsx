import React, { Component } from "react";
import { Navigate,useLocation, useNavigate  } from "react-router-dom";

export default class EditContact extends Component {
  constructor(props){ 
    super(props);
    console.log(props)
    const contact = props.location?.state?.contact;

    this.state = {
      id: contact?.id || "",
      name: contact?.name || "",
      email: contact?.email || "",
      redirect: false,
    };
  }

  update = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory");
      return;
    }

    this.props.updateContactHandler(this.state);
    this.setState({ redirect: true });
    // this.props.navigate("/");
    // this.setState({ name: "", email: "", redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" replace />;
    }

    return (
      
      <div className="ui main" style={{ marginTop: "80px" }}>
        {/* {console.log("RECEIVED CONTACT:", props.location.state)} */}
        <h2>Edit Contact</h2>

        <form className="ui form" onSubmit={this.update}>
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

          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}
