import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg';


export const Navbar = () => {
  const navItem = [
   <li> <NavLink to='/'>Home</NavLink></li>,
   <li> <NavLink to='/about'>About</NavLink></li>,
   <li> <NavLink to='/services'>Services</NavLink></li>,
   <li> <NavLink to='/blog'>Blog</NavLink></li>,
   <li> <NavLink to='/contact'>Contact</NavLink></li>,
  ]
  return (
<div className="shadow-md shadow-slate-200">
<div className="navbar mx-auto md:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navItem}
      </ul>
    </div>
        <img src={logo} alt="" className="w-20" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-error">Appointment</button>
  </div>
</div>
</div>
  )
}
