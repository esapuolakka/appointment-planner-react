import React from "react";

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          minLength={3}
          required
        >
        </input>
        <input
          type="tel"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
          required
          >
        </input>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          >

        </input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;