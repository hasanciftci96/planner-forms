import React from 'react'

export default function AppointmentForm() {
    return (
        <div>
            <form method="POST">
                <div>
                    <label>Contact Names</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Number</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Number</label>
                    <input type='text' />
                </div>
                <button type='submit'>Submit</button>

            </form>
            <h1>This is my form for contacts</h1>
        </div>
    )
}
