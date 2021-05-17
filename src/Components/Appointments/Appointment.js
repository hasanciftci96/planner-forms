import React from 'react'

export default function Appointment({appointment, deleteAppointment}) {

    function deleteButton () {
        deleteAppointment(appointment.id)
    }

    return (
        <label className="listed-items">
            <div className="item">
                <p>Appointment: {appointment.title}</p>
                <p>With who: {appointment.name}</p>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
                <button className="delete-button" onClick={deleteButton}>Delete</button>
            </div>    
        </label>
    )
}
