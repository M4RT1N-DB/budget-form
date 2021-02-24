import React  from "react";
import "antd/dist/antd.css";

import "./App.css";

import Question from "./components/question/question";

function App() {
  return (
    <div className="inner-content">
      <div className="container">
        <h1>Weekly Expenses</h1>
        <div className="content">
           <Question />
        </div>
       
      </div>
    </div>
  );
}

export default App;
