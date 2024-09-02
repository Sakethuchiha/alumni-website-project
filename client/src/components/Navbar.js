import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiUser, FiLogOut, FiMenu } from 'react-icons/fi';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import logo from '../assets/logo.png';

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48 bg-[#E9EBE7] font-display flex flex-col md:flex-row justify-between items-center py-3'>
      <div className='mb-4 md:mb-0'>
        <NavLink to={user ? "/Eventspage" : "/"}>
          <img className='h-14 md:h-28' src={logo} alt="" />
        </NavLink>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-2xl'>
          <FiMenu />
        </button>
      </div>
      <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm font-semibold text-[#385529]'>
          <li>
            <NavLink to="/GalleryPage" onClick={toggleMenu}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/Events" onClick={toggleMenu}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={toggleMenu}>
              Members
            </NavLink>
          </li>
          <li>
            <NavLink to="/Alumni" onClick={toggleMenu}>
              Alumni 
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex justify-center md:space-x-5 font-semibold mt-4 md:mt-0'>
        {user ? (
          <div className="profile-dropdown">
            <button onClick={toggleProfile} className='border bg-[#385529] py-2 px-4 md:py-[0.5em] md:px-6 rounded-lg text-white font-thin' style={{ color: 'white', cursor: 'pointer' }}>
              <FiUser />
            
            </button>
            
            {isProfileOpen && (
              <div className="profile-dropdown-content">
                <ul>
                  <li><span>{user.fullName}</span></li>
    
                  <li style={{ textAlign: "center" }}>
                    <button onClick={logout} title ="click to logout">
                      <FiLogOut />
                    </button>
                   
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className='flex flex-col md:flex-row'>
            <NavLink to="/login">
              <button className='border bg-[#385529] py-2 px-4 md:py-[0.5em] md:px-6 rounded-lg text-white font-thin' style={{ color: 'white' }} onClick={toggleMenu}>
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className='border  bg-[#385529] py-2 px-4 md:py-[0.5em] md:px-6 rounded-lg text-white font-thin mt-2 md:mt-0 md:ml-4' style={{ color: 'white' }} onClick={toggleMenu}>
                Signup
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
