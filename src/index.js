//import React
import React from "react";

//import React-DOM
import ReactDOM from "react-dom";

//import custom components
import SeasonDisplay from "./SeasonDisplay";

//class based component
class App extends React.Component {
  //called before instance of component is created.
  //Also init of State
  constructor(props) {
    super(props);

    //our state
    this.state = { latitude: null };
    this.state = { longitude: null };

    //error messgae
    this.state = { errorMsg: null };
  }

  //React says we have to define a render method
  render() {
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
