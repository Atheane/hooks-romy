import React from 'react';
import Zoe from './Zoe';
// import logo from './logo.svg';
import Store from './Store';
import Cat from './Cat';
import './App.css';

function App() {
  return (
    <Store>
      <div className="App">
        <Cat />
      </div>
    </Store>
  );
}

export default App;
