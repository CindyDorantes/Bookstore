/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import BookContainer from './components/BookContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BookContainer />
      </div>
    );
  }
}

export default App;
