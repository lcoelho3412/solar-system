import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  render() {
    return (
      <html data-theme="dark">
        <div className="w-3/5 mx-auto">
          <input className="w-full p-2 border border-gray-700 bg-black rounded-lg" placeholder="Earth" />
        </div>
      </html>
    );
  }
}

SearchBar.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default SearchBar;
