import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/health"
            element={<News key="health" country="in" category="health" pageSize={this.pageSize}></News>}
          />
          <Route
            exact
            path="/business"
            element={
              <News key="business" country="in" category="business" pageSize={this.pageSize}></News>
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News key="entertainment" country="in" category="entertainment" pageSize={this.pageSize}></News>
            }
          />
          <Route
            exact
            path="/science"
            element={<News key="science" country="in" category="science" pageSize={this.pageSize}></News>}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" country="in" category="sports" pageSize={this.pageSize}></News>}
          />
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" country="in" category="technology" pageSize={this.pageSize}></News>
            }
          />
          <Route
            exact
            path="/"
            element={<News key="general" country="in" category="general" pageSize={this.pageSize}></News>}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" country="in" category="health" pageSize={this.pageSize}></News>}
          />
        </Routes>
        {/* <News country="in" category="health" pageSize={this.pageSize}></News> */}
      </div>
    );
  }
}
