//import react
import React from "react";

//class based components
class PageLoader extends React.Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          Please allow us to get your location...
        </div>
      </div>
    );
  }
}

// Exporting the component
export default PageLoader;
