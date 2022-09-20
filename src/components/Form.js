import React from "react";
import axios from "axios";

const Form = ({ contacts, setContacts, inputName, setInputName }) => {
  const inputHandler = (e) => {
    setInputName(e.target.value);
  };
  // axios post
  const submitContactHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: inputName,
      })
      .then((res) => {
        setContacts([...contacts, res.data]);
        setInputName("");
      });
  };
  return (
    <form>
      <input
        value={inputName}
        onChange={inputHandler}
        type="text"
        className="contact-input"
      />
      <button
        onClick={submitContactHandler}
        className="contact-btn"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
