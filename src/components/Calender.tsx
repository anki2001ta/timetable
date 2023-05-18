
import React from 'react';
import './calender.scss';

//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View
import timeGridPlugin from '@fullcalendar/timegrid';

class Test extends React.Component {
  render() {
    return (
<div className="maincontainer">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, listPlugin,timeGridPlugin ]}
        // plugins={[ timeGridPlugin ]}
        initialView="dayGridWeek"
        // initialView="timeGridWeek"
        headerToolbar={{
          left: 'title',
          right: 'dayGridDay,dayGridWeek,dayGridMonth'
        }}
        // events={[
        //   { title: 'event 1', date: '2020-08-13' },
        //   { title: 'event 2', date: '2020-08-15' },
        //   { title: 'event 2', date: '2020-08-15' },
        //   { title: 'event 2', date: '2020-08-15' },
        //   { title: 'event 2', date: '2020-08-15' },
        //   { title: 'event 2', date: '2020-08-15' },
        //   { title: 'event 2', date: '2020-08-15' }

        // ]}
      />
     
</div>
)
};
}

export default Test;