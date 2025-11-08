import React from 'react'
import ContactCard from './ContactCard'
import { Link } from "react-router-dom";


export default function ContactList(props) {
	const deleteContactHandler =(id)=>{
		props.getContactId(id);
	}
	console.log("Contacts:", props.contacts);
	const renderContactList = Array.isArray(props.contacts)
  ? props.contacts.map((contact) => (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    ))
  : [];
  
  return (
	<div className='main' style={{ marginTop: "80px" }}>
		<h2>Contact List
			<Link to='/add'>
			<button className='ui button blue right'>Add Contact</button></Link>
		</h2>
	<div className='ui celled list'>{renderContactList}</div>
	</div>
  )
}
