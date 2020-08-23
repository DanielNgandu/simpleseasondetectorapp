//import React
import React from "react";

const SeasonDisplay = (props) => {
  if (props.errorMsg != null) {
    return (
      <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">{props.errorMsg}</div>
        <p>Please check your browser location settings and try again!</p>
      </div>
    );
  } else
    return (
      <div>
        <h2 className="ui header ui green label ui huge label">
          Your Current Location
        </h2>
        <div className="ui horizontal divider">-</div>
        <div className="ui horizontal label">Latitude:</div>
        <span>{props.latitude}</span>
        <br />
        <div className="ui horizontal label">Longitude: </div>
        <span>{props.longitude}</span>
      </div>
    );
};

export default SeasonDisplay;
