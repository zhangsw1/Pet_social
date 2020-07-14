import React from 'react';
import Button from 'react-bootstrap/Button'
class Event extends React.Component{
  constructor(props){
    console.log("what is props",props)
    super(props);
    this.state = {join:this.props.event.join, maybe: this.props.event.maybe};
    this.clickBtn = this.clickBtn.bind(this);
    this.clickNoBtn = this.clickNoBtn.bind(this);
  }
  clickBtn(){
    this.setState({
        join: this.state.join + 1,
    });
  }

  clickNoBtn(){
    this.setState({
        maybe: this.state.maybe+1
    });
  }


render(){
  return (
    <div className="post">
      <div className='first-line'>
        <h3 className="post-date">{this.props.event.eventDate}{", "}{this.props.event.eventTime}</h3>

        </div>
        <h3 className="post-title">{this.props.event.eventName}{" - "}{this.props.event.eventLocation}</h3>
        <div className="post-byline">
          <span className="post-byline-author">{this.props.event.eventHost}{" • "}{this.props.event.contactInfo}</span>

          <p className = 'post-description'>{this.props.event.eventDescription}</p>

                    <style type="text/css">
                      {`
                      .btn-flat {
                        background-color: rgb(237, 237, 237);
                      }

                      .btn-xxs {
                        padding: 0.2rem 0.5rem;
                        font-size: 0.5rem;
                        font-weight: 700;
                      }
                      `}
                    </style>
          <Button variant="flat" size="s" onClick={this.clickBtn}>
            Join {this.state.join}
            </Button>

                    {' '}

                    <Button variant="flat" size="s" onClick={this.clickNoBtn}>
            Maybe {this.state.maybe}
        </Button>
        <hr className='divider' style={{ border: '1px dotted', borderstyle: 'none none dotted', color: 'rgb(225,225,225' }} />
        </div>
    </div>
    )
  }
}

export default Event;