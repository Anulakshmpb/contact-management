import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetail from './ContactDetail';
import api from '../api/contacts';
import EditContact from './EditContact';
import EditWrapper from './EditWrapper';
function App() {

  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const [searchTerm ,setSearchTerm]= useState("");
  const [searchResults ,setSearchResults]= useState([]);

// retriveContacts axios
  const retriveContacts =async ()=>{
    const response =await  api.get("/contacts");
    return response.data;
  }
  const addContactHandler =async (contact)=>{
    console.log(contact);
    const request = {
      id:uuid(),
      ...contact
    }
    const response = await api.post("/contacts",request)
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    console.log("update",contact);
    const response = await api.put(`/contacts/${contact.id}`, contact);
  
    setContacts(
      contacts.map((c) => 
        c.id === contact.id ? response.data : c
      )
    );
  };
  
    const removeContactHandler = async (id) => {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => contact.id !== id);
      setContacts(newContactList);
    };

    const searchHandler =(searchTerm)=>{
        setSearchTerm(searchTerm);
        if(searchTerm !==""){
          const newContactList = contacts.filter((contact)=>{
            return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          });
          setSearchResults(newContactList);
        }else{
          setSearchResults(contacts);
        }
    };
 // useEffect(() => {
    // const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    // if (storedContacts) {
    //   setContacts(JSON.parse(storedContacts));
    // });

    useEffect(() => {
      const getAllContacts = async () => {
        const allContacts = await retriveContacts();
        if (allContacts) setContacts(allContacts);   // ✅ array only
      };
      getAllContacts();
    }, []);
    


  useEffect(() => {
    // if (contacts.length > 0) {
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }
  }, [contacts]);
  console.log("Contacts State:", contacts);

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
            element={<ContactList contacts={searchTerm.length < 1 ? contacts:searchResults} 
            getContactId={removeContactHandler} 
            term={searchTerm} 
            searchKeyword={searchHandler} />} 
          />
         <Route 
            path="/contact/:id" 
            element={<ContactDetail contacts={contacts}/>} 
          />
          <Route 
            path="/edit" 
            element={<EditWrapper updateContactHandler={updateContactHandler} />} 
          />



        </Routes>
   
    {/* <AddContact addContactHandler={addContactHandler}/> */}
    {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
    </Router>

   </div>
  );
}

export default App;
