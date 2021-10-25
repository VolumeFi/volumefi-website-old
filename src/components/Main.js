import React, {useEffect, useState} from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'
import {isMobileOnly} from 'react-device-detect'

import "../assets/scss/main.scss"

// Carousel
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css'

// import loadable from '@loadable/component'

// const Carousel = loadable(() => import('@brainhubeu/react-carousel'))
// const slidesToShowPlugin = Carousel.slidesToShowPlugin

import imgLogoBlue from '@images/logo-blue.png';
import imgLogo4 from '@images/logo-4.png';

import { ourPracticeAreas, caseStudy } from '@helpers/about-us';

setTimeout(function(){
  var href = window.location.href;
  const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
  const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
  const twitter_url = 'http://twitter.com/share?url='+ href;

  const fb = document.getElementById('facebook')


  if (fb) {
    document.getElementById('facebook').setAttribute("href", facebook_url);
    document.getElementById('linkedin').setAttribute("href", linkedin_url);
    document.getElementById('twitter').setAttribute("href", twitter_url);
  }
}, 1500);

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

export default function Main() {
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

  const cellBoardStyle= {
    // backgroundImage: `url(${spiral2Img})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundSize: 'contain'
  }

  return (
    <div className='page-container page-aboutus'>
      <div className='section section-black section-column page-aboutus-top'>
        <span>About Us</span>
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
             <div className='practice-area-item' key={`practice-area-item-${index}`}>
               {data}
             </div>
           ))}
        </div>
      </div>
      <div className='section section-blue section-column page-aboutus-study'>
        <div className='page-aboutus-study-top'>
          <div className='page-aboutus-study-left'>
            <span>Case Study</span>
            <h2>Case Study Driving Volume on Sommelier ahead of Mainnet and beyond</h2>
            <p>Volume successfully launched Sommelier’s first iteration as PeggyJV, bringing the Cosmos Ethereum bridge to market and resulted in Sommelier raising a total $25MM in funding to launch the first automated DeFi blockchain to manage Liquidity Provider capital on Ethereum vai the Cosmos.</p>
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
    </div>
  )
}
