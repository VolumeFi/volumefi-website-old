import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import {isMobileOnly} from 'react-device-detect'

import logoBlueBlack from '@images/logo-blue-black.png';

import cn from 'classnames';

const Header = ({ pathname }) => {
 
  const [showMenu, setShowMenu] = React.useState(isMobileOnly ? false : true);
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
    <header>
      <div className='header-menu'>
        <div
          className='header-menu-mobilebutton'
          onClick={(e) => { setShowMenu(!showMenu) }}
        >
          <img src={logoBlueBlack} />
        </div>
        {showMenu && (
          <div className='header-menu-mobile'>
            <div className='header-menu-mobile-mask' onClick={(e) => { setShowMenu(false) }}>
            </div>
            <div className='header-menu-mobile-panel'>
              <Link 
                className={cn('header-menu-mobile-item', { active: menu === 'careers' })}
                to={`/careers/`}
              >
                {`Careers`}
              </Link>
              <Link 
                className={cn('header-menu-mobile-item', { active: menu === 'about-us' })}
                to={`/about-us/`}
              >
                {`About Us`}
              </Link>
              <a href='https://t.me/volumefi' className='header-menu-mobile-item' target='_blank'>
                Community
              </a>
              <Link 
                className={cn('header-menu-mobile-item', { active: menu === 'blog' })}
                to={`/blog/`}
              >
                {`Blog`}
              </Link>
            </div>
          </div>
        )}
        <a href='https://discord.gg/Ebh6YjMShu' target='_blank' className='header-menu-item'>
          {`CONTACT US`}
        </a>
      </div>
    </header>
  )
};

export default Header;
