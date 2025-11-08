import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetail from './ContactDetail';
import api from '../api/contact';

function App() {

  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);

// retriveContacts axios
  const retriveContacts =async ()=>{
    const response =await  api.get("/contacts");
    return response;
  }
  const addContactHandler =(contact)=>{
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

    const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => contact.id !== id);
      setContacts(newContactList);
    };


  useEffect(() => {
    // const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    // if (storedContacts) {
    //   setContacts(JSON.parse(storedContacts));
    // }

    const storedContacts = async()=>{
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts);
    };
    storedContacts();
  }, []);


  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
   <div className='ui container'>
    <Router>
    <Header/>
    <Routes>
          <Route 
            path="/add" 
            element={<AddContact addContactHandler={addContactHandler} />} 
          />

          <Route 
            path="/" 
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} 
          />
         <Route 
            path="/contact/:id" 
            element={<ContactDetail contacts={contacts}/>} 
          />
 


        </Routes>
   
    {/* <AddContact addContactHandler={addContactHandler}/> */}
    {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
    </Router>

   </div>
  );
}

export default App;
