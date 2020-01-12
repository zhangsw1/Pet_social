const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser');
// const db = require('./database/database.js');
// const Events = require('./database/schema.js');
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/events', function (req, res) {
//   console.log("did you get here? app.get");
//   Events.fetchData((err, data)=>{
//     if(err){
//       console.log("app.get has errors",)
//     }else{
//       console.log("get data is good");
//       res.send(data);
//     }
//   })
// })


// app.post('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})

