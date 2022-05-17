import Link from 'gatsby-link'
import React, { useState, useEffect } from 'react'

import { featureSubMenus, eventSubMenus } from '@helpers/data'

import logoBlueBlack from '@images/logo-blue-black.png'

import cn from 'classnames';

const featureMenuKeys = featureSubMenus.map((menu) => menu.key);

const SideNavbar = ({ settings, lang, pathname }) => {
  const [menu, setMenu] = useState('about-us');

  const [featureMenuOpen, setFeatureMenuOpen] = useState(false);
  const [eventMenuOpen, setEventMenuOpen] = useState(false);

  useEffect(() => {
    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }

    for (const item of featureSubMenus) {
      if (url.includes(`features/${item.key}`)) {
        setMenu(item.key);
        setFeatureMenuOpen(true);
        break;
      }
    }

    for (const item of eventSubMenus) {
      if (url.includes(`events/${item.key}`)) {
        setMenu(item.key);
        setEventMenuOpen(true);
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


  const toggleEventMenu = (e) => {
    e.preventDefault();
    setEventMenuOpen(!eventMenuOpen);
  }

  return (
    <div className='sidenavbar-container'>
      <nav className='sidenavbar-container-nav' role='navigation'>
        {/* <div>
          <Link to='/'>
            <img className='sidenavbar-logo black' src={logoBlueBlack} />
          </Link>
        </div> */}
        <div>
          <ul className='nav-menu'>
            <li>
              <a                
                className={cn('nav-menu-link', 'black', { active: featureMenuKeys.includes(menu) || featureMenuOpen })}
                onClick={(e) => toggleFeatureMenu(e)}
              >
                {`Features`}
              </a>
              {featureMenuOpen && (
                <ul className='sub-nav-menu'>
                  {featureSubMenus.map((item) => (
                    <a
                      key={`features-submenu-${item.key}`}
                      className={cn('nav-menu-link', `${item.color}`, { active: menu === item.key })}
                      href={`https://volume.finance${item.link}`}
                    >
                    {item.menu}
                  </a>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a 
                className={cn('nav-menu-link', { active: menu === 'careers' })}
                href={`https://volume.finance/careers/`}
              >
                {`Careers`}
              </a>
            </li>
            <li>
              <a                
                className={cn('nav-menu-link', 'blue', { active: eventSubMenus.includes(menu) || eventMenuOpen })}
                onClick={(e) => toggleEventMenu(e)}
              >
                {`Events`}
              </a>
              {eventMenuOpen && (
                <ul className='sub-nav-menu'>
                  {eventSubMenus.map((item) => (
                    <Link
                      key={`events-submenu-${item.key}`}
                      className={cn('nav-menu-link', `${item.color}`, { active: menu === item.key })}
                      to={item.link}
                    >
                    {item.menu}
                  </Link>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a 
                className={cn('nav-menu-link', { active: menu === 'about-us' })}
                href={`https://volume.finance/about-us/`}
              >
                {`About Us`}
              </a>
            </li>
            <li>
              <a href='https://discord.com/invite/Ebh6YjMShu' className='nav-menu-link' target='_blank'>
                {`Community`}
              </a>
            </li>
            <li>
              <a
                href="https://volume.finance/blog/" 
                className={cn('nav-menu-link', { active: menu === 'blog' })}
              >
                {`Blog`}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default SideNavbar;
