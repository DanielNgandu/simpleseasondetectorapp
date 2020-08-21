//import React
import React from "react";

//import React-DOM
import ReactDOM from "react-dom";

//import custom components
// import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return (
      <div className="container">
        <div>Latitude:</div>
        <div>Longitude:</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
