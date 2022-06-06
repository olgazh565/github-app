import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        No such address, please return to <Link to={'/'}>MAIN PAGE</Link>
    </div>
  )
}

export default NotFoundPage