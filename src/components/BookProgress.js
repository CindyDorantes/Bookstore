/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const BookProgress = (props) => {
  const { book } = props;
  return (
    <div className="bookProgress">
      <p className="currentChapter">CURRENT CHAPTER</p>
      <h4 className="bookChapter">{book[0].chapter}</h4>
      <button type="button" className="btnProgress">UPDATE PROGRESS</button>
    </div>
  );
};

BookProgress.propTypes = { book: PropTypes.array.isRequired };

export default BookProgress;
