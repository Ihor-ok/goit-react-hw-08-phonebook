import { useSelector, useDispatch } from 'react-redux'
import PhonebookEditor from 'components/PhonebookEditor/PhonebookEditor'
import Contacts from 'components/Contacts/Contacts'
import Filter from '../Filter/Filter'
import css from './Phonebook.module.css'
import{filterChange} from 'components/redux/filterSlice'
import React, { useEffect } from 'react'
import { addContact, deleteContact, fetchContacts } from 'fetch/fetchContacts'


const Phonebook = React.memo(() => {

  const contactsState = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch();

  const { contacts } = contactsState;   // destructuring state
  // const { items, isLoading, error } = contacts;

  useEffect(() => {
   
    dispatch(fetchContacts());
     
  }, [dispatch]);

  


  const handleSubmit = (values, { resetForm }) => {
      
    const contact = { ...values }
    console.log(contact);

        

      if (contacts.items.find(contactState => contactState.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())) {
        alert(`${contact.name} is already in contacts.`)
        return
    }
    
    const newContact = {
      name: contact.name,
      number: contact.number,
};


    dispatch(addContact(newContact));

      resetForm();

    }
    
    const hendleDelete = (id) => {
      
      dispatch(deleteContact(id));
    
   
   
  }

  const changeFilter = (evt) => {
    dispatch(filterChange(evt.currentTarget.value))
    
  }


 
  const normslizedFilter = filter.toLocaleLowerCase()
  const visibileContakt = contacts.items.filter(contact => contact.name.toLowerCase().includes(normslizedFilter))

  


  return (
        
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <PhonebookEditor handleSubmit={handleSubmit}/>
        
        <Filter  value={filter} onChange={changeFilter}/>
        { <Contacts  contacts={visibileContakt} hendleDelete={hendleDelete}/>}
        
      </div>

    )
  


  
}) 



export default Phonebook

