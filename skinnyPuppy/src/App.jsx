import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import BandHistory from './components/BandHistory';
import Discography from './components/Discography';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Banner />
      <main>
        <BandHistory />
        <Discography />
      </main>
      <Footer />
    </div>
  );
}

export default App;
