import React from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  const scrollToContact = (e) => {
    e.preventDefault();
    navigate('/home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };
  return (
    <div className='flex gap-10 justify-between items-center text-black fixed top-0 w-full z-50 p-4' style={{ backgroundColor: 'rgba(20, 25, 31, 0.8)' }}>
      <div className='text-xl font-bold text-white'>
        <h1>E-Commerce Project</h1>
      </div>
      <div className='flex space-x-4'>
        <NavLink to='/home' className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'text-white')}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'text-white')}>About</NavLink>
        <NavLink to='/list' className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'text-white')}>Program List</NavLink>
        <NavLink to='/community' className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'text-white')}>Community</NavLink>
        <a href="/#" onClick={scrollToContact} className= 'text-white '>Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <NavLink to="/login" className=" text-white px-5 py-2 rounded-md flex items-center space-x-2 hover:bg-orange-600 transition duration-300">
          <FaUser className="w-5 h-5" />
          <span>Login</span>
        </NavLink>
        <NavLink to="/signup" className=" text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-300">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
