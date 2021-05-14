import React from 'react'

export default function Name({ contact }) {
    return (
        <div>
            <option value={contact.name} ></option>
        </div>
    )
}
