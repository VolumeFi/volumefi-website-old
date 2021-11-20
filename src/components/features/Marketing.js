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
            <p>At VolumeFi, we believe that Community is money and that the value of money is the value of the decentralized network. Increased community engagement increases network value and token value. Community members will hold a token they value. The VolumeFi marketing, business development, and community team delivers continuous community engagement communications and governance proposals to grow the network and its volume of transactions.</p>
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
