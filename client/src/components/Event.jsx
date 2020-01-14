import React from 'react';
// import EventViewer from './EventViewer.jsx'
// var moment = require('moment');
// const Event = ({event, changeView}) => {
//   // var titleChangeHandler = (event) => {
//   //   props.changeView(props.anypostview);
//   // };
//   // console.log("this is props. from post: ", anypostview)
//   return (
//   <div className="event">
//     <h1 className="event-title" onClick= {()=>changeView(postviewer,anypostview)}>{anypostview.title}</h1>
//     <div className="post-byline"><span className="post-byline-author">{anypostview.author}</span> {moment(anypostview.createdAt).fromNow()}</div>
//     <img src={anypostview.imageUrl} className="post-image" onClick= {()=>changeView(postviewer,anypostview)}/>
//     <p>{anypostview.body}</p>
//   </div>
//   )
// }

const Event = ({event,changeView}) => {
  console.log("this is event: ",event);
  return (
    <div className="post">
<h3 className="post-date">{event.eventDate}{", "}{event.eventTime}</h3>
      <h3 className="post-title">{event.eventName}{" - "}{event.eventLocation}</h3>
  <div className="post-byline"><span className="post-byline-author">{event.eventHost}{" • "}{event.contactInfo}</span>

      <p className = 'post-description'>{event.eventDescription}</p>
      </div>

    </div>
    )
}

export default Event;