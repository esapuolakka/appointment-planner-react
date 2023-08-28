import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const defaultContacts = [
    {
      name: 'James Bond',
      phone: '007-007-007',
      email: 'james.bond@mi16.uk'
    }
  ]
  const defaultAppointments = [
    {
      title: 'lunch meeting',
      contact: 'James Bond',
      date: '2023-09-07',
      time: '12:00'
    }
  ]

  const [contacts, setContacts] = useState(defaultContacts)
  const [appointments, setAppointments] = useState(defaultAppointments)

  const addToContacts = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact])
  }
  const addToAppointments = (newAppointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addToContacts={addToContacts}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addToAppointments={addToAppointments} /> }/>
    </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
