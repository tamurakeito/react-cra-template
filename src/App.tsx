import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RouteSelector } from "routes";
import "the-new-css-reset/css/reset.css";
import { AuthContextProvider } from "providers/auth-provider";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Toaster />
        <RouteSelector />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
