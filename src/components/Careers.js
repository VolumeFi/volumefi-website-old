import React, {useEffect, useState} from 'react'

import imgLogoBlue from '@images/logo-blue.png';
import imgLogo4 from '@images/logo-4.png';
import imgMask1 from '@images/mask-1.png';
import imgMask2 from '@images/mask-2.png';

import { opportunities } from '@helpers/data';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

const styleOpportunities = {
  backgroundImage: imgMask2
}

export default function CareersPage() {
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
    <div className='page-container page-careers'>
      <div
        className='section section-black section-row page-careers-top'
        style={{ 
          backgroundImage: `url(${imgMask1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right -130px',
          backgroundSize: '80%'
        }}
      >
        <div
          className='page-careers-top-left'
        >
          <h1>Innovative Careers</h1>
          <p>Volume’s success arises from its commitment to the pursuit of technology innovation and rapid product iteration aggressively launched into customer hands. Volume believes that a team focused on innovation and rapid customer feedback will continue to learn quickly what features of a protocol are winners and what features should be deprioritized. Careers at Volume are a best fit for those who agitate for results on very difficult distributed computing  and decentralized finance product problems.</p>
        </div>
        <div className='page-careers-top-right'>
          <img src={imgMask1} />
        </div>
      </div>
      <div className='section section-white section- column page-careers-call'>
        <h2>A call for innovators with a passion for excellence</h2>
        <p>Volume seeks to continue to build it’s team with individuals who consider themselves innovators of the highest calibre and who pursue their craft to be excellent and expect excellence from other team members. Volume’s products and services touch many parts of the decentralized finance space. Individuals who are seeking to make measurable contributions and to be recognized for shipping solutions to very challenging problems will thrive at Volume and beyond. </p>
      </div>
      <div
        className='section section-blue section-column page-careers-opportunities'
        style={{ 
          backgroundImage: `url(${imgMask2})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top 25px right 0px',
          backgroundSize: '221px 350px'
        }}
      >
        <div className='page-careers-opportunities-top'>
          <h2>innovation opportunities </h2>
          <p>Our team is #1 in FinTech across the board and no other Firm can boast the depth and breadth of our experience advising FinTech clients and helping them to achieve best in class results.</p>
        </div>
        <div className='page-careers-opportunities-bottom'>
          {opportunities.map((data, index) => (
            <div className='opportunity-item' key={`opportunity-${index}`}>
              <h3>{data.category}</h3>
              {data.jobs.map((job, index2) => (
                <a href={job.link} key={`opportunity-${index}-${index2}`}>{job.title}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
