import { useState, useEffect } from "react";

import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addToContacts}) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isDuplicate, setIsDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      const newContact = {
        name: name,
        phone: phone,
        email: email
      }
      addToContacts(newContact)

      setName('')
      setPhone('')
      setEmail('')
    }
  };

  useEffect(() => {
    if(!contacts) {
      return
    }
    const duplicateCheck = contacts.some(contact => contact.name.toLowerCase() === name.toLocaleLowerCase())
    setIsDuplicate(duplicateCheck)
  }, [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
