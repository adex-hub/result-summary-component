import React from "react";
import "./style.scss";
import Area from './Area';
import data from "./data.json";

function App() {
  return (
    <main className="result-summary-card">
      <div className="result">
        <div className="heading">Your Result</div>
        <div className="showcase-circle">
          76<span>of 100</span>
        </div>
        <div className="remark">
          <div className="remark-title">Great</div>
          <div className="remark-paragraph">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
      </div>
      <div className="summary">
        <div className="summary-title">Summary</div>
        <div className="criteria">
         <Area className = "red" icon = {data[0].icon} titleText= {data[0].category} number={data[0].score} />
         <Area className = "yellow" icon = {data[1].icon} titleText= {data[1].category} number={data[1].score} />
         <Area className = "green" icon = {data[2].icon} titleText= {data[2].category} number={data[2].score} />
         <Area className = "blue" icon = {data[3].icon} titleText= {data[3].category} number={data[3].score} />
        </div>
        <button>Continue</button>
      </div>
    </main>
  );
}

export default App;

// className = "red"