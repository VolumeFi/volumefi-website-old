import React, {useEffect, useState} from 'react'

import AboutUsPage from './AboutUsPage';

import Link from 'gatsby-link'
import Profile from '../components/Profile'
import {isMobileOnly} from 'react-device-detect'

// Carousel
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css'

// import loadable from '@loadable/component'

// const Carousel = loadable(() => import('@brainhubeu/react-carousel'))
// const slidesToShowPlugin = Carousel.slidesToShowPlugin

// setTimeout(function(){
//   var href = window.location.href;
//   const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
//   const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
//   const twitter_url = 'http://twitter.com/share?url='+ href;
//
//   const fb = document.getElementById('facebook')
//
//   if (fb) {
//     document.getElementById('facebook').setAttribute("href", facebook_url);
//     document.getElementById('linkedin').setAttribute("href", linkedin_url);
//     document.getElementById('twitter').setAttribute("href", twitter_url);
//   }
// }, 1500);

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
    <AboutUsPage />
  )
}
