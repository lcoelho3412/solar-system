import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="flex items-center justify-center h-32 w-full mb-4">
        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-white bg-black md:text-5xl lg:text-6xl">
          {headline}
        </h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
