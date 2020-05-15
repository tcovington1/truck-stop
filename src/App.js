import React from 'react';
import './styles/main.scss';
import { Route, Switch, } from 'react-router-dom';
import Landing from './pages/Landing';
import { blogIndex } from './components/blog/blogIndex';
import Footer from './components/layout/Footer';


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route  path="/blog" component={blogIndex} />
    </Switch>
      <Footer />
    </>
  );
}

export default App;
