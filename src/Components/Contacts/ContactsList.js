import React from 'react'
import Contact from './Contact'

export default function ContactsList({contacts, deleteContact}) {
    return (
        contacts.map(contact => {
            return <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
        })
    )
}
