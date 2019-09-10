import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import PuppyList from '../PuppyList/PuppyList';

const App = () => {
  return (
    <>
      <Header />
      <div className="App container">
        <PuppyList />
      </div>
    </>
  );
}

export default App;
