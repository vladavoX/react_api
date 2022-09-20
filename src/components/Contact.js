import React from "react";

const Contact = ({ name, email, contact, contacts, setContacts }) => {
  return (
    <div className="contact">
      <li>{name}</li>
      <li>{email}</li>
    </div>
  );
};

export default Contact;
