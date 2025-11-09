import React from 'react'
import user from '../Images/user.jpg';
import { Link } from 'react-router-dom';

export default function ContactCard(props) {
	const{id,name,email}=props.contact;
  return (
	<div className='item'>
		<img className='ui avatar image ' src={user} alt='image'/>
				<div className='contact'>
					<Link to={{pathname:`/contact/${id}`}}>
					{/* ,state:{contact:props.contact} */}
					<div className='header'>{name}</div>
					<div>{email}</div>
					</Link>
				</div>
				<i 
				className='trash alternate outline icon' 
				style={{color:"red",marginTop:"7px",marginLeft:"10px"}}
				onClick={()=>{props.clickHandler(id)}}
				></i>
				<Link to="/edit" state={{ contact: props.contact }}>

				<i 
				className='edit alternate outline icon' 
				style={{color:"blue",marginTop:"7px"}}
				></i></Link>
			</div>
  )
}
