import React from "react"
import SbEditable from "storyblok-react"
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer"
import { google, outlook, office365, yahoo, ics } from "calendar-link";

import telegramColorImg from '@images/social/telegram-color.png';

var validUrl = require('valid-url');

function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

function getTime(dateTime) {
  let hours = dateTime.getHours().toString();
  if (hours.length == 1) {
    hours = "0" + hours;
  }
  let minutes = dateTime.getMinutes().toString();
  if (minutes.length == 1) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes;
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}


const Event = ({ blok, history, slug, join_community, uid}) => {
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
  description: event.description.content[0].content[0].text
  };

  if (event.start_date != "") {
    let date_data = event.start_date.split(" ")
    let date_str = date_data[0]
    start_time = date_data[1]

    let utc_str = date_str + "T" + start_time + ":00.000+0000"

    s_date = new Date(utc_str);

    start_date = s_date.toLocaleDateString(undefined, options);
    start_time = getTime(s_date);

    //start_date = Date(event.start_date.split(" ")[0]).toLocaleDateString(undefined, options)
  }

  if (event.end_date != "") {
    let date_data = event.end_date.split(" ")
    let date_str = date_data[0]
    end_time = date_data[1]

    let utc_str = date_str + "T" + end_time + ":00.000+0000"

     e_date = new Date(utc_str);

    end_date = e_date.toLocaleDateString(undefined, options);
    end_time = getTime(e_date);
  }

  if (start_date != "") {
    event_dates = <h6>Event Date: &nbsp;&nbsp;<span style={{color: 'white'}}>{start_date}</span></h6>;
    invite_event.start = event.start_date;
    event_time = <h6>Event Time: &nbsp;&nbsp;<span style={{color: 'white'}}>{tConvert(start_time)}</span></h6>;
  }

  if (event.start_date != "" && event.end_date != "") {
    if (start_time != end_time) {
      event_time = <h6>Event Time: &nbsp;&nbsp;<span style={{color: 'white'}}>{tConvert(start_time)} to {tConvert(end_time)}</span></h6>;
    }
  }

  if (event.location != "") {
    if (validUrl.isUri(event.location)){
        location = <h6>Location: &nbsp;&nbsp;<a href={event.location} className="card-link">{event.location}</a></h6>;
    } else {
        location = <h6>Location: &nbsp;&nbsp;{event.location}</h6>;
    }
  }


  let img_div = "";
  let img_style = "";
  if (!isEmpty(event.event_image.filename)) {
    column_size = "col-md-6";
    img_style = "width:100%";
    img_div = <div className="col-md-6"><img src={event.event_image.filename} style={{width: 100 + '%'}} /><br/><br/></div>;
  } else {
    column_size = "col-12";
  }

  let add_to_calc = "";
  if (!history) {
    add_to_calc = <div title="Add to Calendar" className="addeventatc">Register for Event<span className="start">{ s_date.toLocaleString() }</span><span className="end">{ e_date.toLocaleString() }</span><span className="title">{ event.title }</span><span className="description">{ event.description.content[0].content[0].text }</span><span className="location">{ event.location }</span></div>;
  }

  return (
    <div className='event-item'>
      <div className='event-item__left'>
        <h2>{event.title}</h2>
        <div className='event-item__divider'></div>
        <div className='event-detail'>
          {event_dates}
        </div>
        <div className='event-detail'>
          {event_time}
        </div>
        <div className='event-detail'>
          {location}
        </div>
        {!isEmpty(event.event_image.filename) && (
          <img src={event.event_image.filename} className='event-image' />
        )}
      </div>
      <div className='event-item__right'>
        {!history && (
          <div className='event-join-us'>
            <h4>Join Us In:</h4>
            <h2 id={uid} style={{textAlign: 'center'}}></h2>
          </div>
        )}
        <div className='event-register'>
          <div className='event-action'>
            <a className='event-action-register' target="_blank">
              Register for Event
            </a>
            <a className='event-action-join' href="https://t.me/getsomm" target="_blank">
              <span>Join Our Community</span>
              <img src={telegramColorImg} />
            </a>
          </div>
        </div>
        <div className="event-intro">
          {render(event.description, {
              nodeResolvers: {
                [NODE_IMAGE]: (children, props) => <img {...props} style={{borderRadius: '0px', width: '100%'}}/>
              },
              blokResolvers: {
                ['YouTube-blogpost']: (props) => (
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={ "https://www.youtube.com/embed/" + props.YouTube_id.replace('https://youtu.be/', '')  }></iframe>
                  </div>
                  )
              }
          })}
        </div>
      </div>
    </div>
  )
}

export default Event
