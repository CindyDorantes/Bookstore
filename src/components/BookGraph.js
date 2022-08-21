import React from 'react';
import PropTypes from 'prop-types';

const BookGraph = (props) => {
  const { book } = props;
  return (
    <div className="bookGraph">
      <img alt="progress circle" />
      <p className="progressPerc">{book.progress}</p>
      <p>Completed</p>
    </div>
  );
};

BookGraph.propTypes = { book: PropTypes.string.isRequired };

export default BookGraph;
