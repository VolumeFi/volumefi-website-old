import React, { useEffect, useState } from 'react'
import SbEditable from 'storyblok-react'
import { isMobileOnly } from 'react-device-detect'
import { navigate } from 'gatsby-link';
import Event from './Event'

const windowGlobal = typeof window !== 'undefined' && window


const EventPage = ({ blok, title, history, join_community }) => {
  const events = blok.events.content;

  let see_history = "";

  if (!history) {
    see_history = <a href="/events/history">See past events</a>
  } else {
    see_history = <a href="/events">See upcoming events</a>
  }
  //console.log("*********DSJHKFBJ*******");
  // console.log(events);
  //console.log(events.sort(function(a, b){return parseInt(JSON.parse(a.content).start_date.split(" ")[0].replace(/-/g, '')) - parseInt(JSON.parse(b.content).start_date.split(" ")[0].replace(/-/g, ''))}));
  //console.log(events);
  events.sort(function (a, b) { return parseInt(JSON.parse(a.content).start_date.split(" ")[0].replace(/-/g, '')) - parseInt(JSON.parse(b.content).start_date.split(" ")[0].replace(/-/g, '')) })
  if (history) { events.reverse(); }
  console.log(events);
  //console.log("*********DSJHKFBJ*******");
  return (
    <SbEditable content={blok} key={blok._uid}>
      <style dangerouslySetInnerHTML={{
        __html: `
      a {  color: white; }
    `}} />
      <br /><br /><br />
      <div className="container resource-container">
        <h1>
          Upcoming Events
          {/* <span style={{ float: 'right' }}><a href="/events/history">PAST EVENTS</a></span> */}
        </h1>
        <br /><br />
        {
          events.map((blok, index) => {
            const event = JSON.parse(blok.content);
            //console.log(event);
            return (<Event key={`event-page-${index}`} blok={event} history={history} slug={blok.full_slug} join_community={join_community} uid={blok.uid} />)
          })
        }

        <br />
        <br />
      </div>
    </SbEditable>
  )
}
export default EventPage
