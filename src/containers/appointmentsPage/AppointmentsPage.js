import React, { useState } from "react";

import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addToAppointments }) => {

  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }

    addToAppointments(newAppointment)

    setTitle('')
    setContact('')
    setDate('')
    setTime('')   
  };
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contacts={contacts}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          onSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {console.log(appointments)}
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};