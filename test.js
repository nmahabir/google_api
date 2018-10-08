// Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.

var event = {
  summary: "Breakfast",
  description: "Eggs-in-hash-brown-nests-352693",
  start: {
    dateTime: "2018-10-08T09:00:00-07:00",
    timeZone: "Canada/Toronto"
  },
  end: {
    dateTime: "2018-10-08T09:00:00-09:00",
    timeZone: "Canada/Toronto"
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 }
    ]
  }
};

var request = gapi.client.calendar.events.insert({
  calendarId: "primary",
  resource: event
});

request.execute(function(event) {
  appendPre("Event created: " + event.htmlLink);
});
