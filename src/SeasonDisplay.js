//import React
import React from "react";

//config
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake",
  },
};

//get season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

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
        <span>
          {" "}
          <i className={`icon-right large ${iconName} icon`} />
          {season}
        </span>
      </div>

      //
    );
};

export default SeasonDisplay;
