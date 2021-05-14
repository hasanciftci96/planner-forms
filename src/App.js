
import React, { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav'
import ContactsList from './Components/Contacts/ContactsList'
import AppointmentsList from './Components/Appointments/AppointmentsList'

const fakeContacts = [
  {
    id: 1,
    fullName: "Ervin Howell",
    phone: 1111111111,
    contactEmail: "1@gmail.com"
  },
  {
    id: 2,
    fullName: "Leanne Graham",
    phone: 22222222222,
    contactEmail: "2@gmail.com"
  }
]

const fakeAppointments = [
  {
    id: 1,
    Title: "Breakfast Reservation",
    Date: '04/12/2022',
    Time: "12:23"
  },
  {
    id: 2,
    Title: "Dinner Reservation",
    Date: '10/12/2050',
    Time: "20:23"
  }
]


//first the user fills out a form
//onsubmit saves all the values written to the form to useContacts state
//    it also resets the form maybe? check if required. If so use something similar to thoughtsRef.current.value = null on thoughts project
//useContacts'i component level'da parcala ve listeye ekle .map kullanarak


function App() {

  const [contacts, setContacts] = useState(fakeContacts)
  const [appointments, setAppointments] = useState(fakeAppointments)




  function deleteContact(id) {
    setContacts(prev => prev.filter(contact => (contact.id !== id)))
  }
  function deleteAppointment(id) {
    setAppointments(prev => prev.filter(appointment => (appointment.id !== id)))
  }


  return (
    <Router>
      <div className="App">
        <Nav />
        <h1>Hello world</h1>
        <div>
          <ContactsList contacts={contacts} deleteContact={deleteContact} />
        </div>
        <div>
          <AppointmentsList appointments={appointments} deleteAppointment={deleteAppointment}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
