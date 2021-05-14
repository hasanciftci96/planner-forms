import React from 'react'
import { Link } from 'react-router-dom'
import img from '/Users/hasanciftci/planner/src/company-logo.png'

export default function Nav() {
    
    const navStyle = {
        color: 'green'
    };

    return (
        <nav>
            <Link to='/' style={navStyle}>
                <img id="logo" src={img} alt='Our company logo' />
            </Link>
            <ul>
                <Link to='/contacts' style={navStyle}>
                    <li>Contacts</li>
                </Link>
                <Link to='/appointments' style={navStyle}>
                    <li>Appointments</li>
                </Link>
            </ul>
        </nav>
    )
}
