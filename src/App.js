import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookMovie from './component/BookMovie';

function App() {
  return (
    <div className="App">
      <div className="App-header">Movie Booking App</div>
      <BookMovie />      
    </div>
  );
}

export default App;
