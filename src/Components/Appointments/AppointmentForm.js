import React, {useState} from 'react'
import NamesList from './Names/NamesList'

export default function AppointmentForm(props) {

    const {
        title,
        name,
        date,
        time,
        handleTitleChange,
        handleNameChange,
        handleDateChange,
        handleTimeChange,
        HandleSubmitAppointments,
        contacts
    } = props

    return (
        <div>
            <form onSubmit={HandleSubmitAppointments}>
                <div>
                    <label>Appointment Title</label>
                    <input type='text' name="title" value={title} onChange={handleTitleChange} required/>
                </div>
                <div>
                    <label>Choose your travel companion</label>
                    <input type="text" list="companion" name="companions"  value={name} onChange={handleNameChange} />
                    <datalist id="companion">
                        <NamesList contacts={contacts} />
                    </datalist>
                </div>
                <div>
                    <label>Date</label>
                    <input type='date' name="date" value={date} onChange={handleDateChange} />
                </div>
                <div>
                    <label>Time</label>
                    <input type='time' name="time" value={time} onChange={handleTimeChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <h1>This is my form for contacts</h1>
        </div>
    )
}
