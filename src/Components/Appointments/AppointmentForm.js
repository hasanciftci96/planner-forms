import React, {useState} from 'react'
import NamesList from './Names/NamesList'

export default function AppointmentForm(props) {

    const {
        title,
        companion,
        date,
        time,
        handleTitleChange,
        handleCompanionChange,
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
                    <input type="text" list="companion" name="companion"  value={companion} onChange={handleCompanionChange} />
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
