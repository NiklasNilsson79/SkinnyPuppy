import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
