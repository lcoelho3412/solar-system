import React, { Component } from "react";
import PropTypes from "prop-types";

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <html data-theme="dark">
        <div className="overflow-hidden rounded-lg has-shadow w-full p-4 flex flex-col gap-2">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="text-xs">{year}</div>
          </div>
          <div className="text-md font-medium">
            <p>Country</p>
          </div>
          <div className="text-sm">
            <p>{country}</p>
          </div>
          <div className="text-md font-medium">
            <p>Destination</p>
          </div>
          <div className="text-sm">
            <p>{destination}</p>
          </div>
        <div className="grid gap-4">
            <div className="divider" />
          </div>
        </div>
      </html>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: "",
  year: "",
  country: "",
  destination: "",
};

export default MissionCard;
