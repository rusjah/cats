import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to={'/'}><p>Home</p></Link>
        <Link to={'/cats'}><p>Cats</p></Link>   
    </div>
  )
}

export default Nav