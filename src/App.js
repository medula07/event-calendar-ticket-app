// src/App.js
import React from 'react';
import './App.css';
import Calendar from './Calendar';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Event Calendar Ticket App</h1>
      </header>
      <main className="app-main">
        <Calendar />
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 Event Calendar Ticket App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;