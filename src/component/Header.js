import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <div>
    <ul>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/private'>Private</Link>
      </li>
    </ul>
  </div>
)

Header.propTypes = {
}
