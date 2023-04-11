import React, { createContext, useState } from "react";
import "./App.css";
import getTrans from "./utils/dictionary";
import SideDashboard from "./components/SideDashboard";
import TopAppBar from "./components/TopAppBar";
import "./app.scss";
import MainBlock from "./components/MainBlock";
import { E_Screens } from "./utils/enum";
//import { MainContext } from "./MainContext";
export const MainContext = createContext({} as any);

//import "./styles/app.scss";

function App() {
  const [currentView, setCurrentView] = useState(
    E_Screens.SALT_WATER_FISHES_LIST
  );
  const [oneElementId, setOneElementId] = useState(null);
  const value = { currentView, setCurrentView, oneElementId, setOneElementId };
  return (
    <MainContext.Provider value={value}>
      <div className="App">
        <header
          className="App-header"
          style={{ height: "100px", minHeight: "100px" }}
        >
          <p style={{ color: "white" }}>{getTrans("addFish")}</p>
        </header>
        <SideDashboard />
        xx
        <MainBlock />
        yy
      </div>
    </MainContext.Provider>
  );
}

export default App;
