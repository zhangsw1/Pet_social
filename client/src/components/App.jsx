import React from "react";
import Home from "./Home.jsx";
import View from "./View.jsx";
import Create from "./Create.jsx";
import SearchParams from "./SearchParams";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "home",
      events: [],
    };
    this.changeView = this.changeView.bind(this);
    this.fetchView = this.fetchView.bind(this);
  }

  componentWillMount() {
    this.fetchView();
  }

  changeView(option) {
    console.log("option:!!!!!", option);
    this.setState({
      pageName: option,
    });
  }

  // fetchView(){
  //   $.ajax({
  //     type:'GET',
  //     url: '/api/events',
  //     success:(data) => {
  //       console.log("index.jsx fetch data",data);
  //       this.setState ({events:data});
  //     },
  //     error:(err) => {
  //       console.log("there is an error", err)
  //     }
  //   })
  // }

  fetchView() {
    fetch("http://localhost:3003/api/events")
      .then((userInput) => userInput.json())
      .then((userInput) => {
        console.log("!!!!!!!!!!!!!!!!!!!!results", userInput);
        this.setState({ events: userInput });
      })
      .catch((err) => {
        console.log("here is an error", err);
      });
  }

  renderView() {
    const { pageName } = this.state;

    console.log("what is pageName in renderview: ", pageName);
    if (pageName === "home") {
      return <Home changeView={this.changeView} />;
    } else if (pageName === "create") {
      return <Create fetchView={this.fetchView} />;
    } else if (pageName === "view") {
      console.log("did you get here", this.state.events);
      return <View events={this.state.events} changeView={this.changeView} />;
    } else if (pageName === "search") {
      return <SearchParams />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("home")}>
            <Navbar.Brand>PetPal</Navbar.Brand>
          </span>
          <span
            className={
              this.state.view === "view" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("view")}
          >
            See all events
          </span>
          <span
            className="nav-unselected"
            onClick={() => this.changeView("create")}
          >
            Create Event
          </span>
          <span
            className="nav-unselected"
            onClick={() => this.changeView("search")}
          >
            Adopt
          </span>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}
export default App;
