import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RouteSelector } from "routes";

function App() {
  return (
    <Router>
      <Toaster />
      <RouteSelector />
    </Router>
  );
}

export default App;
