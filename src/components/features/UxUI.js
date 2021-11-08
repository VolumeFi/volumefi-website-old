import React, { useEffect, useState } from 'react'

import imgBg from '@images/features/ui-ux.png';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

export default function UxUI() {
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
            <img src={imgBg} />
          </div>
          <div className='page-features-top-right'>
            <h1>UI/UX & User Growth</h1>
            <p>Creating engaging user-experiences that attract engagement and transaction volume growth are key to the Volume approach. Great portfolio strategies run on effective smart contracts demand great user interfaces and growth measurement. Volume is passionate about measuring user growth in community size and activity.</p>
          </div>
        </div>
        <div className='page-features-bottom'>
          <div className='field-item two'>
            User Interaction & User <br/> Experience design
          </div>
          <div className='field-item two'>
            Front-End<br/> Blockchain interaction
          </div>
        </div>
      </div>
    </div>
  )
}
