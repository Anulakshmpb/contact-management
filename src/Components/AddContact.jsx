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
      <div className="w-full flex justify-center mt-24 px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/30 transition-all duration-500">
        <h2 className="
        text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-700 to-purple-300 text-transparent bg-clip-text tracking-wide
      ">Add Contact</h2>

        <form className="ui form space-y-6" onSubmit={this.add}>
          <div className="field flex flex-col space-y-2">
            <label className="text-gray-800 font-semibold tracking-wide">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300  focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"/>
          </div>

          <div className="flex flex-col space-y-2">
        <label className="text-gray-800 font-semibold tracking-wide">
          Email
        </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300 "/>
          </div>

          <button className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-black/20
          hover:shadow-xl hover:scale-[1.02] transition-all duration-300  tracking-wide">
            Add</button>
        </form>
      </div>
      </div>
    );
  }
}
