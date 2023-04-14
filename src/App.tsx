import React, { createContext, useState } from "react";
import "./App.css";
import getTrans from "./utils/dictionary";
import SideDashboard from "./components/SideDashboard";
import TopAppBar from "./components/TopAppBar";
import "./app.scss";
import MainBlock from "./components/MainBlock";
import { E_Screens } from "./utils/enum";
import MessagePopup from "./components/MessagePopup";
import Loader from "./components/Loader";
//import { MainContext } from "./MainContext";
export const MainContext = createContext({} as any);

//import "./styles/app.scss";

function App() {
  const [currentView, setCurrentView] = useState(
    E_Screens.SALT_WATER_FISHES_LIST
  );
  const [showLoader, setShowLoader] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const [oneElementId, setOneElementId] = useState(null);
  const value = {
    currentView,
    setCurrentView,
    oneElementId,
    setOneElementId,
    showLoader,
    setShowLoader,
    showMessage,
    setShowMessage,
    messageText,
    setMessageText,
  };

  return (
    <MainContext.Provider value={value}>
      {showMessage && <MessagePopup />}
      {showLoader && <Loader />}
      <div className="App">
        <header
          className="App-header"
          style={{ height: "100px", minHeight: "100px" }}
        >
          <p style={{ color: "white" }}>{getTrans("addFish")}</p>
        </header>
        <SideDashboard />
        <MainBlock />
      </div>
    </MainContext.Provider>
  );
}

export default App;
