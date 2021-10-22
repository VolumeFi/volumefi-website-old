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

import welcomeBg from '@images/welcome.png'
import spiral1Img from '@images/spiral-1.png'
import spiral2Img from '@images/spiral-2.png'
import chevronDownImg from '@images/chevron-down.png'
import coinsImg from '@images/coins.png'
import coinsWhiteImg from '@images/coins-white.png'
import infoCircleImg from '@images/info-circle.png'

import ethImg from '@images/coins/eth.png'
import usdcImg from '@images/coins/usdc.png'
import usdtImg from '@images/coins/usdt.png'

const etheriumImg = '/images/etherium.png'

const whyData1 = [
  {
    title: 'Liquidity Provider Management Tools',
    description: 'Sommelier Cellars are focused on Uniswap v3 which has high degree of capital efficiency in the Range Order structure.',
  },
  {
    title: 'Bi-Directional Ethereum Bridge',
    description: 'Ethereum transactions are managed by the most functional bridge optimized for extending Ethereum features for Liquidity Providers.',
  },
]

const whyData2 = [
  {
    title: 'Data Driven Strategies',
    description: 'Sommelier validators leverage optimal liquidity management strategies based on blockchain transaction data and advanced price prediction models.',
  },
  {
    title: 'Non-Custodial Liquidity Oracle',
    description: 'Sommelier transactions are managed by the Sommelier blockchain validator set with decentralized governance. Sommelier itself does not control user funds.',
  },
]

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
    <div className='page-container'>
      
    </div>
  )
}
