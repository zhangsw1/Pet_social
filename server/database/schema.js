const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let eventsSchema = new mongoose.Schema({
  eventName: String,
  eventDate: String,
  eventTime: String,
  eventHost: String,
  contactInfo: String,
  eventDescription: String,
  eventLocation: String,
  eventLimitation: String,
  created: { type: Date, default: Date.now },
  join: Number,
  maybe: Number
});

let Events = mongoose.model('Events', eventsSchema);

let fetchData = (callback) => {
  Events.find().sort({created:-1}).exec(function(err, data){
    if(err){
      console.log("there is an erro in fetchData",err);
      callback(err)
    }else{
      console.log("fetching data is perfect");
      callback(null, data)
    }
  })
}



module.exports = Events;
module.exports.fetchData = fetchData;
