import React from "react";
import Home from "./pages/home.js";
import './App.scss'
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector(state=>state.themeActions.darkMode)
  return (
    <div className={`App ${darkMode? 'dark-mode' :''}`}>
      <Home/>
    </div>
  );
}

export default App;
