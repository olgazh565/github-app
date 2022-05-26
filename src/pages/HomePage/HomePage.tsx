import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        Home Page
        <br />
        <Link to={'/people'}>People list</Link>
    </div>
  )
}

export default HomePage