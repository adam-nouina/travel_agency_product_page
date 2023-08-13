import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="d-flex container justify-content-between my-2">
            <h2>Ville: xxxx properties found</h2>
            <Link className="btn btn-success" to="/create" >Create</Link>
        </div>
    )
}
