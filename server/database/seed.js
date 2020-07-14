const db = require('./database.js');
const Events = require('./schema.js');

const sampleEvents = [
  {
    eventName: 'Lab Shadow is turning 2',
    eventDate: 'Sat, Jan 31st',
    eventTime: '12:30PM',
    eventHost: 'Jo',
    contactInfo: 'shadowlove@gmail.com',
    eventDescription: `Shadow is turning 2 this weekend, and I'm inviting everyone who wants to celebrate with us`,
    eventLocation: 'Fremont Dog Park',
    created: '01/01/2020',
    join:3,
    maybe:4
  },
  {
    eventName: 'Beagle Celebration',
    eventDate: 'Sat, Feb 1st',
    eventTime: '12:30PM',
    eventHost: 'David',
    contactInfo: 'david123@gmail.com',
    eventDescription: `I'm trying to see if I can find any other beagles in bay area`,
    eventLocation: 'San Jose Dog Park',
    created: '01/07/2020',
    join: 7,
    maybe: 2
  },
  {
    eventName: 'Puppy Social Time in Bay Area',
    eventDate: 'Sat, Feb 7st',
    eventTime: '10:30PM',
    eventHost: 'Lucy',
    contactInfo: 'whiskyforlove@gmail.com',
    eventDescription: `I just got a puppy whisky, he is a bitchon(small breed). I would love to invite small breed dogs to come to hangout with us on Saturday`,
    eventLocation: 'Menlo Park Dog Park',
    created: '01/10/2020',
    join:4,
    maybe:0
  },
  {
    eventName: '1st Puppy Social Time',
    eventDate: 'Sat, Jan 18th',
    eventTime: '11:30AM',
    eventHost: 'Daniel',
    contactInfo: 'daniel@gmail.com',
    eventDescription: `I just got a puppy whisky, he is a bitchon(small breed). I would love to invite small breed dogs to come to hangout with us on Saturday`,
    eventLocation: 'Menlo Park Dog Park',
    created: '01/13/2020',
    join:2,
    maybe:1
  },
  {
    eventName: 'Hiking?',
    eventDate: 'Sat, Jan 18th',
    eventTime: '10:30AM',
    eventHost: 'Cody',
    contactInfo: 'cody@gmail.com',
    eventDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    eventLocation: 'Menlo Park Dog Park',
    created: '01/12/2020',
    join:7,
    maybe:4
  },
  {
    eventName: 'Take a walk in Cupertino',
    eventDate: 'Sat, Feb 7st',
    eventTime: '10:30PM',
    eventHost: 'Ashley',
    contactInfo: 'mangoforlove@gmail.com',
    eventDescription: `I just want to take my dog mango for a short walk, anyone wants to join?`,
    eventLocation: 'Cupertino De Anza Ave',
    created: '01/04/2020',
    join:4,
    maybe:0
  }
]

const insertSampleEvents = function() {
  Events.create(sampleEvents)
}

insertSampleEvents();