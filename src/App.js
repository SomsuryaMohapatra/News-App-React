import "./App.css";

import React ,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_MEWS_API ;

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Navbar></Navbar>
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                country="in"
                category="health"
                pageSize={pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                country="in"
                category="business"
                pageSize={pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize={pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                country="in"
                category="science"
                pageSize={pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                country="in"
                category="sports"
                pageSize={pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                country="in"
                category="technology"
                pageSize={pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                country="in"
                category="general"
                pageSize={pageSize}
              ></News>
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                country="in"
                category="health"
                pageSize={pageSize}
              ></News>
            }
          />
        </Routes>
      </div>
    );
}
