import { BsHandbag } from 'react-icons/bs'
import { GoSun, GoMoon } from 'react-icons/go'
import { LiaBarsSolid } from 'react-icons/lia'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import Logo from '../assets/logo.svg'
import Logo2 from '../assets/logo2.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/* TITLE */}
          <NavLink to='/' className='hidden lg:flex  font-medium items-center'>
            <h1 className='font-bold font-sans text-3xl'>The Cozy</h1>
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <LiaBarsSolid className='h-6 w-6 ' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* Theme setup */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            {/* sun */}
            <GoSun className='swap-on h-5 w-5' />
            {/* moon */}
            <GoMoon className='swap-off h-5 w-5' />
          </label>
          {/* CART LINK */}
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsHandbag className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
