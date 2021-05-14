import React from 'react'

export default function Appointment({appointment, deleteAppointment}) {

    function deleteButton () {
        deleteAppointment(appointment.id)
    }

    return (
        <div>
            <label>
                <h5>{appointment.title}</h5>
                <p>{appointment.date}</p>
                <p>{appointment.time}</p>
                <button onClick={deleteButton}>X</button>
            </label>
        </div>
    )
}
