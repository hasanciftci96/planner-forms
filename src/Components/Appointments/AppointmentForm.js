import React, {useState} from 'react'

export default function AppointmentForm() {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    
    const handleTitleChange = event => {
        setTitle(event.target.value)
    };

    const handleDateChange = event => {
        setDate(event.target.value)
    };

    const handleTimeChange = event => {
        setTime(event.target.value)
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        alert(`Your state values: \n 
                title: ${title} \n 
                time: ${time} \n
                You can replace this alert with your process`);
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
