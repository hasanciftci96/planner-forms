import React from 'react'
import Appointment from './Appointment'

export default function AppointmentsList({appointments, deleteAppointment}) {
    return (
        appointments.map(appointment => {
            return <Appointment key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
        })
    )
}
