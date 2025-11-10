import React from 'react'
import user from '../Images/user.jpg';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from "react-icons/fi";
export default function ContactCard(props) {
	const{id,name,email}=props.contact;
  return (
	<div className=' w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 mb-4 shadow-lg shadow-black/20 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white/20'>
		<img className='w-14 h-14 rounded-full object-cover border-2 border-white/30 ' src={user} alt='image'/>
				<div className='contact me-20'>
					<Link to={{pathname:`/contact/${id}`}}>
					{/* ,state:{contact:props.contact} */}
					<h3
          className="
            text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 text-transparent bg-clip-text" >
          {name}
        </h3>
		<p className="text-gray-800 text-md">{email}</p>
					</Link>
				</div>
				<button
        onClick={()=>{props.clickHandler(id)}}
        className="
          ms-20 p-2 rounded-xl hover:bg-red-500/20 transition-all text-red-400 hover:text-red-800 hover:scale-110">
        <FiTrash2 className="text-xl" />
      </button>
				
				<Link to="/edit" state={{ contact: props.contact }}
				className="p-2 rounded-xl hover:bg-blue-500/20 transition-all text-blue-400 hover:text-blue-500 hover:scale-110 ">
					<FiEdit2 className="text-xl" />
			</Link>
			</div>
  )
}
