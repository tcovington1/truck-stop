import React, { useEffect } from 'react';
import './styles/main.scss';
import { Route, Switch, } from 'react-router-dom';
import  { Breakpoint, BreakpointProvider } from 'react-socks';


import Landing from './pages/Landing';
import { blogIndex } from './components/blog/blogIndex';
import Footer from './components/layout/Footer';
import { fiveReasons } from './components/blog/fiveReasons';
import { WrongBlog } from './components/blog/WrongBlog';
import { WhyWebsiteBlog } from './components/blog/WhyWebsiteBlog';

import ReactGA from 'react-ga';
import { NavBar } from './components/layout/nav/NavBar';
import NavBarMob from './components/layout/nav/NavBarMob';
import OurProcess from './components/process/OurProcess';


function App() {
  useEffect(() => {
    ReactGA.initialize('UA-166860256-1');
    ReactGA.pageview(window.location.pathname + window.location.search);  

  }, [])

  

  return (
    <>
    <BreakpointProvider>
      <Breakpoint medium down>
        <NavBarMob />
      </Breakpoint>
      <Breakpoint large up>
        <NavBar />
      </Breakpoint>
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route  path="/blog" component={blogIndex} />
          <Route  path="/five-ways-to-grow-your-mobile-business-online" component={fiveReasons} />
          <Route  path="/what-almost-every-mobile-business-does-wrong" component={WrongBlog} />
          <Route  path="/why-every-mobile-business-needs-a-website" component={WhyWebsiteBlog} />
          <Route  path="/our-process" component={OurProcess} />

      </Switch>
        <Footer />
    </BreakpointProvider>
    </>
  );
}

export default App;
