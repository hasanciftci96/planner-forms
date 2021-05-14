
import React, { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav'
import ContactsList from './Components/Contacts/ContactsList'
import AppointmentsList from './Components/Appointments/AppointmentsList'
import ContactForm from './Components/Contacts/ContactForm'
import AppointmentForm from './Components/Appointments/AppointmentForm'

const fakeContacts = [
  {
    id: 1,
    name: "Ervin Howell",
    phone: 1111111111,
    email: "1@gmail.com"
  },
  {
    id: 2,
    name: "Leanne Graham",
    phone: 22222222222,
    email: "2@gmail.com"
  }
]

const fakeAppointments = [
  {
    id: 1,
    name: "alec",
    title: "Breakfast Reservation",
    date: '04/12/2022',
    time: "12:23"
  },
  {
    id: 2,
    name: "kerim",
    title: "Dinner Reservation",
    date: '10/12/2050',
    time: "20:23"
  }
]

const generateId = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


function App() {

  //Higher level stuff
  const [contacts, setContacts] = useState(fakeContacts)
  const [appointments, setAppointments] = useState(fakeAppointments)

  function deleteContact(id) {
    setContacts(prev => prev.filter(contact => (contact.id !== id)))
  }
  function deleteAppointment(id) {
    setAppointments(prev => prev.filter(appointment => (appointment.id !== id)))
  }



  //For Appointments.js form submission
  const [title, setTitle] = useState('')
  const [companion, setCompanion] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  
  const handleTitleChange = event => {
      setTitle(event.target.value)
  };

  const handleCompanionChange = event => {
    setCompanion(event.target.value)
};

  const handleDateChange = event => {
      setDate(event.target.value)
  };

  const handleTimeChange = event => {
      setTime(event.target.value)
  };
  
  const HandleSubmitAppointments = event => {
      event.preventDefault();
      setAppointments(prevAppointments => {
        return [{id: generateId(), title: title, name: name, date: date, time: time}, ...prevAppointments]
      })
    };


  //for Contacts.js form submission
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  
  const handleNameChange = event => {
      setName(event.target.value)
  };

  const handlePhoneChange = event => {
      setPhone(event.target.value)
  };

  const handleEmailChange = event => {
      setEmail(event.target.value)
  };
  
  const handleSubmitContacts = event => {
      event.preventDefault();
      setContacts(prevContacts => {
        return [{ id:generateId(), name: name, phone: phone, email: email}, ...prevContacts]
      })
    };

  return (
    <Router>
      <div className="App">
        <Nav />
        <h1>Hello world</h1>
        <div>
          <ContactForm 
          name={name}
          phone={phone}
          email={email}
          handleNameChange={handleNameChange}
          handlePhoneChange={handlePhoneChange}
          handleEmailChange={handleEmailChange}
          handleSubmitContacts={handleSubmitContacts}
          />
          <ContactsList contacts={contacts} deleteContact={deleteContact} />
        </div>

        <div>
          <AppointmentForm 
          title={title}
          companion={companion}
          date={date}
          time={time}
          contacts={contacts}
          handleTitleChange={handleTitleChange}
          handleCompanionChange={handleCompanionChange}
          handleDateChange={handleDateChange}
          handleTimeChange={handleTimeChange}
          HandleSubmitAppointments={HandleSubmitAppointments}
          />
          <AppointmentsList appointments={appointments} deleteAppointment={deleteAppointment}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
