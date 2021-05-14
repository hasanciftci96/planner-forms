import React from 'react'

export default function Contact({contact, deleteContact}) {

    function deleteButton () {
        deleteContact(contact.id)
    }

    return (
        <div>
            <label>
                <h5>{contact.name}</h5>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <button onClick={deleteButton}>X</button>
            </label>
        </div>
    )
}
