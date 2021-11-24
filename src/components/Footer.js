import React from "react"
import Link from 'gatsby-link'

import twitterImg from '@images/social/twitter.png'
import githubImg from '@images/social/github.png'
import discordImg from '@images/social/discord.png'
import telegramImg from '@images/social/telegram.png'
import linkedinImg from '@images/social/linkedin.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <h2>Let's Connect!</h2>
          <div className='footer-top-social'>
            <a href='https://twitter.com/volumefi' target='_blank' className='footer-top-social-item'>
              <img src={twitterImg} />
            </a>
            <a href='https://github.com/volumefi' target='_blank' className='footer-top-social-item'>
              <img src={githubImg} />
            </a>
            <a href='https://discord.gg/Ebh6YjMShu' target='_blank' className='footer-top-social-item'>
              <img src={discordImg} />
            </a>
            <a href='https://t.me/volumefi' target='_blank' className='footer-top-social-item'>
              <img src={telegramImg} />
            </a>
            <a href='https://www.linkedin.com/company/volumefi/' target='_blank' className='footer-top-social-item'>
              <img src={linkedinImg} />
            </a>
          </div>
        </div>
        <div className='footer-top-right'>
          <h2>Careers</h2>
          <p>Come and work with us! We are always looking for great and intelligent people to join our international team.</p>
          <Link to={`/careers/`} className='link-innovation-career'>
            See innovation Opportunities
          </Link>
        </div>
      </div>
      <div className='footer-bottom'>
        <span>©2021 VOLUME</span>
      </div>
    </footer>
  )
}

export default Footer
