
import React, { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav'

const fakeContacts = [
  {
    id: 1,
    name: "Ervin Howell",
    phone: 1111111111,
    contactEmail: "1@gmail.com"
  },
  {
    id: 2,
    name: "Leanne Graham",
    phone: 22222222222,
    contactEmail: "2@gmail.com"
  }
]
//first the user fills out a form
//onsubmit saves all the values written to the form to useContacts state
//    it also resets the form maybe? check if required. If so use something similar to thoughtsRef.current.value = null on thoughts project
//useContacts'i component level'da parcala ve listeye ekle .map kullanarak


function App() {

  const [contacts, useContacts] = useState(fakeContacts)

  return (
    <Router>
      <div className="App">
        <Nav />
        <h1>Hello world</h1>
      </div>
    </Router>

  );
}

export default App;
