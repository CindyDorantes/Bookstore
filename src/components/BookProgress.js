/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styles from './Styles/BookProgress.module.css';

const BookProgress = () => (
  <div className={styles.bookProgress}>
    <p className={styles.currentChapter}>CURRENT CHAPTER</p>
    <h4 className={styles.bookChapter}>Chapter 3: &#34;A Lesson Learned&#34;</h4>
    <button type="button" className={styles.btnProgress}>UPDATE PROGRESS</button>
  </div>
);

export default BookProgress;
