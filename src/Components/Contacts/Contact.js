import React from 'react'

export default function Contact({contact, deleteContact}) {

    function deleteButton () {
        deleteContact(contact.id)
    }

    return (
        <label className="listed-items">
            <div className='item'>
                <p>Name: {contact.name}</p>
                <p>Phone Number: {contact.phone}</p>
                <p>Email: {contact.email}</p>
                <button className="delete-button" onClick={deleteButton}>Delete</button>
            </div>
        </label>
    )
}
