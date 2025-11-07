import React from 'react'
import user from '../Images/user.jpg';

export default function ContactCard(props) {
	const{id,name,email}=props.contact;
  return (
	<div className='item'>
		<img className='ui avatar image ' src={user} alt='image'/>
				<div className='contact'>
					<div className='header'>{name}</div>
					<div>{email}</div>
				</div>
				<i 
				className='trash alternate outline icon' 
				style={{color:"red",marginTop:"7px"}}
				onClick={()=>{props.clickHandler(id)}}
				></i>
			</div>
  )
}
