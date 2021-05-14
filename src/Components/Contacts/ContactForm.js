import React, {useState} from 'react'

export default function ContactForm(props) {

    const {
        name,
        phone,
        email,
        handleNameChange,
        handlePhoneChange,
        handleEmailChange,
        handleSubmitContacts
    } = props

    return (
        <div>
            <form onSubmit={handleSubmitContacts}>
                <div>
                    <label>Contact Name</label>
                    <input type='text' name='name' value={name} onChange={handleNameChange} required/>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type='number' name='phone' value={phone} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' value={email} onChange={handleEmailChange}/>
                </div>
                <button type="submit">Submit</button>

            </form>
            <h1>This is my form for contacts</h1>
        </div>
    )
}
