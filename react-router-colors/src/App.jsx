import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList"

const App = () => {

  return (
    <div>
      
      <BrowserRouter>   
        <RouteList/>
      </BrowserRouter>
    </div>
  )
}


export default App;
