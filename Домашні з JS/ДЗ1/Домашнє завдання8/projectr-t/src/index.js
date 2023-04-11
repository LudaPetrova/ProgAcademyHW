import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import "./style.css";

function App() {
  return (
    <div>
      <h1>Курс валют</h1>
      {data.map((el) => {
        return (
          <table>
            <tbody>
              <tr>
                <td>{el.txt}</td>
                <td>{el.rate}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("body"));
