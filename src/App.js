import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Texty from './components/TexTy';

const Texty = lazy(() => import("./components/TexTy"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>another component</div>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <Texty />{" "}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
