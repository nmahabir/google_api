const {google} = require('googleapis');

var event = {
    id: "test1",
    summary: "Breakfast",
    description: "Eggs-in-hash-brown-nests-352693",
    start: {
      dateTime: "2018-10-08T09:00:00-07:00",
      timeZone: "Canada/Toronto"
    },
    end: {
      dateTime: "2018-10-08T09:00:00-09:00",
      timeZone: "Canada/Toronto"
    }
  };
  
  function createEvents(auth) {
    const calendar = google.calendar({ version: "v3", auth });
    calendar.events.insert(
      {
        auth: auth,
        calendarId: "primary",
        resource: event
      },
      function(err, event) {
        if (err) {
          console.log(
            "There was an error contacting the Calendar service: " + err
          );
          return;
        }
        console.log("Event created: %s", event.htmlLink);
      }
    );
  }