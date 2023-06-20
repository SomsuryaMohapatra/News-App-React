import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_MEWS_API ;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="health"
                country="in"
                category="health"
                pageSize={this.pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="business"
                country="in"
                category="business"
                pageSize={this.pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize={this.pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="science"
                country="in"
                category="science"
                pageSize={this.pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="sports"
                country="in"
                category="sports"
                pageSize={this.pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="technology"
                country="in"
                category="technology"
                pageSize={this.pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="general"
                country="in"
                category="general"
                pageSize={this.pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="health"
                country="in"
                category="health"
                pageSize={this.pageSize}
              ></News>
            }
          />
        </Routes>
        {/* <News
        apiKey={this.apiKey} setProgress = {this.setProgress}  country="in" category="health" pageSize={this.pageSize}></News> */}
      </div>
    );
  }
}
