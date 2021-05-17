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
        <div id="forms">
            <form onSubmit={handleSubmitContacts}>
                <div className="form-inputs">
                    <label>Contact Name</label>
                    <input type='text' name='name' value={name} onChange={handleNameChange} required/>
                </div>
                <div className="form-inputs">
                    <label>Phone Number</label>
                    <input type='number' name='phone' value={phone} onChange={handlePhoneChange}/>
                </div>
                <div className="form-inputs">
                    <label>Email</label>
                    <input type='email' name='email' value={email} onChange={handleEmailChange}/>
                </div>
                <button type="submit" className="submit-button">Submit</button>

            </form>
        </div>
    )
}
