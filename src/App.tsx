import React from "react";
import "./App.css";
import getTrans from "./utils/dictionary";
import SideDashboard from "./components/SideDashboard";
import TopAppBar from "./components/TopAppBar";
import "./app.scss";

//import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "white" }}>{getTrans("addFish")}</p>
      </header>
      <SideDashboard />
    </div>
  );
}

export default App;
