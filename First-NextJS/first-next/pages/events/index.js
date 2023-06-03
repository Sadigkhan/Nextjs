import { getAllEvents } from '@/dummy-data'
import EventList from '@/components/events/event-list';
import React, { Fragment } from 'react'
import EventsSearch from '@/components/events/events-search';
import { useRouter } from 'next/router';




const AllEventsPage = () => {
const events = getAllEvents();

const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
   
  )
}

export default AllEventsPage