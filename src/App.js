import React from 'react';
import './styles/main.scss';
import Header from './components/layout/header/header'
import About from './components/about/about'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
