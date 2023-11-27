import React, { useState } from "react";

// class ContactInput extends React.Component {
//   constructor(props) {
//     super(props);

//     // inisialisasi state
//     this.state = {
//       name: "",
//       tag: "",
//     };

//     this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
//     this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
//     this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//   }

//   onNameChangeEventHandler(event) {
//     this.setState(() => {
//       return {
//         name: event.target.value,
//       };
//     });
//   }

//   onTagChangeEventHandler(event) {
//     this.setState(() => {
//       return {
//         tag: event.target.value,
//       };
//     });
//   }

//   onSubmitEventHandler(event) {
//     event.preventDefault();
//     this.props.addContact(this.state);
//   }

const ContactInput = ({ addContact }) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const onNameChangeEventHandler = (event) => {
    setName(event.target.value);
  };

  const onTagChangeEventHandler = (event) => {
    setTag(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addContact({ name, tag });
    setName("");
    setTag("");
  };

  return (
    <form className="contact-input" onSubmit={onSubmitEventHandler}>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChangeEventHandler}
      />
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={onTagChangeEventHandler}
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default ContactInput;
