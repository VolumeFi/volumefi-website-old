import React from "react"
import SbEditable from "storyblok-react"

import invest1Img from '@images/investors/invest-1.png'
import invest2Img from '@images/investors/invest-2.png'
import invest3Img from '@images/investors/invest-3.png'
import invest4Img from '@images/investors/invest-4.png'

import twitterImg from '@images/social/twitter.png'
import githubImg from '@images/social/github.png'
import discordImg from '@images/social/discord.png'
import telegramImg from '@images/social/telegram.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <h2>Let's Connect!</h2>
          <div className='footer-top-social'>
            <a href='https://t.me/volumefi' target='_blank' className='footer-top-social-item'>
              <img src={twitterImg} />
            </a>
            <a href='https://github.com/volumefi' target='_blank' className='footer-top-social-item'>
              <img src={githubImg} />
            </a>
            <a href='https://discord.gg/Ebh6YjMShu' target='_blank' className='footer-top-social-item'>
              <img src={discordImg} />
            </a>
            <a href='' target='_blank' className='footer-top-social-item'>
              <img src={telegramImg} />
            </a>
          </div>
        </div>
        <div className='footer-top-right'>
          <h2>Careers</h2>
          <p>Come and work with us! We are always looking for great and intelligent people to join our international team.</p>
          <button>See innovation Opportunities </button>
        </div>
      </div>
      <div className='footer-bottom'>
        <span>©2021 VOLUME</span>
      </div>
    </footer>
  )
}

export default Footer
