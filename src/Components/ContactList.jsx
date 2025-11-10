import React,{useRef} from 'react'
import ContactCard from './ContactCard'
import { Link } from "react-router-dom";


export default function ContactList(props) {
	console.log("props",props);
	const inputEl = useRef("");
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
  const getSearchTerm = ()=>{
	props.searchKeyword(inputEl.current.value)
  }
  return (
	<div className="w-full max-w-2xl mx-auto mt-24 px-4">
	<div className='flex items-center justify-between mb-10' style={{ marginTop: "80px" }}>
		<h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text">
			Contact List</h2>
		<Link to='/add'>
		<button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-black/20 hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
			Add Contact</button></Link>
		</div>

		<div className='mb-8 '>
			{/* ui search */}
			<div className="ui icon input search flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-xl px-2 py-3 shadow-md shadow-black/10">
		<i className="search icon text-gray-800 text-xl"></i>
	<input ref={inputEl}
	 type="text"
	placeholder='Search Contacts'
	className="prompt w-full bg-transparent text-white placeholder-gray-300 outline-none"
	 value={props.term}onChange={getSearchTerm} />
				
			</div>
		</div>

	<div className=" space-y-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg shadow-black/20
    ">{renderContactList.length >0 ? renderContactList:(
      <p className="text-center text-gray-300 text-lg">
        No Contacts Available
      </p>
    )}</div>
	</div>
	
  )
}
