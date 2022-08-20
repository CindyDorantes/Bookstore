/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Calculator from './components/Calculator';
import Quote from './pages/Quote';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
