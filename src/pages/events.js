
import React from "react"

const EventsPage = () => {
  if(typeof window !== "undefined"){
    window.location.href = "/events/upcoming-events";
  }

  return (<></>)
}

export default EventsPage;
