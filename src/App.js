import React from "react";
import Home from "./components/afterLogin/Home";
import LoginHomeScreen from "./components/beforeLogin/LoginHomeSceen";

const App = () => {
  const user = "a";
  return <div className="app">{!user ? <LoginHomeScreen /> : <Home />}</div>;
};

export default App;
