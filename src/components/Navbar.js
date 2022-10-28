import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav__container container'>
        <div className='nav__logo'>LOGO</div>
        <div className='nav__link'>
          <NavLink 
            to='/'
          >
            Home
          </NavLink>
          <NavLink 
            to='/users'
          >
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar