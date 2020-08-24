//import React
import React from "react";

//get season
const getSeason = (latitude, longitude, month) => {
  //check ranges of months
  if (month > 2 && month < 9) {
    // eslint-disable-next-line no-unused-expressions
    return latitude > 0
      ? "Summer in the northen hemisphere."
      : "Winter in the southern hemisphere.";
  } else {
    return latitude > 0
      ? "Winter in the southern hemisphere."
      : "Summer in the northen hemisphere.";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(
    props.latitude,
    props.longitude,
    new Date().getMonth()
  );

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
        <br />
        <div className="ui horizontal label">Season: </div>
        <span>{season}</span>
      </div>

      //
    );
};

export default SeasonDisplay;
