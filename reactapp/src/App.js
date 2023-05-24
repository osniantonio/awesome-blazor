import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [host, setHost] = React.useState("React");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input
          type="text"
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />

        <awesome-timer Host={host} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
