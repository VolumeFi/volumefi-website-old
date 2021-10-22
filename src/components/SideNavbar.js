import Link from 'gatsby-link'
import React, { useState, useEffect } from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

import logoImg from '@images/logo.png'
import spiralImg from '@images/spiral-2.png'
import notificationOffImg from '@images/notification-off.png';
import notificationOnImg from '@images/notification-on.png';

import logoBlueBlack from '@images/logo-blue-black.png';

import cn from 'classnames';

const SideNavbar = ({ settings, lang, pathname }) => {
  const [showMenu, setShowMenu] = React.useState(isMobileOnly ? false : true);
  const [menu, setMenu] = useState('features');

  useEffect(() => {
    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
      console.log(url);
    }

    if (url.includes('features')) {
      setMenu('features');
    }
    if (url.includes('usecases')) {
      setMenu('usecases');
    }
    if (url.includes('about-us')) {
      setMenu('about');
    }
    if (url.includes('blog')) {
      setMenu('blog');
    }
    if (url.includes('resources')) {
      setMenu('resources');
    }
    if (url.includes('events')) {
      setMenu('events');
    }

  }, []);

  const handleHamburger = () => {
    setShowMenu(!showMenu)
  }

  const handleMoveToSection = (e, msgId) => {
    if (pathname === '/') { // Only apply to home page
      e.preventDefault();
      if (isMobileOnly) {
        setShowMenu(false);
      }
      const ref = document.querySelector(`#${msgId}`);
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "center" });
        setMenu(msgId);
      }
    }
  }

  return (
    <div className='sidenavbar-container'>
      <nav className='sidenavbar-container-nav' role='navigation'>
        <div>
          <Link to='/'>
            <img className='sidenavbar-logo' src={logoBlueBlack} />
          </Link>
        </div>
        <div>
          <ul className='nav-menu'>
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'resources' })}
                to={`/features/`}
              >
                {`Features`}
              </Link>
            </li>
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'resources' })}
                to={`/features/`}
              >
                {`Careers`}
              </Link>
            </li>
            <li>
              <Link 
                className={cn('nav-menu-link', 'active')}
                to={`/features/`}
              >
                {`About Us`}
              </Link>
            </li>
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'resources' })}
                to={`/features/`}
              >
                {`Events`}
              </Link>
            </li>
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'resources' })}
                to={`/features/`}
              >
                {`Community`}
              </Link>
            </li>
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'resources' })}
                to={`/features/`} 
              >
                {`Blog`}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default SideNavbar;
