import React from 'react'

export default function Appointment({appointment, deleteAppointment}) {

    function deleteButton () {
        deleteAppointment(appointment.id)
    }

    return (
        <div>
            <label>
                <h5>{appointment.Title}</h5>
                <p>{appointment.Date}</p>
                <p>{appointment.Time}</p>
                <button onClick={deleteButton}>X</button>
            </label>
        </div>
    )
}
