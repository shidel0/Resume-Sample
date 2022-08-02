import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import MainRouters from "./MainRouters";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainRouters />
      <footer>@bael 2022</footer>
    </div>
  );
};

export default App;
