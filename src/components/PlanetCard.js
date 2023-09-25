import React from "react";
import PropTypes from "prop-types";

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetDescription } = this.props;
    return (
      <>
        <div className="flex flex-col items-stretch gap-2">
          <div className="w-full overflow-hidden rounded-2xl has-shadow grid grid-cols-4">
            <div className="col-span-3 p-4 flex flex-col gap-2 justify-between">
              <div className="">
                <h3 className="text-xl font-semibold line-clamp-2">{planetName}</h3>
              <p className="text-s">{planetDescription}</p>
              </div>
            </div>
            <div className="col-span-1">
              <img
                src={planetImage}
                className="w-full aspect-auto rounded-l-none"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
