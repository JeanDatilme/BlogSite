import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between', width: '80vw'}}>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/users">Users</Link>
      </div>
    )
}

export default Navigation