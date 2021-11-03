import React, { useEffect, useState } from 'react'

import imgEmpty from '@images/features/empty.png';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

export default function PortfolioManagement() {
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    windowGlobal.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  return (
    <div className='page-container page-features'>
      <div
        className='section section-black section-column'
      >
        <div className='page-features-top'>
          <div className='page-features-top-left'>
            <img src={imgEmpty} />
          </div>
          <div className='page-features-top-right'>
            <h1>Portfolio<br/>Management &<br/> Market Making</h1>
            <p>Volume’s team understands that the volume of transactions on the blockchain are exchange-based transactions. New strategies to drive volume will be based on portfolio management strategies as well as market making expertise. Volume’s practice to focus on capturing volume through exchange is a key differentiator for the team.</p>
          </div>
        </div>
        <div className='page-features-bottom'>
          <div className='field-item two'>
            Portfolio Performance
          </div>
          <div className='field-item two'>
            portfolio Strategy
          </div>
        </div>
      </div>
    </div>
  )
}
