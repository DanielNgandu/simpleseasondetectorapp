//import React
import React from "react";

const SeasonDisplay = (props) => {
  return (
    <div>
      <h2 className="ui header ui green label ui huge label">
        Your Current Location
      </h2>
      <div class="ui horizontal divider">-</div>
      <div className="ui horizontal label">Latitude:</div>
      <span>{props.latitude}</span>
      <br />
      <div className="ui horizontal label">Longitude: </div>
      <span>{props.longitude}</span>
    </div>
  );
};

export default SeasonDisplay;
