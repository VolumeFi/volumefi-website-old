import React, { useEffect, useState, useMemo } from "react"
import { graphql } from "gatsby"

import EventPage from "../../components/EventPage"
import Layout from "../../components/Layout"
import SEO from "../../components/HeadSeo"
import { parseDate, convertUTCtoLocalTime } from "../../utils/date"

import "../../assets/scss/main.scss"

const PastEventsPage = ({ data, location }) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const eventList = []

    data.stories.edges.forEach(story => {
      const event = JSON.parse(story.node.content)

      if (story.node.full_slug.includes("events/")) {
        eventList.push(event)
      }
    })
    setEvents(eventList)
  }, [data])

  const filteredEvents = useMemo(() => {
    const tempEvents = events.filter(event => {
      const currentTime = new Date().getTime()
      const eventTime = convertUTCtoLocalTime(
        parseDate(event.EventTime).getTime()
      )

      if (eventTime < currentTime) {
        return true
      }

      return false
    })

    tempEvents.sort((a, b) => {
      const aEventTime = parseDate(a.EventTime).getTime()
      const bEventTime = parseDate(b.EventTime).getTime()

      return aEventTime > bEventTime ? -1 : 1;
    })

    return tempEvents
  }, [events])

  return (
    <Layout location={location}>
      <SEO title="Events" description="Volume past events." />
      <EventPage events={filteredEvents} title='Past Events' history={false} />
    </Layout>
  )
}

export default PastEventsPage

export const query = graphql`
  {
    stories: allStoryblokEntry {
      edges {
        node {
          id
          name
          created_at
          published_at
          uuid
          slug
          full_slug
          content
          is_startpage
          parent_id
          group_id
        }
      }
    }
  }
`
