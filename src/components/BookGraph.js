/* eslint-disable react/forbid-prop-types */
import React from 'react';
import style from './Styles/BookGraph.module.css';

const BookGraph = () => (
  <div className={style.bookGraph}>
    <div>
      <p className={style.progressPerc}>64%</p>
      <p className={style.completed}>Completed</p>
    </div>
    <div className={style.line} />
  </div>
);

export default BookGraph;
