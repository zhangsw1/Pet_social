const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser');
const db = require('./database/database.js');
const Events = require('./database/schema.js');
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/events', function (req, res) {
  Events.fetchData((err, data)=>{
    if(err){
      console.log("app.get has errors",)
    }else{
      // console.log("get data is good");
      res.send(data);
    }
  })
})


app.post('/api/events', function (req, res) {
  var events = new Events({
    eventName : req.body.eventName,
    eventDate: req.body.eventDate,
    eventTime:req.body.eventTime,
    eventHost: req.body.eventHost,
    contactInfo: req.body.contactInfo,
    eventDescription: req.body.eventDescription,
    eventLocation: req.body.eventLocation
  })
//   var data=req.body;
//   console.log("this is post data:",data)
//   Events.create(data)
//     .then(res.status(200).send("db post is good"))
//     .catch(err => console.log("post errors: ",err));
//  })
  events.save(function(err, data){
    if(err){
      console.log("app.post has errors",err);
    }else{
      // res.status(200).send("db post is good")
      return res.json(data);
    }
  })
})

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

