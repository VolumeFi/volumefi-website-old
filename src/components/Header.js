import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import {isMobileOnly} from 'react-device-detect'

import logoBlueBlack from '@images/logo-blue-black.png';

import { featureSubMenus } from '@helpers/data'

import cn from 'classnames';

const featureMenuKeys = featureSubMenus.map((menu) => menu.key);

const Header = ({ pathname }) => {
 
  const [showMenu, setShowMenu] = React.useState(isMobileOnly ? false : true);
  const [menu, setMenu] = useState('about-us');
  
  const [featureMenuOpen, setFeatureMenuOpen] = useState(false);

  useEffect(() => {
    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
      console.log(url);
    }

    for (const item of featureSubMenus) {
      if (url.includes(`features/${item.key}`)) {
        setMenu(item.key);
        setFeatureMenuOpen(true);
        break;
      }
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

  }, []);

  const toggleFeatureMenu = (e) => {
    e.preventDefault();
    setFeatureMenuOpen(!featureMenuOpen);
  }

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
              <a 
                className={cn('header-menu-mobile-item', { active: featureMenuKeys.includes(menu) || featureMenuOpen })}
                onClick={(e) => toggleFeatureMenu(e)}
              >
                {`Features`}
              </a>
              {featureMenuOpen && (
                <ul className='sub-nav-mobile-menu'>
                  {featureSubMenus.map((item) => (
                    <Link
                      key={`features-mobile-submenu-${item.link}`}
                      className={cn('header-menu-mobile-item', `${item.color}`, { active: menu === item.key })}
                      to={item.link}
                    >
                    {item.menu}
                  </Link>
                  ))}
                </ul>
              )}
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
          {`JOIN THE COMMUNITY`}
        </a>
      </div>
    </header>
  )
};

export default Header;
