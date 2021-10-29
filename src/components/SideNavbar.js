import Link from 'gatsby-link'
import React, { useState, useEffect } from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

import logoBlueBlack from '@images/logo-blue-black.png';

import cn from 'classnames';

const SideNavbar = ({ settings, lang, pathname }) => {
  const [menu, setMenu] = useState('about-us');

  useEffect(() => {
    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
      console.log(url);
    }

    if (url.includes('features')) {
      setMenu('features');
    }
    if (url.includes('careers')) {
      setMenu('careers');
    }
    if (url.includes('about-us')) {
      setMenu('about-us');
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
            {/* <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'resources' })}
                to={`/features/`}
              >
                {`Features`}
              </Link>
            </li> */}
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'careers' })}
                to={`/careers/`}
              >
                {`Careers`}
              </Link>
            </li>
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'about-us' })}
                to={`/about-us/`}
              >
                {`About Us`}
              </Link>
            </li>
            <li>
              <a href='https://t.me/volumefi' className='nav-menu-link' target='_blank'>
                {`Community`}
              </a>
            </li>
            <li>
              <Link 
                className={cn('nav-menu-link', { active: menu === 'blog' })}
                to={`/blog/`} 
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
