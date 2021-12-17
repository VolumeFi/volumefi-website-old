import Link from 'gatsby-link'
import React, { useState, useEffect } from 'react'

import { featureSubMenus } from '@helpers/data'

import logoBlueBlack from '@images/logo-blue-black.png'

import cn from 'classnames';

const featureMenuKeys = featureSubMenus.map((menu) => menu.key);

const SideNavbar = ({ settings, lang, pathname }) => {
  const [menu, setMenu] = useState('about-us');
  const [featureMenuOpen, setFeatureMenuOpen] = useState(false);

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
                    <Link
                      key={`features-submenu-${item.link}`}
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
              <a href='https://discord.com/invite/Ebh6YjMShu' className='nav-menu-link' target='_blank'>
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
