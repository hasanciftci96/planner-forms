import React from 'react'
import { Link } from 'react-router-dom'
import img from '/Users/hasanciftci/planner/src/company-logo.png'

export default function Nav() {
    
    const navStyle = {
        color: 'green'
    };

    return (
        <div>
            <Link to='/' style={navStyle}>
                <img src={img} alt='Our company logo' />
            </Link>
            <ul>
                <Link to='/contacts' style={navStyle}>
                    <li>Contacts</li>
                </Link>
                <Link to='/appointments' style={navStyle}>
                    <li>Appointments</li>
                </Link>
            </ul>
        </div>
    )
}
