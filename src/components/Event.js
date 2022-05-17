import React from "react"
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import { google, outlook, office365, yahoo, ics } from "calendar-link"

import { parseDate, convertUTCtoLocalTime, convertTimeString } from "../utils/date"

const generateEventCalendar = (event) => ({
  title: event.Title,
  description: event.Description,
  start: event.EventTime + ":00 +00:00",
  duration: [1, "hour"],
});

const Event = ({ event }) => {
  return (
    <div className="event-container">
      <div className="event-header">
        <img
          className="event-header-image"
          src={event.Image.filename}
          alt={event.Title}
        />
      </div>
      <div className="event-content">
        <div className="event-content-time">{convertTimeString(event.EventTime, true)}</div>
        <div className="event-content-title">{event.Title}</div>
        <div className="event-content-location">{event.Location}</div>
        <div className="event-content-divider"></div>
        <div className="event-content-description">
          {event.Description}
        </div>
        <div className="event-content-buttons">
          {event.LearnMore.url !== "" && (
            <a href={event.LearnMore.url} className="event-button-learn" target="_blank">Learn More...</a>
          )}
          {event.Register.url !== "" && (
            <a href={event.Register.url} className="event-button-learn"  target="_blank">Register</a>
          )}
          <a href={google(generateEventCalendar(event))} className="event-button-calendar" target="_blank">Add to Calendar</a>
        </div>
      </div>
    </div>
  )
}

export default Event
