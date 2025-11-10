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
      <div className="w-full flex justify-center mt-20 px-4">
      <div className="ui main w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/30 transition-all duration-500 " 
      style={{ marginTop: "80px" }}>
        
        
        <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-800 to-purple-400 text-transparent bg-clip-text tracking-wide">
          Edit Contact</h2>

        <form className="ui form space-y-6" onSubmit={this.update}>
        <div className="flex flex-col space-y-2">
        <label className="text-gray-800 font-semibold tracking-wide">
          Name
        </label>
            <input
             className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300"
              type="text"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="flex flex-col space-y-2">
        <label className="text-gray-800 font-semibold tracking-wide">
          Email
        </label>
            <input
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all duration-300"
              type="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 tracking-wide">
            Update</button>
        </form>
      </div>
      </div>
    );
  }
}
