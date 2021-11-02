import React, { useEffect, useState } from 'react'

import imgSmartContract from '@images/features/marketing.png';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

export default function Marketing() {
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
            <img src={imgSmartContract} />
          </div>
          <div className='page-features-top-right'>
            <h1>Marketing, BizDev, & Community</h1>
            <p>Smart Contract code must operate well on chain and across chains. Volume’s smart contract and audit teams aim to write and ship well documented and well audited contracts that do what they are supposed to do and do it well.</p>
          </div>
        </div>
        <div className='page-features-bottom'>
          <div className='field-item two'>
            Community Events & <br/>Communications
          </div>
          <div className='field-item two'>
            Governance Proposals
          </div>
          <div className='field-item two'>
            Press & Presense
          </div>
          <div className='field-item two'>
            Partnerships And <br/>Business Development
          </div>
        </div>
      </div>
    </div>
  )
}
