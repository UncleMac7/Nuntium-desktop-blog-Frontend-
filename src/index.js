import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Content from './components/content/Content';
import Search from './components/search/Search';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    <Intro/>
    <Content/>
    <Search/>
    <About/>
    <Footer/>
  </React.StrictMode>
);

