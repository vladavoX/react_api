import { useState, useEffect } from "react";
import axios from "axios";

import ContactGrid from "./components/ContactGrid";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setContacts(res.data);
        setError(null);
      })
      .catch(setError);
  }, []);

  if (error) return <p>An error occurred</p>;

  return (
    <div className="App">
      <ContactGrid contacts={contacts} setContacts={setContacts} />
      <Form
        contacts={contacts}
        setContacts={setContacts}
        inputName={inputName}
        setInputName={setInputName}
      />
    </div>
  );
}

export default App;
