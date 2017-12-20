var express = require('express');
var server = express();

/*
To-do list (by date, by priority, by date and priority)
    - Checklist
    - Progress bar
    - Set goals (by day, week, month, year)
        - I want deadlines/goals to carry over to the next day if they aren’t checked off by the date that
          I had initially set it for it to be completed (put at top of priority)
    - Possible Interfaces
        - viewAllEvents(user id)
        - createEvent(time, date, event name, event category, event priority)
        - removeEvent(event id)
        - editEvent(event id, new time, new date, new event name, new event category, new event priority)
 */
server.get('/todo/view', function(req, res) {
});

server.post('/todo/create', function(req, res) {
});

server.post('/todo/remove', function(req, res) {
});

server.post('/todo/edit', function(req, res) {
});


/*
Alarm feature (not just notification)
    - When to leave for event (not just when the event is, notification 30mins before event, etc.)
        - I always miscalculate how long it’s actually gonna take to go somewhere, so I want some alarm to get my attention when I should start thinking about leaving my current location to get to the event
    - Possible Interfaces
        - viewAlarms(user id)
        - createAlarm(event id, alarm time, alarm date)
        - removeAlarm(alarm id)
        - editAlarmTime(alarm id, new alarm time, new alarm date)
 */
server.get('/alarms/view', function(req, res) {
});

server.post('/alarms/create', function(req, res) {
});

server.post('/alarms/remove', function(req, res) {
});

server.post('/alarms/edit', function(req, res) {
});
