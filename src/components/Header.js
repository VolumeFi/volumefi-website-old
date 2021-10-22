import React from 'react'
import Link from 'gatsby-link'

const Header = () => {
 
  return (
    <header>
      <div className='header-menu'>
        <Link to={`#features`} className='header-menu-item'>
          {`CONTACT US`}
        </Link>
      </div>
    </header>
  )
};

export default Header;
