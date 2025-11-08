import React from "react";
import { useParams, Link } from "react-router-dom";
import user from "../Images/user.jpg";

export default function ContactDetail({ contacts }) {
  const { id } = useParams();
  
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return (
      <div style={{ marginTop: "80px" }}>
        <h2>No contact found</h2>
      </div>
    );
  }

  return (
    <div className="main" style={{ marginTop: "80px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} className="ui avatar image" alt="contact" />
        </div>

        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
		</div>
	<div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to Contact List</button>
        </Link>
		
      </div>
    </div>
  );
}
