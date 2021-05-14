import React, {useState} from 'react'

export default function AppointmentForm(props) {

    const {
        title,
        date,
        time,
        handleTitleChange,
        handleDateChange,
        handleTimeChange,
        AppointmentHandleSubmit
    } = props

    return (
        <div>
            <form onSubmit={AppointmentHandleSubmit}>
                <div>
                    <label>Appointment Title</label>
                    <input type='text' name="title" value={title} onChange={handleTitleChange} required/>
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
