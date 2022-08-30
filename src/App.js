// rcc,rce,rcep
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key={'general'} apiKey={this.apiKey} country={"in"} />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/business" element={<News  key={'business'} apiKey={this.apiKey} country={"in"} category={"business"}/>} />
          <Route exact path="/entertainment" element={<News key={'entertainment'} apiKey={this.apiKey} country={"in"} category={"entertainment"}/>} />
          <Route exact path="/health" element={<News key={'health'} apiKey={this.apiKey} country={"in"} category={"health"}/>} />
          <Route exact path="/science" element={<News key={'science'} apiKey={this.apiKey} country={"in"} category={"science"}/>} />
          <Route exact path="/sports" element={<News key={'sports'} apiKey={this.apiKey} country={"in"} category={"sports"}/>} />
          <Route exact path="/technology" element={<News key={'technology'} apiKey={this.apiKey} country={"in"} category={"technology"}/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}


