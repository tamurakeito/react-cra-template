import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RouteSelector } from "routes";
import "the-new-css-reset/css/reset.css";
import { AuthContextProvider } from "providers/auth-provider";
import { Toast } from "components/toast";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Toast />
        <RouteSelector />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
