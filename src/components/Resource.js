import React from "react"
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import { google, outlook, office365, yahoo, ics } from "calendar-link";

import leftArrowImg from '@images/left-arrow.png';

var validUrl = require('valid-url');

const Resource = ({ blok }) => {
  const event = blok
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let event_dates = "";
  let location = "";
  let has_image = false;
  let card_div = "";
  let column_size = "col-12";
  let start_date = "";
  let end_date = "";
  let start_time = "";
  let end_time = "";
  let event_time = "";
  let s_date;
  let e_date;

  let invite_event = {
    title: event.title,
    description: event?.description?.content[0]?.content[0]?.text
  };


  if (event.location != "") {
    if (validUrl.isUri(event.location)) {
      location = <h6 className="card-subtitle">Location: &nbsp;&nbsp;<a href={event.location} className="card-link">{event.location}</a></h6>;
    } else {
      location = <h6 className="card-subtitle">Location: &nbsp;&nbsp;{event.location}</h6>;
    }
  }

  return (
    <div className='resource-item'>
      <div className='resource-item__header'>
        <h2>{event.title}</h2>
      </div>
      <div className='resource-item__divider'>
      </div>
      <div className='resource-item__body'>
        {event.image.filename && (
          <img className='resource-image' src={event.image.filename}/>
        )}
        <div className='resource-content'>
          <div className="resource-content-intro">{render(event.description, {
            nodeResolvers: {
              [NODE_IMAGE]: (children, props) => <img {...props} style={{ borderRadius: '0px', width: '100%' }} />
            },
            blokResolvers: {
              ['YouTube-blogpost']: (props) => (
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + props.YouTube_id.replace('https://youtu.be/', '')}></iframe>
                </div>
              )
            }
          })}</div>
          <a className='read-more-button' href={event.location} target="_blank">
            Read now
            <img src={leftArrowImg} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resource
