import React from 'react'
import Name from './Name'

export default function NamesList({ contacts }) {
    return (
        contacts.map(contact => {
            return <Name contact={contact} />
        })
    )
}
