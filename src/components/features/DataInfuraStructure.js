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

export default function DataInfuraStructure() {
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
            <h1>Data<br/>Infrastructure</h1>
            <p>Data infrastructure and data engineering teams at Volume ingest, extract and transform all data on any blockchain into transaction pattern insights that reveal new strategies to drive transaction opportunities. As increasingly duplicated data continues to grow, the ability to make data available to the rest of Volume is a key success factor</p>
          </div>
        </div>
        <div className='page-features-bottom'>
          <div className='field-item two'>
            Blockchain indexing
          </div>
          <div className='field-item two'>
            Protocol indexing
          </div>
          <div className='field-item two'>
            Data Lakes
          </div>
        </div>
      </div>
    </div>
  )
}
