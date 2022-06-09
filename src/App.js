import React, { useEffect } from "react";
import AppRouter from "./Router/AppRouter";
import { ColorContext, colors } from "./Context/Context";
import { reducer } from "./Context/Reducer";
import { useReducer } from "react";
import "./App.css";

function App() {
  let [state, dispatch] = useReducer(reducer, colors);

  //  console.log(state)
  useEffect(() => {
    let get = localStorage.getItem("theme");
    dispatch({
      type: "Dark",
      payload: get,
    });
    if (get === "dark") {
      document.body.classList.add("black");
    }
    if (get === null) {
      localStorage.setItem("theme", "light");
      let get = localStorage.getItem("theme");
      dispatch({
        type: "light",
        payload: get,
      });
      // console.log(get, 'fdfdsf')
      document.body.classList.add("white");
      document.body.classList.remove("black");

    }

  }, []);

  return (
    <ColorContext.Provider value={{ color: state, setColor: dispatch }}>
      <div>
        <AppRouter />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
