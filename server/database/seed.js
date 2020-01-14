const db = require('./database.js');
const Events = require('./schema.js');

const sampleEvents = [
  {
    eventName: 'Lab Shadow is turning 2',
    eventDate: 'Sat, Jan 31st,',
    eventTime: '12:30PM',
    eventHost: 'Jo',
    contactInfo: 'shadowlove@gmail.com',
    eventDescription: `Shadow is turning 2 this weekend, and I'm inviting everyone who wants to celebrate with us`,
    eventLocation: 'Fremont Dog Park',
    created: '01/01/2020'
  },
  {
    eventName: 'Beagle Celebration',
    eventDate: 'Sat, Feb 1st,',
    eventTime: '12:30PM',
    eventHost: 'David',
    contactInfo: 'david123@gmail.com',
    eventDescription: `I'm trying to see if I can find any other beagles in bay area`,
    eventLocation: 'San Jose Dog Park',
    created: '01/07/2020'
  },
  {
    eventName: 'Puppy Social Time in Bay Area',
    eventDate: 'Sat, Feb 7st, ',
    eventTime: '10:30PM',
    eventHost: 'Lucy',
    contactInfo: 'whiskyforlove@gmail.com',
    eventDescription: `I just got a puppy whisky, he is a bitchon(small breed). I would love to invite small breed dogs to come to hangout with us on Saturday`,
    eventLocation: 'Menlo Park Dog Park',
    created: '01/10/2020'
  }
]

const insertSampleEvents = function() {
  Events.create(sampleEvents)
  .then(() => db.disconnect);
}

insertSampleEvents();