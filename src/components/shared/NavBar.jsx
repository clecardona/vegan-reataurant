import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink to='/menu/dishes' className='nav-item'>
        <h3>Dishes</h3>
      </NavLink>

      <NavLink to='/menu/desserts'>
        <h3>Desserts</h3>
      </NavLink>

      <NavLink className='home' to='/'>
        <img
          src='https://clecardona.com/npa/vegan_restaurant/logo.png'
          alt='logo'
        />
        <h4>W+TM</h4>
      </NavLink>

      <NavLink to='/menu/drinks'>
        <h3>Drinks</h3>
      </NavLink>
      <NavLink to='/contact'>
        <h3>Contact</h3>
      </NavLink>
    </nav>
  )
}
