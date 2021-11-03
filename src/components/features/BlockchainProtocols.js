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

export default function BlockchainProtocols() {
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
            <h1>Blockchain<br/> Protocols</h1>
            <p>Volume works with leading blockchain protocols that leverage their treasury to drive growth of liquidity and transactions across their chains. Distributed computing that functions effectively across blockchains and their bridges to other chains are key to Volume’s value offerings.</p>
          </div>
        </div>
        <div className='page-features-bottom'>
          <div className='field-item two'>
            Ethereum Virtual<br/> Machines (EVM)
          </div>
          <div className='field-item two'>
            Web Assembly (WASM)
          </div>
          <div className='field-item two'>
            Cross chain Execution<br/> (IBC, GRAVITY)
          </div>
        </div>
      </div>
    </div>
  )
}
