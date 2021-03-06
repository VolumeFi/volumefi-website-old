import React, {useEffect, useState} from 'react'
import Link from 'gatsby-link'

import imgLogoBlue from '@images/logo-blue.png';
import imgLogo4 from '@images/logo-4.png';

import imgJoinTeam from '@images/team/you.png';

import { ourPracticeAreas, caseStudy, team } from '@helpers/data';

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

export default function AboutUsPage() {
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
    <div className='page-container page-aboutus'>
      <div className='section section-black section-column page-aboutus-top'>
        <img src={imgLogoBlue} />
        <p>
          Volume delivers software tools and user experiences that increase protocol token
          utility and community engagement, measured by protocol transaction volume growth.
        </p>
      </div>
      <div className='section section-white section-row page-aboutus-why'>
        <div className='page-aboutus-why-left'>
          <h1>Why Volume?</h1>
          <p>
            Increased competition for user 
            transactions and community 
            engagement require that protocols 
            leverage teams that are aligned with 
            the goal for transaction growth. If a 
            protocol fails to attract user activity, 
            token value falters and innovation will 
            flow away from the network. The Volume team’s 
            interest are the protocol interests: Growth of user transactions
          </p>
        </div>
        <div className='page-aboutus-why-right'>
          <h3>Our Practice Areas</h3>
           {ourPracticeAreas.map((data, index) => (
             <Link
              className='practice-area-item'
              key={`practice-area-item-${index}`}
              to={data.link}
            >
               {data.title}
             </Link>
           ))}
        </div>
      </div>
      <div className='section section-blue section-column page-aboutus-study'>
        <div className='page-aboutus-study-top'>
          <div className='page-aboutus-study-left'>
            <span>Case Study</span>
            <h2>Driving Volume on Sommelier ahead of Mainnet and beyond</h2>
            <p>We, at Volume, successfully launched Sommelier’s first iteration as PeggyJV, bringing the Cosmos Ethereum bridge to market and resulted in Sommelier raising a total $25MM in funding to launch the first automated DeFi blockchain to manage Liquidity Provider capital on Ethereum via the Cosmos.</p>
          </div>
          <div className='page-aboutus-study-right'>
            <img src={imgLogo4} />
          </div>
        </div>
        <div className='page-aboutus-study-bottom'>
          {caseStudy.map((data, index) => (
            <div className='case-study-item' key={`our-case-study-${index}`}>
              <h5 className='case-study-item-title'>{data.title}</h5>
              <p className='case-study-item-content'>{data.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='section section-white section-column page-aboutus-team'>
        <h2>OUR TEAM</h2>
        <div className='team'>
          {team.map((data, index) => (
            <div className='team-member' index={`team-member-${index}`}>
              <img src={data.photo} />
              <span className='team-member-name'>{data.name}</span>
              <span className='team-member-title'>{data.title}</span>
            </div>
          ))}
          <div className='team-member'>
            <img src={imgJoinTeam} />
            <Link to='/careers' className='team-member-join'>Join Our Team</Link>
          </div>
          <div className='team-member'>
          </div>
        </div>
      </div>
    </div>
  )
}
