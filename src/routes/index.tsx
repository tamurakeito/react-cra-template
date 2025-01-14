import { Routes, Route } from "react-router-dom";

import { Home } from "pages/home";
import { SignIn } from "pages/sign-in";
import SignUp from "pages/sign-up";
import PrivateRoute from "routes/private";

export const RouteSelector = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};
