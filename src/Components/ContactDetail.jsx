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
    <div className="w-full flex flex-col items-center mt-28 px-4">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-xl shadow-black/30 text-center
      transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ">
      <div className="flex justify-center mb-6">
        <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-gray/50 shadow-lg">
          <img src={user} className="w-full h-full object-cover" alt="contact" />
        </div></div>

        <h2
      className="text-3xl font-extrabold tracking-wide mb-3 bg-gradient-to-r from-blue-800 to-purple-600 text-transparent bg-clip-text">
      {contact.name}
    </h2>
    <p className="text-gray-800 text-lg mb-2">{contact.email}</p>
        </div>
		
	<div className="mt-10">
        <Link to="/">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.05] transition-all duration-300 ">
            Back to Contact List</button>
        </Link>
		
      </div>
    </div>
  );
}
