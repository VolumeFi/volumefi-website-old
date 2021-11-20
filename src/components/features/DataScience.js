import React, { useEffect, useState } from 'react'

import imgSmartContract from '@images/features/data-science.png';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

export default function DataScience() {
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
            <h1>Data Science</h1>
            <p>Liquidity management and yield generating strategies require data analysis and back-tests to validate both rebalance and reinvestment opportunities. The VolumeFi data science practice explores hypotheses, creates strategies and tests yield predictions that aim to maximize yield, wherever liquidity may move. Blockchain protocols that have successful yield strategies will attract greater liquidity and increased transaction volume growth.</p>
          </div>
        </div>
        <div className='page-features-bottom'>
          <div className='field-item three'>
            Machine Learning
          </div>
          <div className='field-item three'>
            Hypothesis Testing
          </div>
          <div className='field-item three'>
            Prediction Modeling
          </div>
          <div className='field-item three' style={{ width: '40%', padding: '14px 0px'}}>
            Competitive <br/> Performance Analysis
          </div>
        </div>
      </div>
    </div>
  )
}
