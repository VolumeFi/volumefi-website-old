import React, { useEffect, useState } from "react"
import SbEditable from "storyblok-react"
import { isMobileOnly } from "react-device-detect"
import { navigate } from "gatsby-link"
import Event from "./Event"

import imgMask3 from "@images/mask-3.png"
import imgTwitter from "@images/social/twitter.png";
import imgDiscord from "@images/social/discord.png";

const EventPage = ({ events, title, history }) => {
  console.log(events)
  return (
    <div className="page-container page-events">
      <div
        className="section section-black section-row page-events-top"
        style={{
          backgroundImage: `url(${imgMask3})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
      >
        <h1>Events</h1>
      </div>
      <div className="section section-black section-row page-events-title">
        <h2>{title}</h2>
      </div>
      {events.length > 0 ? (
        <div className="section section-white section-column page-events-content">
          {events.map((item, index) => (
            <Event event={item} key={`event-${index}`} />
          ))}
        </div>
      ) : (
        <div className="section section-white section-column page-events-content">
          <div className="page-events-empty">
            <p>Volume doesn't have any events planned yet! <br/>Join our community and stay updated on upcoming events.</p>
            <div className="page-empty-socials">
              <a href="https://discord.gg/Ebh6YjMShu" target="_blank" className="page-events-social-link">
                <img src={imgDiscord} alt="Telegram" />
                <span>Discord</span>
              </a>
              <a href="https://twitter.com/volumefi" target="_blank" className="page-events-social-link">
                <img src={imgTwitter} alt="Twitter" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default EventPage
