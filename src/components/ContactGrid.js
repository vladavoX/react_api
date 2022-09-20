import React from "react";

import Contact from "./Contact";

const ContactGrid = ({ contacts, setContacts }) => {
  return (
    <div className="contacts-container">
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            contact={contact}
            setContacts={setContacts}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactGrid;
