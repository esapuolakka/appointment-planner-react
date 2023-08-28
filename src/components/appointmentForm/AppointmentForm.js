import React, {useEffect, useState} from "react";
import ContactPicker from "../contactPicker/ContactPicker"
import "./AppointmentForm.css"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const AppointmentForm = ({
  title,
  setTitle,
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Description"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
      />
      <input
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker
        contacts={contacts}
        value={contact}
        name="contact"
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit">Add Appointment</button>
    </form>
  );
};
export default AppointmentForm;
