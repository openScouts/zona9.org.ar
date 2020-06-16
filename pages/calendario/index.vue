<template>
  <div class="container">
    <h1 class="h1-responsive">Calendario de Formacion</h1>
    <hr />
    <FullCalendar
      default-view="dayGridMonth"
      google-calendar-api-key="AIzaSyCQ9aa3u8WaaIwL_93ZkYqEWoKgaWEE1Gk"
      :events="{
        googleCalendarId:
          'zona9.org.ar_6fgl3k2ddd0jfg589e8cejtpms@group.calendar.google.com',
      }"
      :plugins="calendarPlugins"
    />

    <hr />
    <h4>Link a Google Calendar</h4>
    <hr />
    <a
      class="btn waves-light"
      href="https://calendar.google.com/calendar/embed?src=zona9.org.ar_6fgl3k2ddd0jfg589e8cejtpms%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires"
    >
      Ir a google Calendar
    </a>
  </div>
</template>

<style lang="scss">
@import '@fullcalendar/core/main.css';
@import '@fullcalendar/daygrid/main.css';
</style>
<script>
// https://github.com/Wanderxx/vue-fullcalendar
// https://fullcalendar.io/docs/vue
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin, googleCalendarPlugin],
    }
  },

  head() {
    return {
      title: 'Calendario Zonal',
    }
  },
}
</script>
