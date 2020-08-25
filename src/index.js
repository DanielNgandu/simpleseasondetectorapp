//import React
import React, { Component } from "react";

//import React-DOM
import ReactDOM from "react-dom";

//import custom components
import SeasonDisplay from "./SeasonDisplay";
import PageLoader from "./PageLoader";

//class based component
class App extends React.Component {
  //called before instance of component is created.
  //our state
  state = { latitude: null };
  state = { longitude: null };

  //month

  //error messgae
  state = { errorMsg: null };

  //ReactJs Life cycle methods
  //1.
  componentDidMount() {
    console.log("Hey!Components rendered well!");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({
          errorMsg: err.message,
        });
      }
    );
  }

  //.2
  componentDidUpdate() {
    console.log("Components did update!");
  }
  //React says we have to define a render method
  render() {
    //if state properties are null, then show loading,else show page
    if (this.state.errorMsg == null && this.state.latitude == null) {
      return <PageLoader />;
    } else
      return (
        <div className="ui raised very padded text container segment">
          <SeasonDisplay
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            errorMsg={this.state.errorMsg}
          />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
