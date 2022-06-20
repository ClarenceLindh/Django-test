import React from 'react';
import logo from './logo.svg';
import Products from './components/products';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App page</h1>
        <Products />
      </header>
    </div>
  );
}

export default App;
